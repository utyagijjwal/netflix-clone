import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Trending = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://m.media-amazon.com/images/M/MV5BY2FjMTJmNDItZWNjZS00YmVkLTliZjQtNWI3M2ZkY2Q3OTE2XkEyXkFqcGc@._V1_.jpg', 
    'https://assetscdn1.paytm.com/images/cinema/Ulajh--88b1cbc0-3eb9-11ef-95aa-f7343890830b.jpg', 
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00388631-ggemjdwujm-landscape.jpg', 
    'https://m.media-amazon.com/images/M/MV5BNGI5MjMzODQtMDlhMi00MWU0LTk0MzAtZmY4ZmU4NzU1MmY5XkEyXkFqcGc@._V1_.jpg', 
    'https://upload.wikimedia.org/wikipedia/en/d/d1/Sector_36.jpg', 
    'https://i.scdn.co/image/ab67616d0000b273f472f976626b006c6ad6c204', 
    'https://www.heavenofhorror.com/wp-content/uploads/2024/07/The-Platform-2-horror.jpg', 
    'https://m.media-amazon.com/images/M/MV5BNmNlN2ZlZGYtMmZlYS00N2ZkLWJjMTgtYzI5MjBjY2ExZjMyXkEyXkFqcGc@._V1_.jpg', 
    'https://images.justwatch.com/poster/305436330/s718/fast-x.jpg', 
    'https://m.media-amazon.com/images/M/MV5BYTI1N2VkNTktZjY5Yi00MjAxLThhM2EtODM3ZTA0NDgyOGUwXkEyXkFqcGc@._V1_.jpg'
  ];

  const renderImageWithLabel = (img, index) => (
    <div key={index} className="relative p-2">
      <img
        src={img}
        alt={`Trending ${index + 1}`}
        className="w-full h-72 object-cover rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => openModal(img)} // Open modal with clicked image
      />
      <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-semibold rounded">
        Recently Added
      </div>
    </div>
  );

  const openModal = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-black text-white px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Trending now</h1>
      </div>

      <div className="flex space-x-4 mb-6">
        <select className="bg-gray-800 text-white py-2 px-4 rounded">
          <option>India</option>
          <option>Global</option>
        </select>

        <select className="bg-gray-800 text-white py-2 px-4 rounded">
          <option>Movies</option>
          <option>TV Shows</option>
        </select>
      </div>

      <div className="mb-12">
        <Slider {...settings}>
          {images.map((img, index) => renderImageWithLabel(img, index))}
        </Slider>
      </div>

      {/* Modal for displaying full image */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Full View" className="max-w-full max-h-screen" />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
              &times;
            </button>
          </div>
        </div>
      )}

      {/* More reasons to join and Recently Added section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div>
          <h2 className="text-3xl font-semibold mb-6">More reasons to join</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Reason boxes */}
            <div className="bg-gray-800 p-6 rounded flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-20 w-38 mr-2 text-red-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 12h18m-7 7h7" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2">Enjoy on your TV</h3>
                <p className="text-gray-400">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-20 w-30 mr-2 text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v14a2 2 0 002 2h14" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v4H3V3z" />
        </svg>
        <div>
          <h3 className="text-2xl font-bold mb-2">Download your shows to watch offline</h3>
          <p className="text-gray-400">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-50 w-60 mr-2 text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 4H9m6-8H9m6 4v1a1 1 0 01-1 1H9m6 0H9a1 1 0 01-1-1v-1" />
        </svg>
        <div>
          <h3 className="text-2xl font-bold mb-2">Watch everywhere</h3>
          <p className="text-gray-400">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-100 w-150 mr-2 text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 4H9m6-8H9m6 4v1a1 1 0 01-1 1H9m6 0H9a1 1 0 01-1-1v-1" />
        </svg>
        <div>
          <h3 className="text-2xl font-bold mb-2">Create profiles for kids</h3>
          <p className="text-gray-400">
            Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
            </p>
            </div>
            </div>

            {/* Other reasons... */}
            {/* Repeat for other reasons as necessary */}
          </div>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-red-500`}
      style={{ ...style, display: "block", right: 0, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-red-500`}
      style={{ ...style, display: "block", left: 0, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default Trending;
