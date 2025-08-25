import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, Home, Image, Video, Star } from "lucide-react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    rating: 0,
    photo: null,
    video: null,
  });

  const [preview, setPreview] = useState({ photo: null, video: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      const fileURL = URL.createObjectURL(files[0]);
      setPreview({ ...preview, [name]: fileURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("✅ Thank you! Your feedback has been submitted.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-100 to-yellow-400 p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          ✨ Product Feedback
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <User className="w-5 h-5 text-amber-500" /> Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <Phone className="w-5 h-5 text-amber-500" /> Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            placeholder="e.g. +91 9876543210"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <Mail className="w-5 h-5 text-amber-500" /> Email (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <Home className="w-5 h-5 text-amber-500" /> Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2 font-medium">
            ⭐ Rate our product *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer transition ${
                  formData.rating >= star ? "fill-amber-500 text-amber-500" : "text-gray-300"
                }`}
                onClick={() => handleRating(star)}
              />
            ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <Image className="w-5 h-5 text-amber-500" /> Upload Photo (Optional)
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {preview.photo && (
            <img
              src={preview.photo}
              alt="preview"
              className="mt-2 rounded-xl shadow-md w-32 h-32 object-cover"
            />
          )}
        </div>

        {/* Video Upload */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-600 mb-1">
            <Video className="w-5 h-5 text-amber-500" /> Upload Video (Optional)
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="w-full"
          />
          {preview.video && (
            <video
              controls
              className="mt-2 rounded-xl shadow-md w-full max-h-48"
            >
              <source src={preview.video} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md"
        >
          🚀 Submit Feedback
        </motion.button>
      </motion.form>
    </div>
  );
}

export default FeedbackForm;
