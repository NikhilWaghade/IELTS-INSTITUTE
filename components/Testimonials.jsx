import React from "react";
import CircularTestimonials from "../Animations/CircularTestimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Our IELTS Institute provides expert faculty with years of teaching experience. They guide you with personalized strategies to achieve your dream band score.",
      name: "Expert Faculty",
      designation: "Why Choose Us",
      src: "https://i.pinimg.com/1200x/03/d7/04/03d7048765b07e43349dd723b1654fea.jpg",
    },
    {
      quote:
        "We offer modern classrooms, study labs, and online learning resources to ensure students get a complete IELTS preparation experience.",
      name: "Modern Facilities",
      designation: "Why Choose Us",
      src: "https://i.pinimg.com/1200x/02/24/c1/0224c13135da90f5c7f2464ca6d894bb.jpg",
    },
    {
      quote:
        "Our students get access to mock tests, practice sessions, and real exam simulations that build confidence and improve results.",
      name: "Proven Results",
      designation: "Why Choose Us",
      src: "https://i.pinimg.com/736x/2f/2e/4e/2f2e4eca52d953565cb95cc49439dc4f.jpg",
    },
  ];

  return (
    <>
      <section className="pt-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-center font-bold text-3xl -mb-2">
          Why Choose IELTS Institute ?
        </h1>
        {/* Light section: Why Choose IELTS Institute */}
        <div className=" p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
