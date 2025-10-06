import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/image.png";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import RollingGallery from "../Animations/RollingGallery";
import ScrollVelocity from "../Animations/ScrollVelocity";
import { LandingAccordionItem } from "../Animations/AccordionItem";
import { BgVideoText } from "../Animations/BgVideoText";
import ParticleRing from "../Animations/ParticleRing";




const Hero = () => {

const IMAGES_ROW_A = [
  "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
const IMAGES_ROW_B = [
  "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
  return (
    <>
      <section className="bg-transparent">
        <ParticleRing
      heading={
        <>
          Master IELTS with <span className="text-yellow-300">Confidence</span>
        </>
      }
      paragraph="Achieve your dream band score with our expert-led courses and personalized learning approach."
      buttons={[
        { label: "Start Free Trial", href: "/courses", variant: "primary" },
        { label: "View Courses", href: "/courses", variant: "secondary" },
      ]}
    />

      
      <div className="relative pt-16 pb-12 md:pt-24 md:pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Background Image */}            

        <div className="absolute inset-0">
          {/* <img
            src={heroImg}
            alt="IELTS Background"
            className="w-full h-full object-cover"
          /> */}
          
          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
                Master IELTS with{" "}
                <span className="text-yellow-300">Confidence</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200">
                Achieve your dream band score with our expert-led courses and
                personalized learning approach.
              </p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Start Free Trial Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-48"
                >
                  <Link
                    to="/courses"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 ease-in-out text-center block"
                  >
                    Start Free Trial
                  </Link>
                </motion.div>

                {/* View Courses Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-48"
                >
                  <Link
                    to="/courses"
                    className="w-full bg-transparent border-2 border-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 text-center block"
                  >
                    View Courses
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>


          </div>
        </div>
        </div>
        
        
      {/* About Section */}
      <section>
        <div className="w-full">
          <LandingAccordionItem />
        </div>
        </section>
        
      {/* gallery section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className=" text-center font-bold text-3xl ">
          Explore Our Gallery
        </h1>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </section>

      {/* scroll based animation */}
      <section className="bg-white py-12 mt-20">
        <ScrollVelocity
          texts={[
            "Believe in Yourself, Achieve Your Dreams",
            "Your Success is Our Mission",
          ]}
          // velocity={velocity}
          className="custom-scroll-text p-10"
        />
      </section>
  

</section>
      
    </>
  );
};

export default Hero;
