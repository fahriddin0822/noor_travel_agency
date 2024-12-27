import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = ({ testimonials, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const TestimonialCard = ({ name, role, comment }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-600 mb-4">{language(role)}</p>
      <p className="text-gray-800 line-clamp-3">{language(comment)}</p>
    </div>
  );

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="relative w-full py-8">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={currentIndex * itemsPerSlide + index}
              className="transform transition-all duration-500"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;