import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense } from "react";
import { Sphere } from "./Sphere";

function ThreeAnimation() {
  return (
    <Fragment>
      <Canvas>
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Fragment>
  );
}
export default ThreeAnimation;
