import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0.5, 0]}>
          <boxBufferGeometry attatch="geometry" />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
