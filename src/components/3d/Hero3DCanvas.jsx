import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Floating Soft Golden Wellness Spores
function FloatingSpores({ count = 35 }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 15 + Math.random() * 60;
      const speed = 0.002 + Math.random() / 500;
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 4;
      const scale = 0.02 + Math.random() * 0.05;
      temp.push({ time, factor, speed, x, y, z, scale });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z, scale } = particle;
      const t = (particle.time += speed);
      dummy.position.set(
        x + Math.sin(t * 0.3) * 0.4 + (Math.cos(t * 0.7) * factor) / 25,
        y + Math.cos(t * 0.4) * 0.4 + (Math.sin(t * 0.5) * factor) / 25,
        z + Math.sin(t * 0.2) * 0.3
      );
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.3, 12, 12]} />
      <meshStandardMaterial
        color="#E8C7A0"
        emissive="#D4A373"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.1}
        transparent
        opacity={0.55}
      />
    </instancedMesh>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={1.2} color="#FFF9F2" />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#FFEADA" />
      <pointLight position={[-5, -4, 3]} intensity={0.9} color="#FCE6D2" />

      {/* Gentle ambient floating golden spores */}
      <FloatingSpores count={28} />

      {/* Very soft sparkling wellness dust */}
      <Sparkles
        count={35}
        scale={[12, 8, 4]}
        size={1.6}
        speed={0.2}
        opacity={0.4}
        color="#D4A373"
      />
    </>
  );
}

export default function Hero3DCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
