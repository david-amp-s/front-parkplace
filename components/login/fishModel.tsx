"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PondModel } from "./ponModel";

const FishModel = () => {
  return (
    <div
      className="
        w-[300px] h-[300px]   /* Tamaño del icono */
        pointer-events-none
      "
    >
      <Canvas
        camera={{ position: [0, 2, 18], fov: 85 }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[9, 2, 2]} intensity={5} />

        <Suspense fallback={null}>
          <PondModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FishModel;
