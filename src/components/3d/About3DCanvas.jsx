import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGoldenOrbs({ count = 24 }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 40;
      const speed = 0.002 + Math.random() / 600;
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 6;
      const scale = 0.03 + Math.random() * 0.07;
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
        x + Math.sin(t * 0.3) * 0.5 + (Math.cos(t * 0.5) * factor) / 30,
        y + Math.cos(t * 0.4) * 0.5 + (Math.sin(t * 0.6) * factor) / 30,
        z + Math.sin(t * 0.2) * 0.4
      );
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.35, 12, 12]} />
      <meshStandardMaterial
        color="#E3BA8F"
        emissive="#D4A373"
        emissiveIntensity={0.65}
        roughness={0.25}
        metalness={0.2}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.1} color="#FFF8F0" />
      <pointLight position={[6, 6, 4]} intensity={1.3} color="#FFE8D6" />
      <pointLight position={[-6, -4, 2]} intensity={0.8} color="#FCE2CE" />
      <FloatingGoldenOrbs count={22} />
      <Sparkles
        count={30}
        scale={[14, 10, 5]}
        size={1.8}
        speed={0.25}
        opacity={0.35}
        color="#D4A373"
      />
    </>
  );
}

export default function About3DCanvas() {
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
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
