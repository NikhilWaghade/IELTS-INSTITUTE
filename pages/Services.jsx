import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Speaking Practice",
    description:
      "Improve your speaking skills with interactive exercises, live feedback, and expert tips.",
    path: "/speaking",
    colorFrom: "from-indigo-400",
    colorTo: "to-purple-500",
  },
  {
    title: "Mock Tests",
    description:
      "Take full-length IELTS mock tests to evaluate your readiness and track your progress.",
    path: "/mock-tests",
    colorFrom: "from-green-400",
    colorTo: "to-teal-500",
  },
  {
    title: "AI Band Score",
    description:
      "Get your AI-predicted IELTS band score instantly based on your practice tests and speaking submissions.",
    path: "/ai-band-score",
    colorFrom: "from-yellow-400",
    colorTo: "to-orange-500",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all duration-300"
            onClick={() => navigate(service.path)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.colorFrom} ${service.colorTo} opacity-30`}
            ></div>
            <div className="relative bg-white rounded-2xl p-8 text-center z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
