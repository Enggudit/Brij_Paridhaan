import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";

const LiquidSlider = () => {
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Handle login submit
  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", lemail);
    data.append("password", lpassword);
    dispatch(login(data));
  };

  // Handle login result
  useEffect(() => {
  if (isAuthenticated) {
    toast.success("Login successful 🎉");
    navigate("/login-home");
    setTimeout(() => dispatch(resetAuthSlice()), 100);
  }
  if (error) {
    if (Array.isArray(error)) {
      error.forEach((errMsg) => toast.error(errMsg));
    } else {
      toast.error(error);
    }
    setTimeout(() => dispatch(resetAuthSlice()), 100);
  }
}, [isAuthenticated, error, dispatch, navigate]);


  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      {/* Background slider */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-200 to-amber-500">
        
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center absolute w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[28%] 
                   border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/70 
                   backdrop-blur-md shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-2xl font-bold text-zinc-800 mb-3 text-center">
          Welcome Back 👋
        </h1>
        <h2 className="text-base text-zinc-500 mb-2 text-center">
          Login to continue
        </h2>

        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center w-full space-y-5"
        >
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={lemail}
              onChange={(e) => setLemail(e.target.value)}
              required
              placeholder="Enter your email"
              className="border border-zinc-400 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-zinc-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={lpassword}
              onChange={(e) => setLpassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="border border-zinc-400 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl text-lg w-full 
                       shadow-md hover:shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default LiquidSlider;
