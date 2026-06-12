"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function Network({ paused, compact }) {
  const group = useRef();
  const center = useRef();
  const nodeCount = compact ? 7 : 11;
  const particleCount = compact ? 360 : 760;

  const nodes = useMemo(
    () =>
      Array.from({ length: nodeCount }, (_, index) => {
        const angle = (index / nodeCount) * Math.PI * 2;
        const radius = 1.8 + (index % 3) * 0.46;
        const y = Math.sin(index * 1.7) * 0.72;
        return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      }),
    [nodeCount]
  );

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.3 + seededRandom(index + 11) * 2.8;
      const angle = seededRandom(index + 23) * Math.PI * 2;
      const height = (seededRandom(index + 37) - 0.5) * 2.2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = height;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, [particleCount]);

  useFrame((state) => {
    if (paused || !group.current) return;
    const time = state.clock.elapsedTime;
    group.current.rotation.y = time * 0.09 + state.pointer.x * 0.18;
    group.current.rotation.x = state.pointer.y * 0.07;
    if (center.current) {
      center.current.scale.setScalar(1 + Math.sin(time * 1.8) * 0.035);
    }
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5.1 + state.pointer.y * 0.18, 0.04);
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7dd3fc" size={0.012} transparent opacity={0.46} sizeAttenuation />
      </points>

      <Sphere ref={center} args={[0.42, 48, 48]}>
        <meshStandardMaterial color="#c8f7ff" emissive="#4da3ff" emissiveIntensity={0.9} roughness={0.28} />
      </Sphere>

      {nodes.map((node, index) => (
        <group key={node.toArray().join("-")} position={node}>
          <Sphere args={[index % 2 === 0 ? 0.09 : 0.065, 24, 24]}>
            <meshStandardMaterial color="#f5f7fa" emissive="#4da3ff" emissiveIntensity={0.55} roughness={0.36} />
          </Sphere>
          <Line points={[new THREE.Vector3(0, 0, 0), node.clone().multiplyScalar(-1)]} color="#4da3ff" transparent opacity={0.18} lineWidth={1} />
        </group>
      ))}

      <Line points={[...nodes, nodes[0]]} color="#7dd3fc" transparent opacity={0.25} lineWidth={1} />
      <ambientLight intensity={0.45} />
      <pointLight position={[2.5, 2.5, 3]} intensity={4} color="#7dd3fc" />
      <pointLight position={[-3, -1, -2]} intensity={2} color="#4da3ff" />
    </group>
  );
}

export default function AgentScene() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const updateCompact = () => setCompact(window.innerWidth < 768 || navigator.hardwareConcurrency <= 4);
    const updateVisibility = () => setVisible(document.visibilityState === "visible");
    updateCompact();
    updateVisibility();
    window.addEventListener("resize", updateCompact);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      window.removeEventListener("resize", updateCompact);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  if (reducedMotion) return <div className="agent-scene-fallback" aria-hidden="true" />;

  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, compact ? 1.25 : 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 5.8, 10]} />
      <Network paused={!visible} compact={compact} />
    </Canvas>
  );
}
