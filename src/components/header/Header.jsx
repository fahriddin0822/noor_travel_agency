import React, { useState, useEffect, useRef } from "react";
import { IoLanguage } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = ({ language, setLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-[999] bg-gradient-to-r from-black to-slate-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer w-20 h-14 flex items-center" 
              onClick={() => navigate("/")}
            >
              <img 
                src="/images/logo.jpg" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition duration-300 p-2 rounded-md"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IoLanguage className="w-6 h-6" />
                <span className="hidden md:block capitalize">
                  {language || "Language"}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {[
                      { code: "en", label: "English" },
                      { code: "ru", label: "Русский" },
                      { code: "uz", label: "O'zbekcha" }
                    ].map((lang, index) => (
                      <button
                        key={lang.code}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-150"
                        onClick={() => handleLanguageChange(lang.code)}
                        role="menuitem"
                      >
                        <p className="font-sans">{lang.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;