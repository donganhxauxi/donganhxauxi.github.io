import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, Euler } from "@react-three/fiber";

const Icon3d = ({
  model,
}: {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: number[];
  };
}) => {
  const { modelPath, rotation, scale } = model;
  const scene = useGLTF(modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={scale} rotation={rotation as Euler}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default Icon3d;
