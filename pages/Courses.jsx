import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "IELTS General Training",
      description:
        "Perfect for those migrating to English-speaking countries or seeking work experience.",
      duration: "8 weeks",
      level: "All levels",
      price: "$299",
      image: "📚",
    },
    {
      title: "IELTS Academic",
      description:
        "Designed for students planning to study at university level in English-speaking countries.",
      duration: "10 weeks",
      level: "All levels",
      price: "$349",
      image: "🎓",
    },
    {
      title: "Speaking Mastery",
      description:
        "Intensive speaking practice to boost your confidence and fluency.",
      duration: "6 weeks",
      level: "Intermediate+",
      price: "$199",
      image: "🎤",
    },
    {
      title: "Writing Excellence",
      description:
        "Master the art of academic and general writing tasks with expert feedback.",
      duration: "6 weeks",
      level: "Intermediate+",
      price: "$199",
      image: "✍️",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our IELTS Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to help you achieve your target band
            score with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{course.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    {course.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not sure which course is right for you?
            </h2>
            <p className="text-xl mb-6 text-indigo-100">
              Take our free assessment to find the perfect program for your
              goals and current level.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-50 transition-colors">
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
