import React, { useState, useEffect, useRef } from "react"

// Define the type for each slide object
interface Slide {
  image: string
  caption?: string // Caption is optional
}

// Define the props for the Carousel component
interface CarouselProps {
  slides: string[]
  autoPlayInterval?: number | null // Optional autoPlay interval, can be null to disable
}

// Carousel Component
const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    )
  }

  // Set Slide based on Indicator Click
  const setSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // AutoPlay Functionality
  useEffect(() => {
    if (autoPlayInterval !== null) {
      slideInterval.current = setInterval(nextSlide, autoPlayInterval)
    }

    // Clear interval on component unmount
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current)
    }
  }, [autoPlayInterval])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
