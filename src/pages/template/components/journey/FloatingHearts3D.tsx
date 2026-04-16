import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Heart({ position, scale, color, speed }: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    }
  });

  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y + 0.3);
    shape.bezierCurveTo(x, y + 0.5, x - 0.15, y + 0.7, x - 0.35, y + 0.7);
    shape.bezierCurveTo(x - 0.7, y + 0.7, x - 0.7, y + 0.35, x - 0.7, y + 0.35);
    shape.bezierCurveTo(x - 0.7, y + 0.15, x - 0.55, y - 0.1, x, y - 0.4);
    shape.bezierCurveTo(x + 0.55, y - 0.1, x + 0.7, y + 0.15, x + 0.7, y + 0.35);
    shape.bezierCurveTo(x + 0.7, y + 0.35, x + 0.7, y + 0.7, x + 0.35, y + 0.7);
    shape.bezierCurveTo(x + 0.15, y + 0.7, x, y + 0.5, x, y + 0.3);
    return shape;
  }, []);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <extrudeGeometry args={[heartShape, { depth: 0.15, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 }]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} roughness={0.3} metalness={0.4} />
      </mesh>
    </Float>
  );
}

function Particles({ count = 50 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#d4a0a0" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function FloatingHearts3D({ variant = "default" }: { variant?: "default" | "love" | "proposal" | "wedding" }) {
  const hearts = useMemo(() => {
    const configs = {
      default: [
        { pos: [-2, 1, 0] as [number, number, number], scale: 0.3, color: "#c9787c", speed: 1.2 },
        { pos: [2, -1, -1] as [number, number, number], scale: 0.2, color: "#d4a0a0", speed: 0.8 },
        { pos: [0, 2, -2] as [number, number, number], scale: 0.15, color: "#e8c4c4", speed: 1.5 },
      ],
      love: [
        { pos: [-1.5, 0.5, 0] as [number, number, number], scale: 0.4, color: "#c9787c", speed: 1 },
        { pos: [1.5, 1, -1] as [number, number, number], scale: 0.35, color: "#d4737a", speed: 1.3 },
        { pos: [0, -1, -0.5] as [number, number, number], scale: 0.25, color: "#e8c4c4", speed: 0.9 },
        { pos: [-2.5, -0.5, -1.5] as [number, number, number], scale: 0.2, color: "#d4a0a0", speed: 1.6 },
        { pos: [2.5, 2, -2] as [number, number, number], scale: 0.18, color: "#c9787c", speed: 1.1 },
      ],
      proposal: [
        { pos: [0, 0, 0] as [number, number, number], scale: 0.5, color: "#c9787c", speed: 0.6 },
        { pos: [-2, 1.5, -1] as [number, number, number], scale: 0.2, color: "#d4a0a0", speed: 1.4 },
        { pos: [2, -1, -1.5] as [number, number, number], scale: 0.22, color: "#e8c4c4", speed: 1.2 },
      ],
      wedding: [
        { pos: [-1, 1, 0] as [number, number, number], scale: 0.35, color: "#c9787c", speed: 0.7 },
        { pos: [1, -0.5, -1] as [number, number, number], scale: 0.3, color: "#d4737a", speed: 1 },
        { pos: [0, 2, -1.5] as [number, number, number], scale: 0.4, color: "#d4a0a0", speed: 0.5 },
        { pos: [-2, -1, -0.5] as [number, number, number], scale: 0.2, color: "#e8c4c4", speed: 1.3 },
        { pos: [2.5, 1.5, -2] as [number, number, number], scale: 0.25, color: "#c9787c", speed: 0.9 },
        { pos: [0, -2, 0] as [number, number, number], scale: 0.15, color: "#d4a0a0", speed: 1.8 },
      ],
    };
    return configs[variant];
  }, [variant]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffeedd" />
        <pointLight position={[-3, 2, 2]} intensity={0.4} color="#ffcccc" />
        {hearts.map((h, i) => (
          <Heart key={i} position={h.pos} scale={h.scale} color={h.color} speed={h.speed} />
        ))}
        <Particles count={40} />
      </Canvas>
    </div>
  );
}
