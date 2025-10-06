import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';

const IMGS = [
  'https://i.pinimg.com/736x/e4/70/d4/e470d413f23265dfb3cb78793bd3214e.jpg',
  'https://i.pinimg.com/1200x/47/73/b9/4773b92dafb4982dccc2539ec9778539.jpg',
  'https://i.pinimg.com/1200x/f2/7e/2a/f27e2a518d0091bae54b010e23693c36.jpg',
  'https://i.pinimg.com/1200x/73/4e/fe/734efeb36107881adf63808135e4a351.jpg',
  'https://i.pinimg.com/1200x/9a/57/d3/9a57d34777eabd1b7add4849dc212af1.jpg',
  'https://i.pinimg.com/1200x/fd/7a/fb/fd7afbf428e922bb2d89a498b541c519.jpg',
  'https://i.pinimg.com/736x/01/00/56/0100560680b14aa67148e3fefa60978d.jpg',
  'https://i.pinimg.com/1200x/80/4a/f3/804af393f7b71e240ea8e73a4b0cac0a.jpg',
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1200 : 2000;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, val => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = startAngle => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = latest => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <>
      {/* Rolling 3D Gallery */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: 'preserve-3d'
            }}
            className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center p-[6%] [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
                }}
              >
                <img
                  src={url}
                  alt="gallery"
                  onClick={() => setSelectedImg(url)}
                  className="pointer-events-auto cursor-pointer 
                             h-[140px] w-[240px]    /* mobile */
                             sm:h-[180px] sm:w-[300px]  
                             md:h-[200px] md:w-[340px]  
                             lg:h-[240px] lg:w-[420px]  
                             xl:h-[220px] xl:w-[480px]  
                             rounded-[20px] border-[4px] border-white object-cover
                             transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="preview"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-xl border-4 border-white"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default RollingGallery;
