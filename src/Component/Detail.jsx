import React from 'react';

const Detail = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white px-4"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 z-10">
        Unlimited movies, TV shows and more
      </h1>

      {/* Subheading */}
      <h3 className="text-xl md:text-2xl text-center mb-4 z-10">
        Starts at ₹149. Cancel at any time.
      </h3>

      {/* Description */}
      <h4 className="text-lg md:text-xl text-center mb-6 z-10">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>

      {/* Email Input and Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-md space-y-4 sm:space-y-0 sm:space-x-4 z-10">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 text-white bg-transparent border border-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
        />
        <button className="w-full sm:w-64 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Detail;
