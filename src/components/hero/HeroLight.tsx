import { RectAreaLight } from "three";

const HeroLight = () => {
  return (
    <>
      <spotLight position={[2, 6, 10]} intensity={100} angle={0.05} />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        color="#4cc9f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={70}
        angle={0.4}
        color="#9d4edd"
      />
      <primitive
        object={new RectAreaLight("#a259ff", 8, 3, 2)}
        positon={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
      />
      <pointLight position={[0, 1, 0]} intensity={10} color={0x7209b7} />
      <pointLight position={[1, 2, 2]} intensity={10} color={0x0d00a4} />
    </>
  );
};

export default HeroLight;
