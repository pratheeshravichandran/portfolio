import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useState } from "react";

const TechItem = ({ position, color, label, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x = Math.sin(time * 0.5 + index) * 0.1;
    
    // Gentle floating animation
    meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.1;
    
    // Scale on hover
    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} ref={meshRef}>
        {/* Main sphere with distortion effect */}
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[0.5, 1]} />
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={hovered ? 0.6 : 0.2}
          />
        </mesh>

        {/* Outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Tech label */}
        <Html
          position={[0, -1, 0]}
          center
          distanceFactor={8}
          style={{
            transition: 'all 0.2s',
            opacity: hovered ? 1 : 0.8,
            transform: `scale(${hovered ? 1.1 : 1})`,
          }}
        >
          <div className="tech-label">
            {label}
          </div>
        </Html>
      </group>
    </Float>
  );
};

const ParticleField = () => {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#64ffda"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const TechStack3D = ({ techStack }) => {
  return (
    <div className="tech-stack-container">
      <style>{`
        .tech-stack-container {
          width: 100%;
          height: 600px;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .tech-label {
          background: rgba(10, 14, 39, 0.95);
          color: #64ffda;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          white-space: nowrap;
          border: 1px solid rgba(100, 255, 218, 0.3);
          box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
          backdrop-filter: blur(10px);
        }

        .canvas-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          z-index: 10;
          pointer-events: none;
        }

        .canvas-title {
          font-size: 24px;
          font-weight: 700;
          color: #64ffda;
          margin-bottom: 4px;
          letter-spacing: 1px;
        }
      `}</style>

      <div className="canvas-overlay">
        <div className="canvas-title">Tech Stack</div>
        <div>Drag to rotate • Scroll to zoom</div>
      </div>

      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b9d" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />

        {/* Particle background */}
        <ParticleField />

        {/* Tech items arranged in a circle */}
        {techStack.map((tech, i) => {
          const angle = (i / techStack.length) * Math.PI * 2;
          const radius = 3;
          return (
            <TechItem
              key={tech.label}
              position={[
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
              ]}
              color={tech.color}
              label={tech.label}
              index={i}
            />
          );
        })}

        {/* Center sphere */}
        <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#64ffda"
            emissive="#64ffda"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>

        {/* Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

// Example usage with sample data
const App = () => {
  const sampleTechStack = [
    { label: "React", color: "#61dafb" },
    { label: "TypeScript", color: "#3178c6" },
    { label: "Node.js", color: "#68a063" },
    { label: "Python", color: "#3776ab" },
    { label: "PostgreSQL", color: "#336791" },
    { label: "Docker", color: "#2496ed" },
    { label: "AWS", color: "#ff9900" },
    { label: "GraphQL", color: "#e10098" },
  ];

  return (
    <div style={{ padding: "40px", background: "#0a0e27", minHeight: "100vh" }}>
      <TechStack3D techStack={sampleTechStack} />
    </div>
  );
};

export default App;