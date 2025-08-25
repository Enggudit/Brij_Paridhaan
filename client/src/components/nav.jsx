import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Navbar() {
  const section = useRef(null);
  const animate = useRef(null);
  const [activeCategory, setActiveCategory] = useState("men");
  const [previewImage, setPreviewImage] = useState("/images/company.png");
  const [selectedItem, setSelectedItem] = useState(""); // new state
  const [maincategories, setMaincategories] = useState(""); // new state
  const navigate = useNavigate();

  // Categories data
  const categories = {
    men: {
      Shirt: "/images/men-shirt.jpg",
      Pant: "/images/men-pant.jpg",
      Kurta: "/images/men-kurta.jpg",
      Pajama: "/images/men-pajama.jpg",
    },
    women: {
      Saree: "/images/women-saree.jpg",
      Plazo: "/images/women-plazo.jpg",
      Kurti: "/images/women-kurti.jpg",
      Lehnga: "/images/women-lehnga.jpg",
    },
    girl: {
      Shirt: "/images/girl-shirt.jpg",
      Skirt: "/images/girl-skirt.jpg",
      Kurti: "/images/girl-kurti.jpg",
      Jeans: "/images/girl-jeans.jpg",
    },
    boy: {
      Shirt: "/images/boy-shirt.jpg",
      Pant: "/images/boy-pant.jpg",
      Kurta: "/images/boy-kurta.jpg",
      Pajama: "/images/boy-pajama.jpg",
    },
  };

  useEffect(() => {
    const nvmenu = section.current;
    const ani = animate.current;

    gsap.set(ani, { height: 0, autoAlpha: 0, overflow: "hidden" });

    const openMenu = () => {
      const dropdownHeight = ani.scrollHeight;
      gsap.to(ani, {
        height: dropdownHeight,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const closeMenu = () => {
      gsap.to(ani, {
        height: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    nvmenu.addEventListener("mouseenter", openMenu);
    nvmenu.addEventListener("mouseleave", closeMenu);

    return () => {
      nvmenu.removeEventListener("mouseenter", openMenu);
      nvmenu.removeEventListener("mouseleave", closeMenu);
    };
  }, []);

  return (
    <div className="shadow-xl">
      <nav className="w-full z-[999] text-amber-900 p-4 flex justify-around items-center">
        {/* Logo */}
        <img className="w-[8%] rounded-2xl" src="/images/company.png" alt="logo" />

        {/* Navbar */}
        <ul className="navbar flex justify-center font-bold text-xl gap-10">
          <li><Link to="/" className="hh66 relative">Home</Link></li>

          {/* Product Dropdown */}
          <li ref={section} className="relative">
            <a className="sections hh66 cursor-pointer">Product</a>

            {/* Dropdown */}
            <div
              ref={animate}
              className="fixed left-0 top-[14vh] w-screen bg-white shadow-2xl z-50 flex border-t border-zinc-300"
            >
             {/* Left Categories */}
            <div className="w-1/4 border-r border-zinc-300 bg-zinc-100">
              {Object.keys(categories).map((cat) => (
                <div
                  key={cat}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`px-6 py-3 cursor-pointer hover:bg-white ${
                    activeCategory === cat ? "bg-white font-semibold" : ""
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </div>
              ))}
            </div>
            {/* Middle Subcategories */}
            <div className="w-2/4 p-6 grid grid-cols-2 gap-4">
              {Object.keys(categories[activeCategory]).map((sub) => (
                <div
                  key={sub}
                  className="cursor-pointer text-zinc-700 hover:text-black"
                  onMouseEnter={() =>
                    setPreviewImage(categories[activeCategory][sub])
                  }
                  onClick={() => {
                    setMaincategories(activeCategory);   // store category
                    setSelectedItem(sub);                // store subcategory
                    navigate(`/products/${activeCategory}/${sub.toLowerCase()}`);
                  }}
                >
                  {sub}
                </div>
              ))}
            </div>
              {/* Right Preview Image */}
              <div className="w-1/4 flex items-center justify-center border-l border-zinc-300">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="object-cover w-[80%] h-[80%] rounded-lg border border-zinc-400"
                />
              </div>
            </div>
          </li>

          <li><Link to="/AboutUs" className="hh66 relative">Blog's</Link></li>
          <li><Link to="/AboutUs" className="hh66 relative">About</Link></li>
          <li><Link to="/feedback-form" className="relative hh66">Feedback</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
