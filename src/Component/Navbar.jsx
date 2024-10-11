import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(true);

  // Hides navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide navbar on scroll down
      } else {
        setShow(true);  // show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="flex items-center justify-between bg-black p-4">
        {/* Netflix Logo */}
        <h1 className="text-red-600 text-3xl font-bold">
          NETFLIX
        </h1>
        
        <div className="flex items-center space-x-4">
          {/* Language Button */}
          <select className="bg-transparent text-white border border-gray-500 rounded px-3 py-1">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          {/* Sign In Button */}
          <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
