import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();

  const rotationRef = useRef(0);
  const directionRef = useRef(1);

  useFrame(() => {
    if (modelRef.current) {
      const speed = 0.003; // rotation speed
      rotationRef.current += speed * directionRef.current;

      
      if (rotationRef.current >= Math.PI) {
        rotationRef.current = Math.PI;
        directionRef.current = -1;
      } else if (rotationRef.current <= 0) {
        rotationRef.current = 0;
        directionRef.current = 1;
      }

      modelRef.current.rotation.y = rotationRef.current;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={modelRef}
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75} // Even smaller scale for mobile
        position={isMobile ? [0, -2, -2] : [0, -3.25, -1.5]} // Adjust position to avoid covering text
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [4, 3, 5] : [20, 3, 5], // Move camera closer on mobile
        fov: isMobile ? 30 : 25, // Smaller FOV for mobile screens
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
