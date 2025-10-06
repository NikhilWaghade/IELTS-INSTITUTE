import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaMicrophone, FaClipboardList, FaChartBar, FaChalkboardTeacher } from "react-icons/fa";
import { cn } from "../lib/utils"


const SQRT_5000 = Math.sqrt(5000);

//  Features Data
const features = [
  {
    title: "Expert Trainers",
    description: "Learn from certified IELTS trainers with years of experience.",
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
  },
  {
    title: "Mock Tests",
    description: "Practice with real-time mock tests to boost your confidence.",
    icon: <FaClipboardList className="text-4xl text-green-600" />,
  },
  {
    title: "Performance Analytics",
    description: "Track your progress with AI-powered analytics.",
    icon: <FaChartBar className="text-4xl text-blue-600" />,
  },
  {
    title: "Speaking Practice",
    description: "Interactive speaking sessions to improve fluency.",
    icon: <FaMicrophone className="text-4xl text-red-600" />,
  },
];

// ✅ Testimonials Data
const testimonials = [
  { tempId: 0, testimonial: "This institute transformed my IELTS journey. I scored Band 8!", by: "Ravi, Student", imgSrc: "https://i.pravatar.cc/150?img=11" },
  { tempId: 1, testimonial: "Mock tests felt exactly like the real exam. Highly recommended!", by: "Aisha, Student", imgSrc: "https://i.pravatar.cc/150?img=12" },
  { tempId: 2, testimonial: "Speaking practice sessions boosted my confidence a lot.", by: "John, Student", imgSrc: "https://i.pravatar.cc/150?img=13" },
  { tempId: 3, testimonial: "The trainers are very supportive and guided me throughout.", by: "Meena, Student", imgSrc: "https://i.pravatar.cc/150?img=14" },
];

// ✅ Testimonial Card
const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-lg",
        isCenter
          ? "z-10 bg-indigo-600 text-white border-indigo-600"
          : "z-0 bg-white text-gray-800 border-gray-300 hover:border-indigo-400"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-400"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-14 rounded-full object-cover mx-auto"
      />
      <h3
        className={cn(
          "text-base sm:text-lg font-medium text-center",
          isCenter ? "text-white" : "text-gray-800"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "mt-4 text-sm italic text-center",
          isCenter ? "text-gray-200" : "text-gray-500"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

// ✅ Main Component
const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>


      {/* ✅ Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div
          className="relative w-full overflow-hidden "
          style={{ height: 600 }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
                className='bg-black'
              />
            );
          })}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              onClick={() => handleMove(-1)}
              className="flex h-12 w-12 items-center justify-center bg-white border border-gray-400 rounded-full hover:bg-indigo-600 hover:text-white transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleMove(1)}
              className="flex h-12 w-12 items-center justify-center bg-white border border-gray-400 rounded-full hover:bg-indigo-600 hover:text-white transition"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaggerTestimonials;
