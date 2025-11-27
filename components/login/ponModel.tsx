"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import { Group } from "three";

export function PondModel() {
  const modelRef = useRef<Group>(null);
 
  // Cargar el modelo y las animaciones
  const { scene, animations } = useGLTF("/models/little_pond__fish.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Activar las animaciones al montar el componente
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        if(action != null){
          action.reset().play();
        }
      });
    }
  }, [actions]);

  return (
    <Suspense fallback={<div>Cargando modelo...</div>}>
      <group
        ref={modelRef}
        scale={1}
        position={[0, 3, -1.6]}
        rotation={[0, Math.PI / 2, 0.6]}
      >
        <primitive object={scene} />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/models/little_pond__fish.glb");
