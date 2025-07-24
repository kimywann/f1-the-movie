import { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Contact"];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <img src={logo} alt="logo" className="w-24 h-8" />

        <div className="flex items-center gap-4">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{
                scale: 1.1,
                rotate: -1,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: 0,
                transition: { type: "spring", stiffness: 500 },
              }}
              className="text-white tracking-tight px-4 py-2 transition-colors duration-200 hover:text-yellow-400"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
