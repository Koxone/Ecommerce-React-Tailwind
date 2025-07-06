import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const Carousel = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!items.length) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="bg-opacity-50 hover:bg-opacity-75 hover-scale focus-ring absolute top-1/2 left-4 z-10 -translate-y-1/2 transform rounded-full bg-black p-2 text-white transition-all duration-200"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            onClick={goToNext}
            className="bg-opacity-50 hover:bg-opacity-75 hover-scale focus-ring absolute top-1/2 right-4 z-10 -translate-y-1/2 transform rounded-full bg-black p-2 text-white transition-all duration-200"
          >
            <ChevronRightIcon size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`focus-ring h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-opacity-50 hover:bg-opacity-75 bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
