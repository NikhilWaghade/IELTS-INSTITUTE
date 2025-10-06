import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../lib/ParticleRingUtils";
import { Link } from "react-router-dom";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} intensity={10.0} />
        <PointCircle />
      </Canvas>

      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-left text-slate-200 font-medium text-xl sm:text-2xl md:text-4xl lg:text-5xl pointer-events-none leading-snug w-[90%] max-w-3xl -ml-72">
        <span className="block font-bold text-white mb-2">
          Master IELTS with <br /> <b className="text-yellow-300">Confidence</b>
        </span>
        <span className="block text-slate-300 mb-4 text-2xl">
          Achieve your dream band score with our expert-led <br /> courses and
          personalized learning approach.
        </span>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition">
            Start Free Trial
          </Link>
          <Link to="/courses" className="border border-white text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-blue-600 transition">
            View Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
