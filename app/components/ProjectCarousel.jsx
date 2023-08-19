'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative bg-gray-100 p-4">
      <div className="mx-auto w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="mt-6">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold">{projects[currentIndex].title}</h2>
            <p className="mt-2 text-gray-600">{projects[currentIndex].description}</p>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <Button onClick={prevProject} color="primary" variant="text">
            &lt; Previous
          </Button>
          <Button onClick={nextProject} color="primary" variant="text">
            Next &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
