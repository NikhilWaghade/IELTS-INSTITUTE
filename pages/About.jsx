import React from "react";
import { motion } from "framer-motion";
import ParticleRing from "../Animations/ParticleRing";

const About = () => {
  const stats = [
    { value: "10,000+", label: "Students Trained" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Expert Tutors" },
    { value: "8.5", label: "Average Score Increase" },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      bio: "PhD in Applied Linguistics with 15+ years of IELTS training experience.",
      image: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Head of Speaking Department",
      bio: "Former IELTS examiner with expertise in pronunciation and fluency development.",
      image: "MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Writing Specialist",
      bio: "Certified IELTS trainer specializing in academic writing improvement.",
      image: "ER",
    },
  ];

  return (
    <>
      <div>
        <ParticleRing />
        
      </div>
      <div className="relative pt-20 pb-16 ">
        <div className="absolute inset-0 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-center mb-20 bg-cover bg-center bg-no-repeat py-20 rounded-2xl h-[70vh]"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/67890a804e23ac822109426b/6842a4f30786eccff24eca86_image-2.avif')",
            }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                About Our Institute
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Helping students worldwide achieve their dream IELTS scores
                since 2010.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white mb-20 shadow-lg"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-center mb-8 text-indigo-100 leading-relaxed">
                We believe that every student deserves the opportunity to
                succeed in their IELTS journey. Our mission is to provide
                accessible, high-quality education that empowers learners to
                achieve their personal and professional goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  "Personalized Learning",
                  "Expert Guidance",
                  "Innovative Technology",
                  "Proven Results",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-white bg-opacity-20 px-5 py-2 rounded-full text-sm md:text-base tracking-wide hover:bg-opacity-30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Section  */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
              Meet Our Expert Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -8 }} // <-- scale + lift on hover
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top center" }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg text-center
              hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center text-indigo-800 font-bold text-2xl mx-auto mb-6 shadow-inner">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  desc: "We strive for the highest standards in teaching and student outcomes.",
                  color: "indigo",
                },
                {
                  title: "Integrity",
                  desc: "Honest, transparent, and ethical in all our interactions.",
                  color: "purple",
                },
                {
                  title: "Innovation",
                  desc: "Continuously improving our methods with cutting-edge technology.",
                  color: "blue",
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`bg-white p-8 rounded-2xl shadow-md border-l-4 border-${value.color}-500 hover:shadow-xl transition transform hover:-translate-y-2`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
