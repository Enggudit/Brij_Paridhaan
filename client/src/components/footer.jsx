import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-400 to-amber-700 text-amber-950 w-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Address / Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Braj Paridhaan</h3>
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" />
            <span>
              Shree Brij Bhavan, Main Market, Vrindavan, Mathura, Uttar Pradesh,
              India
            </span>
          </p>
          <p className="flex items-center gap-2 mt-3">
            <Phone className="w-5 h-5" /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5" /> support@brajparidhaan.com
          </p>
        </div>
        {/* Google Map */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Find Us</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9339312712934!2d77.68440531504413!3d27.574326682845796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711ff21fdf05%3A0xb8f7d9308d53d07e!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692112345678!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:translate-x-2 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link to="/feedback-form">Feedback</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Twitter className="w-6 h-6 text-sky-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Linkedin className="w-6 h-6 text-blue-700" />
            </a>
          </div>
        </div>

        
      </div>

      {/* Bottom Section */}
      <div className="border-t border-amber-700 text-center py-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold">Braj Paridhaan</span>. All Rights Reserved.
        <br />
        <div className="flex justify-center mt-1">
          <h4>Developed and Managed by</h4>
          <h1 className="font-black text-lg text-white">&nbsp; SLJ Softech</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
