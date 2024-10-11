import React, { useState } from 'react';

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which question is active

  const questions = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Netflix offers several membership plans ranging from $8.99 to $15.99 per month, depending on the plan you choose."
    },
    {
      question: "Where can I watch?",
      answer: "You can watch Netflix on your smart TV, gaming consoles, streaming media players, tablets, phones, and computers."
    },
    {
      question: "How do I cancel?",
      answer: "To cancel your Netflix membership, go to the Account section on the Netflix website and follow the cancellation process."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has a diverse library of movies, TV shows, documentaries, and original content across various genres."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "Yes, Netflix has a dedicated Kids profile with a selection of family-friendly movies and TV shows."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-6">
      <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border border-gray-600 rounded-lg shadow-md">
            <button
              className="flex justify-between items-center w-full py-4 px-6 bg-gray-800 rounded-t-lg text-left text-lg font-semibold"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className="text-red-500">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-700 rounded-b-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
