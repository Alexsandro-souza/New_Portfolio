import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../../others/Loader";

interface BallProps {
    imgUrl: string;
  }

const Ball: React.FC<BallProps>= (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={5} rotationIntensity={1.1} floatIntensity={5}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[51, 40, 11.0]} />
      <mesh castShadow receiveShadow scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1B8E99"
          polygonOffset
          polygonOffsetFactor={1}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvas {
    icon: string;
  }

const BallCanvas: React.FC<BallCanvas> = ({ icon}) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;