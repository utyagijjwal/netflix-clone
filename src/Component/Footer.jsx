import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto text-center mb-5">
        <h2 className="text-lg font-bold mb-2">Ready to watch?</h2>
        <p className="text-sm mb-5">
          Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center items-center mb-5">
          <input
            type="email"
            placeholder="Email address"
            className="p-2 rounded-l-md border border-gray-600 bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 transition duration-300 w-full md:w-96 lg:w-1/2" // Adjusted width for larger screens
          />
          <button className="bg-red-600 text-white px-5 py-2 rounded-r-md transition duration-300 hover:bg-red-700">
            Get Started
          </button>
        </div>
        <p className="text-sm mb-5">
          Questions? Call <a href="tel:0008009191694" className="underline">000-800-919-1694</a>
        </p>
      </div>
      <div className="border-t border-gray-700 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          {[
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
            "Speed Test",
            "Legal Notices",
            "Only on Netflix"
          ].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
