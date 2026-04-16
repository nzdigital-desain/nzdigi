import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Ring({ position = [0, 0, 0] as [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + 0.5;
    ref.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1, 0.15, 32, 64]} />
        <meshStandardMaterial color="#d4a574" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Diamond */}
      <mesh position={[position[0], position[1] + 1, position[2]]}>
        <octahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0} transparent opacity={0.9} />
      </mesh>
    </Float>
  );
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1);
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <MeshDistortMaterial color="#f5e6d3" transparent opacity={0.15} distort={0.3} speed={1.5} />
    </mesh>
  );
}

export default function RingScene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffeedd" />
        <pointLight position={[-2, 3, 2]} intensity={0.6} color="#ffddcc" />
        <spotLight position={[0, 5, 3]} intensity={1.2} angle={0.3} penumbra={1} color="#fff5ee" />
        <Ring />
        <GlowingSphere />
      </Canvas>
    </div>
  );
}
