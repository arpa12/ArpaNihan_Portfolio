import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Environment } from "@react-three/drei";

function FloatingBoxes() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = time * 0.1;
    group.current.rotation.x = Math.sin(time * 0.3) * 0.2;
  });

  return (
    <group ref={group}>
      {[...Array(7)].map((_, i) => (
        <FloatingBox
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        />
      ))}
    </group>
  );
}

function FloatingBox({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y =
      position[1] + Math.sin(time + position[0]) * 0.5;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.8}
        roughness={0.2}
        emissive="#4f46e5"
        emissiveIntensity={0.2}
      />
    </Box>
  );
}

const SummaryScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#818cf8" />
      <FloatingBoxes />
      <Environment preset="city" />
    </Canvas>
  );
};

export default SummaryScene;
