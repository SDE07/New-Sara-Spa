import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// 3D Sacred Golden Lotus Petal
function LotusPetal({ rotation, scale = 1, tier = 1 }) {
  const petalShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.35, 0.45, 0.45, 1.1, 0, 1.6);
    shape.bezierCurveTo(-0.45, 1.1, -0.35, 0.45, 0, 0);
    return shape;
  }, []);

  const extrudeSettings = useMemo(
    () => ({
      depth: 0.04,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    }),
    []
  );

  return (
    <group rotation={rotation}>
      <mesh
        position={[0, 0.1, 0.35 * tier]}
        rotation={[0.65 - tier * 0.12, 0, 0]}
        scale={[scale, scale, scale]}
      >
        <extrudeGeometry args={[petalShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color={tier === 1 ? "#F5D2AC" : tier === 2 ? "#E3BA8F" : "#D4A373"}
          emissive="#613612"
          emissiveIntensity={0.55}
          roughness={0.18}
          metalness={0.82}
          clearcoat={0.9}
          clearcoatRoughness={0.15}
          reflectivity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// 3D Blooming Sacred Golden Spa Lotus
function SpaBloomingLotus() {
  const groupRef = useRef();
  const innerCoreRef = useRef();
  const ringsRef = useRef();

  // 3 Tiers of Petals (8 outer, 8 middle, 6 inner)
  const outerPetals = useMemo(() => Array.from({ length: 8 }), []);
  const midPetals = useMemo(() => Array.from({ length: 8 }), []);
  const innerPetals = useMemo(() => Array.from({ length: 6 }), []);

  useFrame((state, delta) => {
    // Gentle hypnotic rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.55;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.12 + 0.35;
    }

    // Breathing inner golden wellness energy core
    if (innerCoreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.18;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Water ripple expansion
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.4}>
      <group ref={groupRef} position={[0, -0.4, 0]}>
        
        {/* Tier 1: Outer Blooming Golden Petals (8 petals) */}
        {outerPetals.map((_, i) => (
          <LotusPetal
            key={`outer-${i}`}
            rotation={[0, (i * Math.PI * 2) / 8, 0]}
            scale={0.85}
            tier={1}
          />
        ))}

        {/* Tier 2: Mid Golden Petals (8 petals, offset) */}
        {midPetals.map((_, i) => (
          <LotusPetal
            key={`mid-${i}`}
            rotation={[0, (i * Math.PI * 2) / 8 + Math.PI / 8, 0]}
            scale={0.72}
            tier={2}
          />
        ))}

        {/* Tier 3: Inner Blooming Petals (6 petals) */}
        {innerPetals.map((_, i) => (
          <LotusPetal
            key={`inner-${i}`}
            rotation={[0, (i * Math.PI * 2) / 6, 0]}
            scale={0.55}
            tier={3}
          />
        ))}

        {/* Central Luminous Ayurvedic Gold Core / Dew Drop */}
        <mesh ref={innerCoreRef} position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FB8305"
            emissiveIntensity={3.2}
            roughness={0.05}
          />
        </mesh>

        {/* Delicate Golden Stamen Corona */}
        <mesh position={[0, 0.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.02, 12, 32]} />
          <meshBasicMaterial color="#FFF5EA" />
        </mesh>

        {/* Ambient Gold Wellness Spores & Aromatherapy Mist */}
        <Sparkles
          count={35}
          scale={3.8}
          size={3}
          speed={0.7}
          color="#F8DBB9"
        />
      </group>
    </Float>
  );
}

export default function Loader3DCanvas() {
  return (
    <div className="w-full h-full relative flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.2, 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[4, 6, 4]} intensity={2.8} color="#F8DBB9" />
        <pointLight position={[-4, -3, -2]} intensity={2.2} color="#FB8305" />
        <directionalLight position={[0, 5, 2]} intensity={1.8} color="#FFFFFF" />

        <SpaBloomingLotus />
      </Canvas>
    </div>
  );
}
