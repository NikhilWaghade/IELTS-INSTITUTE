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
