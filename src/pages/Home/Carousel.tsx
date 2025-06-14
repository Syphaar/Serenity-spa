import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Heading from "../../SharedFiles/Headings"

type Review = {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  content: string;
};

const reviews: Review[] = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jane Doe",
    rating: 5,
    content: "Amazing spa experience. The massage was incredibly relaxing and left me feeling refreshed and completely stress free. The atmosphere was calm and welcoming.",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "John Smith",
    rating: 4,
    content: "Loved the facial treatment. My skin feels so much smoother and healthier. The staff were attentive and made sure I was comfortable throughout the session. Will definitely come back.",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Stone",
    rating: 5,
    content: "The staff were friendly and professional, making the whole experience very pleasant. The environment was peaceful and soothing, perfect for relaxation and taking a break from a busy day.",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Chris Evans",
    rating: 4,
    content: "Excellent service and skilled therapists. The deep tissue massage really helped relieve my muscle tension after a long week. Highly recommend this spa to anyone looking for quality care.",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sara Lee",
    rating: 5,
    content: "Top notch spa. I left feeling completely renewed and energized, with my skin glowing and my body relaxed. The entire experience was just what I needed.",
  },
];


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Track viewport width to determine items per view
  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerView(3);
      else if (width >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalReviews = reviews.length;

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (current + i) % totalReviews;
      result.push(reviews[index]);
    }
    return result;
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  return (
    <section className="bg-cream py-10 px-4 sm:px-8 lg:px-16 lg:py-14 xl:px-24">
        <div className="mb-9 md:flex items-center justify-between">
            <div className="sm:w-[60%] md:w-[50%]">
                <Heading>Testimonials</Heading>
                <p className="">Hear from our happy clients who have experienced true relaxation and rejuvenation with us.</p>
            </div>
        </div>
        
        <div className="">
            {/* Review Cards */}
            <div className={`grid gap-7 sm:grid-cols-2 lg:grid-cols-3`}>
                {getVisibleReviews().map((review) => (
                    <div key={review.id} className="bg-milky p-6 rounded-lg shadow-md text-center">
                        <img src={review.avatar} alt={review.name}
                            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">{review.name}</h3>
                        <div className="flex justify-center text-yellow-400 mb-3">
                            {Array.from({ length: review.rating }, (_, i) => (
                            <FaStar key={i} />
                            ))}
                        </div>
                        <p className="text-black text-sm">{review.content}</p>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center mt-8 space-x-6">
                {/* Left Arrow */}
                <button onClick={prevSlide}
                    className="p-2 bg-tahiti text-white border-2 border-tahiti hover:text-black hover:bg-transparent transition duration-300 rounded-full"
                    aria-label="Previous review"
                >
                    <FaChevronLeft />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {reviews.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === current ? "bg-tahiti" : "bg-white"
                        }`}
                    />
                    ))}
                </div>

                {/* Right Arrow */}   
                <button
                    onClick={nextSlide}
                    className="p-2 bg-tahiti text-white border-2 border-tahiti hover:text-black hover:bg-transparent transition duration-300 rounded-full"
                    aria-label="Next review"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    </section>
  );
};

export default Carousel;
