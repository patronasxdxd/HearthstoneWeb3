import { useRef } from 'react';
import { useThree, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  return <orbitControls 
  minPolarAngle={0.6} 
  maxPolarAngle={1.3} 
  minAzimuthAngle={-2} 
  maxAzimuthAngle={-1}
  minDistance={1}
  maxDistance={5}
  
  ref={controlsRef} args={[camera, gl.domElement]} />;
}

export default Controls;
