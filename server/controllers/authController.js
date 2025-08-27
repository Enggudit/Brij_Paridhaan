import ErrorHandler from "../middlewares/errorMiddlewars.js";
import {User} from "../models/userModels.js";
import bcrypt from "bcrypt";
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import { sendToken } from "../utils/sendToken.js";


export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    
    if(!email || !password){
        return next(new ErrorHandler("Please enter all fields", 400));
    }
    const user = await User.findOne({email, accountVerified: true}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invaild User/Password", 404));
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid User/Password", 400));
    }
    sendToken(user, 200, "Login successfully", res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("token", "",{
        expires: new Date(Date.now()),
        httpOnly: true,
    }).json({
        sucess: true,
        message: "Logout successfully",
    });
});

export const getUser = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        sucess: true,
        user,
    });
});

  
export const updatePassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user._id).select("+password");
    const {currentPassword, newPassword, confirmnewPassword} = req.body;
    if(!currentPassword || !newPassword || !confirmnewPassword){
        return next(new ErrorHandler("Please enter all fields", 400));
    }
    const isPasswordMatched = await bcrypt.compare(currentPassword, user.password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Current password is incorrect", 400));
    }
    if(newPassword !== confirmnewPassword){
        return next(new ErrorHandler("New password does not match", 400));
    }  

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({
        sucess: true,
        message: "Password updated successfully",
    });
});


