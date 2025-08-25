import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    review:
      "The fabric quality is excellent. Very comfortable and stylish. Highly recommended!",
    rating: 5,
    image: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    review:
      "Loved the design! Delivery was fast and packaging was neat. Value for money.",
    rating: 3,
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    review:
      "Really happy with my purchase. Fits perfectly and the material feels premium.",
    rating: 5,
    image: "/images/user3.jpg",
  },
  {
    id: 4,
    name: "Neha Gupta",
    review:
      "Great experience shopping here. Customer support was very responsive.",
    rating: 4,
    image: "/images/user4.jpg",
  },
  {
    id: 5,
    name: "Rohan Singh",
    review:
      "Stylish collection with affordable prices. I’ll definitely buy again!",
    rating: 5,
    image: "/images/user5.jpg",
  },
];

function Feedback() {
  const carouselRef = useRef(null);

  const slide = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = 350; // kitna px slide karna hai
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-screen px-6 py-12 bg-gradient-to-b from-amber-300 to-amber-400 relative">
      {/* Heading */}
      <h2 className="text-amber-950 text-3xl md:text-4xl font-extrabold text-center">
        Customer Feedback
      </h2>
      <hr className="h-[4px] w-28 mx-auto my-4 bg-amber-950 rounded-full border-none" />

      {/* Carousel Container */}
      <div className="relative flex items-center mt-10">
        {/* Left Button */}
        <button
          onClick={() => slide("left")}
          className="absolute -left-3 md:-left-6 z-10 p-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Cards */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto h-[45vh] no-scrollbar scroll-smooth px-2 items-center"
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="min-w-[300px] max-w-[320px] h-[200px] bg-white rounded-xl shadow-lg p-6 hover:scale-115 hover:border-1 transform transition duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h4 className="font-semibold text-lg text-amber-800">
                    {rev.name}
                  </h4>
                  <div className="flex">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Review Text */}
              <p className="text-gray-700 text-sm md:text-base">{rev.review}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => slide("right")}
          className="absolute -right-3 md:-right-6 z-10 p-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Feedback;
