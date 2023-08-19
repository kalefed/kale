'use client'
import React, { useState } from 'react';

// ... (previous imports)

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-screen-md ">
      {items.map((item, index) => (
        <div key={index} className=" bg-white bg-opacity-50 rounded-md overflow-hidden mb-2">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <div className="text-lg font-semibold text-gray font-mono">{item.title}</div>

            <div className='flex justify-end'>
              <div className="text-lg font-semibold text-gray font-mono mr-3">{item.position}</div>
              <svg
                className={`w-5 h-5 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg></div>
          </button>
          {activeIndex === index && (
            <div>
              <div className='p-4 font-mono italic uppercase text-gray'>{item.date}</div>
              <div className="p-4 font-sans  text-gray">{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
