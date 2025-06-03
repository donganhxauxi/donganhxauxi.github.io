import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import { useWindowSize } from "../../hooks/useWindowSize";
const HeroExperience = () => {
  const { width } = useWindowSize();

  return (
    <Canvas
      camera={{ position: [0, 2, 15], fov: 45 }}
      className="!w-full lg:!w-[50%]"
    >
      <HeroLight />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        position={[0, width > 1024 ? -3 : 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={width < 1024 ? 0.7 : 1}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
