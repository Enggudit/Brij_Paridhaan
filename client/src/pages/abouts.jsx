import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Leaf, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-amber-0 to-amber-400 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-amber-800 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          About <span className="text-amber-600">Brij Paridhaan</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Weaving traditions, designing elegance – Brij Paridhaan celebrates
          the soulful heritage of Brij through timeless fashion that blends
          culture with modern aesthetics.
        </motion.p>
      </div>

      {/* Story Section */}
      <motion.div
        className="mt-12 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Braj Paridhaan, located in the heart of the
spiritual city of <strong>Vrindavan</strong>, was born from a vision
— a dream of blending heritage with
contemporary style to create a space that
celebrates both beauty and comfort. Inspired by
the vibrant culture of Vrindavan, we set out on a
journey to redefine fashion by combining timeless
tradition with modern design, delivering a unique
experience for our customers
        </p>
      </motion.div>

      {/* Values Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Heart className="w-10 h-10 text-rose-500 mx-auto mb-3" />,
            title: "Authenticity",
            desc: "Inspired by Brij’s heritage, our designs stay true to culture and roots.",
          },
          {
            icon: <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
            title: "Quality",
            desc: "Premium fabrics and fine craftsmanship for lasting comfort & style.",
          },
          {
            icon: <Leaf className="w-10 h-10 text-green-600 mx-auto mb-3" />,
            title: "Sustainability",
            desc: "Thoughtful fashion that respects artisans, culture, and nature.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-amber-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To redefine ethnic fashion by making it elegant, accessible, and
            meaningful while keeping Indian traditions alive.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted name in ethnic & contemporary fashion, bringing
            Brij’s cultural richness to wardrobes worldwide.
          </p>
        </motion.div>
      </div>

      {/* Owners Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-amber-800 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Meet Our Founders
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: "Late Shri Gopal Das ji Agarwal",
              role: "Founder & Creative Director",
              img: "/images/1st.png",
              desc: "Our journey began in 1956 when Late Shri Gopal Das Ji Agarwal laid the foundation of Braj Paridhaan, driven by a vision to bring traditional and elegant attire to life. For nearly 15–16 years, he nurtured and expanded the brand with dedication. However, due to unforeseen circumstances, the operations had to be paused.",
            },
            {
              name: "Shri Mahesh Agarwal ji",
              role: "Co-Founder & Operations Head",
              img: "/images/2nd.png",
              desc: "Carrying forward his entrepreneurial legacy, his son, Shri Mahesh Agarwal Ji, established Mahesh Vastra Bhandar, which continues to thrive to this day, serving generations with trust and quality. Through his relentless hard work and dedication, he built a strong foundation in the industry.",
            },
            {
              name: "Mr. Mukund Agarwal",
              role: "Co-Founder & Operations Head",
              img: "/images/3rd.png",
              desc: "Inspired by Mahesh Agarwal Ji’s efforts and perseverance, his sons, Mr. Mukund Agarwal & Mr. Anand Agarwal, along with Mr. Anand Agarwal’s wife, Mrs. Rinkal Agarwal, decided to step into the business and revive Braj Paridhaan in 2022. With passion, innovation, and a deep respect for heritage, they have successfully steered the business for over 2.5 years, keeping the legacy alive and fulfilling their grandfather’s vision.",
            },{
              name: "Mr. Anand Agarwal",
              role: "Co-Founder & Operations Head",
              img: "/images/4th.png",
              desc: "Inspired by Mahesh Agarwal Ji’s efforts and perseverance, his sons, Mr. Mukund Agarwal & Mr. Anand Agarwal, along with Mr. Anand Agarwal’s wife, Mrs. Rinkal Agarwal, decided to step into the business and revive Braj Paridhaan in 2022. With passion, innovation, and a deep respect for heritage, they have successfully steered the business for over 2.5 years, keeping the legacy alive and fulfilling their grandfather’s vision.",

            },{
              name: "Mrs. Rinkal Agarwal",
              role: "Co-Founder & Operations Head",
              img: "/images/5th.png",
              desc: "",
            },
          ].map((owner, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={owner.img}
                alt={owner.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-700">{owner.name}</h3>
              <p className="text-gray-600">{owner.role}</p>
              <p className="text-sm text-gray-500 mt-3">{owner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legal Info */}
      <motion.div
        className="mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-amber-600" />
          Legal Information
        </h2>
        <ul className="text-gray-600 space-y-2">
          <li><strong>Registered Name:</strong> Brij Paridhaan Pvt. Ltd.</li>
          <li><strong>UDYAM REG:</strong> UDYAM-UP-54-0061020</li>
          <li><strong>GSTIN:</strong> 09BSKPA5111R1ZG</li>
          <li><strong>Head Office:</strong> Vrindavan, Mathura, Uttar Pradesh, India</li>
          <li>
            <strong>Disclaimer:</strong> All designs are original creations of
            Brij Paridhaan. Unauthorized copying or distribution is strictly prohibited.
          </li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-amber-800">
          Join the Brij Paridhaan Family 💛
        </h2>
        <p className="text-gray-700 mt-3 mb-6">
          Discover our latest collections and celebrate tradition with modern
          elegance.
        </p>
        <motion.a
          href="/shop"
          className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition inline-block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Collection
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
