import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';


export function Model(props) {
  const { nodes, materials } = useGLTF("/xdxd3.glb");
  return (
    <group {...props} dispose={null}>
    <group position={[-1.2, 0, -1.99]} scale={0.18}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FlowerBed5_1.geometry}
        material={materials.ConcreteFlowerBed5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FlowerBed5_2.geometry}
        material={materials["GroundFlowerBed5.001"]}
      />
    </group>
    <group position={[0, -0.01, 0]} scale={1.15} />
    <group position={[-1.2, 0, 1.97]} rotation={[0, 1.57, 0]} scale={0.18}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FlowerBed5001_1.geometry}
        material={materials["ConcreteFlowerBed5.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FlowerBed5001_2.geometry}
        material={materials["GroundFlowerBed5.002"]}
      />
    </group>
    <group position={[-1, 0.08, -0.94]} rotation={[0, 0.02, 0]} scale={0.06}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh004"].geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh004_1"].geometry}
        material={materials.mat10}
      />
    </group>
    <group position={[0.97, 0.21, 1.08]} rotation={[0, 0.01, 0]} scale={0.11}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh028"].geometry}
        material={materials["mat14.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh028_1"].geometry}
        material={materials["mat20.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh028_2"].geometry}
        material={materials["mat21.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh028_3"].geometry}
        material={materials["mat10.024"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1522281990.geometry}
      material={materials["mat21.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <group position={[-1.22, 0.05, 1.65]} scale={0.13}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh396693100.geometry}
        material={materials["mat21.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh396693100_1.geometry}
        material={materials["mat8.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group818336702.geometry}
      material={materials["mat21.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group708977906.geometry}
      material={materials["mat10.025"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group782497130.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <group position={[-1.22, 0.05, 1.65]} scale={0.13}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh24528579.geometry}
        material={materials["mat23.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh24528579_1.geometry}
        material={materials["mat8.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1128189315.geometry}
      material={materials["mat14.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group192025321.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1087340524.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group211240389.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1467201906.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1345804679.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1923766579.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1535172347.geometry}
      material={materials["mat23.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group825597784.geometry}
      material={materials["mat7.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group568159733.geometry}
      material={materials["mat7.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group621784425.geometry}
      material={materials["mat8.003"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group927813173.geometry}
      material={materials["mat10.025"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group53042870.geometry}
      material={materials["mat10.025"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1167757391.geometry}
      material={materials["mat21.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1268708625.geometry}
      material={materials["mat21.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group62286769.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2010671219.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group261742740.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group319832160.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group148953620.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1154146536.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1643572436.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1901817716.geometry}
      material={materials["mat20.004"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group895133976.geometry}
      material={materials["mat9.024"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group603932705.geometry}
      material={materials["mat9.024"]}
      position={[-1.22, 0.05, 1.65]}
      scale={0.13}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh154548097.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh154548097_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1410784679.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1410784679_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1703727385.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1703727385_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1612772956.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1612772956_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh990417938.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh990417938_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964596687.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964596687_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh806708868.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh806708868_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1736713547.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1736713547_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh388200413.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh388200413_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1180124208.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group25906389.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1415535856.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1074087440.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group185112863.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1284125247.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1305794997.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1504679457.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group418634267.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1296141725.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1592771011.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1592771011_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1790555836.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1790555836_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1932222081.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2070751481.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group442005943.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group387905364.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1669111209.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group96005460.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2011966826.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1397904679.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1834114231.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group520452619.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group648213804.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh379842628.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh379842628_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh305124457.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh305124457_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh152968616.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh152968616_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh504278827.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh504278827_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh137416796.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh137416796_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh903124645.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh903124645_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1742717586.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1742717586_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group121187193.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group657152516.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1196403785.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1793867774.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1608963445.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group172706965.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group500441662.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1134243624.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1471005336.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1471005336_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2058966100.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2058966100_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1108866900.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group990022888.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group289210734.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group217376910.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh721423905.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh721423905_1.geometry}
        material={materials["mat16.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2095963875.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group411257074.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1077637672.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1077637672_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1977292102.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1977292102_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1172531638.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1172531638_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh432217723.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh432217723_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh194829139.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh194829139_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1226135104.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1226135104_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh178042358.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh178042358_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1524184508.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1524184508_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh561691784.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh561691784_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1446399454.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group71011279.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group799896163.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1626748377.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1253051020.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1389795580.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2026043820.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2026043820_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh864366498.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh864366498_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1288048979.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2019724919.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group443791907.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1326650350.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh555455152.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh555455152_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1445848109.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group326920578.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group750344627.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1624749591.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1584981967.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2035788118.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group269988604.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh79542453.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh79542453_1.geometry}
        material={materials["mat21.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group138293115.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group628656921.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1378309965.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1418139453.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1429150842.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1195221898.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group30491993.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1753690419.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1906869502.geometry}
      material={materials["mat16.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1355497569.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1355497569_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh231707998.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh231707998_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1355921627.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1355921627_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1617572247.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1617572247_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh101140434.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh101140434_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group135848022.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1472510813.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1472510813_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1624478577.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1624478577_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1218393302.geometry}
        material={materials["mat9.025"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1218393302_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh496232946.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh496232946_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh756160511.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh756160511_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1780851911.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group747534734.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1931113188.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1280178183.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1280178183_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group173175875.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1009076685.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1009076685_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1200448203.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1200448203_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1380152396.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1380152396_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh870995377.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh870995377_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh993434659.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh993434659_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh645938569.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh645938569_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh347442166.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh347442166_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1337563453.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1337563453_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1319244727.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1605478170.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1605478170_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh334574588.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh334574588_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh800547533.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh800547533_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh220609610.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh220609610_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh943013562.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh943013562_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh235242731.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh235242731_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1880382408.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1880382408_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh721441010.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh721441010_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh659921051.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh659921051_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh223820286.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh223820286_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1145969062.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1145969062_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1354596218.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1354596218_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1177209410.geometry}
      material={materials["mat20.005"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1648257991.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1648257991_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1519760810.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1519760810_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1594247934.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1594247934_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1755776400.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1755776400_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1276407759.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1276407759_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1891425823.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1891425823_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh9533501.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh9533501_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh615451479.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh615451479_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1563188419.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1563188419_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1158656539.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1158656539_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1607579961.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1607579961_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh299204821.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh299204821_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh205111314.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh205111314_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1109272137.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1109272137_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1647665940.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1647665940_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1463747931.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1463747931_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1588219775.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1588219775_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh950146211.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh950146211_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1258743706.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1258743706_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1405176726.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1405176726_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group121120412.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group384811216.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1340369849.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1340369849_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1041635183.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1041635183_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1504191420.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1504191420_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh683095545.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh683095545_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1099114114.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1099114114_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh890245654.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh890245654_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1024194893.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1024194893_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1497487956.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1497487956_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh341763134.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh341763134_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1364542038.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1364542038_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh699125797.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh699125797_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1172059840.geometry}
      material={materials["mat15.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh849950766.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh849950766_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1594006995.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1594006995_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh210037791.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh210037791_1.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group362415336.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1959153889.geometry}
        material={materials["mat9.025"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1959153889_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1566719546.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1566719546_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1055570628.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1055570628_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1292718354.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1292718354_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1217966192.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1217966192_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh298099988.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh298099988_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh117307276.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh117307276_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1200913314.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1200913314_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1519852558.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1519852558_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1413473364.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1413473364_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh134619048.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh134619048_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2056843007.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2056843007_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1467067235.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1467067235_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1440025803.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1440025803_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2051758238.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2051758238_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh382010728.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh382010728_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh749558049.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh749558049_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh433038017.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh433038017_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1771561484.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1771561484_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh401739876.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh401739876_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh347049555.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh347049555_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh409692015.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh409692015_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh192238768.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh192238768_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1907975863.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1907975863_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1334249712.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1334249712_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1003404171.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1003404171_1.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_1.geometry}
        material={materials["mat3.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_2.geometry}
        material={materials["mat21.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_3.geometry}
        material={materials["mat17.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_4.geometry}
        material={materials["mat4.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_5.geometry}
        material={materials["mat2.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_6.geometry}
        material={materials["mat24.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_7.geometry}
        material={materials.mat22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_8.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_9.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_10.geometry}
        material={materials["mat13.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_11.geometry}
        material={materials["mat7.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_12.geometry}
        material={materials["mat23.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2060585404_13.geometry}
        material={materials["mat9.025"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1531347229.geometry}
        material={materials["mat17.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1531347229_1.geometry}
        material={materials["mat7.004"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1891983534.geometry}
        material={materials["mat7.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1891983534_1.geometry}
        material={materials["mat17.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339.geometry}
        material={materials["mat1.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_1.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_2.geometry}
        material={materials["mat23.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_3.geometry}
        material={materials["mat8.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_4.geometry}
        material={materials["mat21.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_5.geometry}
        material={materials["mat17.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_6.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666121339_7.geometry}
        material={materials.mat25}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1452829880.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1452829880_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1363602458.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1363602458_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh559654993.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh559654993_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh232725511.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh232725511_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1677580909.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1677580909_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1374377478.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1374377478_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1174077478.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1540930165.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1540930165_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh20697210.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh20697210_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh378811011.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh378811011_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh754473170.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh754473170_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1192895906.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1192895906_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh362873385.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh362873385_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh193228289.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh193228289_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1280609909.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1280609909_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh742303085.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh742303085_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1281538040.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1281538040_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1457669562.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1457669562_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1719004277.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1719004277_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1754490281.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1754490281_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh86283576.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh86283576_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh442002708.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh442002708_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh437086382.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh437086382_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh651567654.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh651567654_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1469033007.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1469033007_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1910818369.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1910818369_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh276074011.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh276074011_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1110518011.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1110518011_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1178236477.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1178236477_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh774758157.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh774758157_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1588479370.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1588479370_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2133392116.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2133392116_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1626139923.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1626139923_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh191355493.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh191355493_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh599389923.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh599389923_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh683411570.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh683411570_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1347910432.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1347910432_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh937693315.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh937693315_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh626930162.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh626930162_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1966674789.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1945819964.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1945819964_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1010387049.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1010387049_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1409310117.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1409310117_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh137145782.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh137145782_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1618608368.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1618608368_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh388696146.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh388696146_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1209436718.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1209436718_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh42836967.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh42836967_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1188796330.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1188796330_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh757272916.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh757272916_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1226831068.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1226831068_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1820082826.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group968249874.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh970245309.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh970245309_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1162857985.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1162857985_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh410512084.geometry}
        material={materials["mat20.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh410512084_1.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh410512084_2.geometry}
        material={materials["mat17.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2070150954.geometry}
        material={materials["mat19.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2070150954_1.geometry}
        material={materials["mat15.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1481875420.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1481875420_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1997808162.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1997808162_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh861082389.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh861082389_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh225360636.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh225360636_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh585706192.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh585706192_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1301312773.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1301312773_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh510620098.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh510620098_1.geometry}
        material={materials["mat19.003"]}
      />
    </group>
    <group position={[-1.33, 0.03, 2.1]} rotation={[0, 0.07, 0]} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh512966840.geometry}
        material={materials["mat15.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh512966840_1.geometry}
        material={materials["mat16.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh512966840_2.geometry}
        material={materials.mat22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh512966840_3.geometry}
        material={materials["mat20.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group958529257.geometry}
      material={materials["mat19.003"]}
      position={[-1.33, 0.03, 2.1]}
      rotation={[0, 0.07, 0]}
      scale={0.05}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group999926703.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1959334084.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group501438823.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1583569083.geometry}
      material={materials["mat13.004"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group623948272.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group521428595.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group394876426.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group175067529.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group771674849.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1499288047.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group540753698.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group910836835.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1266094004.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group879935772.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1237499413.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2052411543.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group814182451.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1563157012.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group945954435.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2137811705.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1325921846.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group558692371.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.05, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.1}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1965545412.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1780542559.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group238580994.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group557000331.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group590056157.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group792148737.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group367664734.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.04, 1.6]}
      rotation={[Math.PI, -0.53, Math.PI]}
      scale={0.08}
    />
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743.geometry}
        material={materials["mat16.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743_2.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743_3.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743_4.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh306099743_5.geometry}
        material={materials["mat9.027"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313.geometry}
        material={materials["mat9.027"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_1.geometry}
        material={materials["mat17.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_2.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_3.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_4.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_5.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1526765313_6.geometry}
        material={materials["mat22.001"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1510076027.geometry}
        material={materials["mat19.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1510076027_1.geometry}
        material={materials["mat18.003"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964209477.geometry}
        material={materials["mat18.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964209477_1.geometry}
        material={materials["mat19.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964209477_2.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh964209477_3.geometry}
        material={materials["mat20.008"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263_1.geometry}
        material={materials["mat3.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263_2.geometry}
        material={materials["mat5.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263_3.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263_4.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1445695263_5.geometry}
        material={materials["mat17.004"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh584479271.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh584479271_1.geometry}
        material={materials["mat13.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh584479271_2.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh584479271_3.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh584479271_4.geometry}
        material={materials["mat14.006"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265_2.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265_3.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265_4.geometry}
        material={materials["mat12.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2032061265_5.geometry}
        material={materials["mat16.004"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1812052774.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1812052774_1.geometry}
        material={materials["mat22.001"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1996118965.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1996118965_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1996118965_2.geometry}
        material={materials["mat13.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1996118965_3.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1996118965_4.geometry}
        material={materials["mat3.004"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1507658319.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1507658319_1.geometry}
        material={materials["mat9.027"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1507658319_2.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1507658319_3.geometry}
        material={materials["mat23.007"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1538282207.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1538282207_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1538282207_2.geometry}
        material={materials["mat5.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1538282207_3.geometry}
        material={materials["mat3.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1538282207_4.geometry}
        material={materials["mat0.003"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh879022602.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh879022602_1.geometry}
        material={materials["mat9.027"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh879022602_2.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh879022602_3.geometry}
        material={materials["mat23.007"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_2.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_3.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_4.geometry}
        material={materials["mat13.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_5.geometry}
        material={materials["mat12.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1957457281_6.geometry}
        material={materials["mat16.004"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555.geometry}
        material={materials["mat16.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555_1.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555_2.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555_3.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555_4.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh557752555_5.geometry}
        material={materials["mat9.027"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh379169632.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh379169632_1.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh379169632_2.geometry}
        material={materials["mat21.008"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_1.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_2.geometry}
        material={materials["mat0.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_3.geometry}
        material={materials["mat2.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_4.geometry}
        material={materials["mat14.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_5.geometry}
        material={materials["mat3.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_6.geometry}
        material={materials["mat13.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_7.geometry}
        material={materials["mat8.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_8.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1622693884_9.geometry}
        material={materials["mat17.004"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1970808768.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1970808768_1.geometry}
        material={materials["mat13.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1970808768_2.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1970808768_3.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1970808768_4.geometry}
        material={materials["mat14.006"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1024749857.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1024749857_1.geometry}
        material={materials["mat22.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1024749857_2.geometry}
        material={materials["mat21.008"]}
      />
    </group>
    <group
      position={[-1.34, 0.04, 1.44]}
      rotation={[-0.86, 0.02, 0.1]}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1126505564.geometry}
        material={materials["mat21.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1126505564_1.geometry}
        material={materials["mat23.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1126505564_2.geometry}
        material={materials["mat22.001"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group712474116.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1819228832.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1984699503.geometry}
        material={materials["mat20.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1984699503_1.geometry}
        material={materials["mat17.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1984699503_2.geometry}
        material={materials["mat11.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1984699503_3.geometry}
        material={materials["mat5.004"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group852939806.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group522448973.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group409969423.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group415691209.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1255026642.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group663804868.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1146858863.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group892034346.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1431829128.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group958854510.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2070421578.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1594134782.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group390392404.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group386315088.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2059847178.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group34785075.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1410937907.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1405178784.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1433549866.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1310868839.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1950485341.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group208087979.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group53255601.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1087036809.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1638766695.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group930402128.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1350648769.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1018716665.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1155423964.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1663797979.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group536997728.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group886371008.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1940770926.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1858163071.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2034067931.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1999073318.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group34807248.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group60421927.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2069605368.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group756238270.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group551149637.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group695765048.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1355873193.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group644851827.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group622590410.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group482385470.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group893649427.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1713935403.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group591888878.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group492794833.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group206066337.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group80490215.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1692202479.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1783561612.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group44765504.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group622403930.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1544347218.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group777220584.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1077367168.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1693403014.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2120249033.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group368528787.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1636832775.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group819284552.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group904038137.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group543979763.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group156962315.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group784225283.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1472640157.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group481124831.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1510852673.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1302864297.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1016292650.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1662305267.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1730367693.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1505572369.geometry}
      material={materials["mat9.028"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1784896143.geometry}
        material={materials["mat20.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1784896143_1.geometry}
        material={materials["mat17.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1784896143_2.geometry}
        material={materials["mat5.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1784896143_3.geometry}
        material={materials["mat15.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1784896143_4.geometry}
        material={materials["mat16.005"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1816269119.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1378999907.geometry}
      material={materials["mat20.009"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group765303337.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group832876539.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1930403750.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1314513192.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1797543795.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group13732021.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group170716489.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group752141789.geometry}
      material={materials["mat19.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group511529357.geometry}
      material={materials["mat17.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1463751419.geometry}
        material={materials["mat17.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1463751419_1.geometry}
        material={materials["mat20.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1463751419_2.geometry}
        material={materials["mat5.004"]}
      />
    </group>
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1293293119.geometry}
        material={materials["mat23.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1293293119_1.geometry}
        material={materials["mat11.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1293293119_2.geometry}
        material={materials["mat10.027"]}
      />
    </group>
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh740748108.geometry}
        material={materials["mat13.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh740748108_1.geometry}
        material={materials["mat12.004"]}
      />
    </group>
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666869855.geometry}
        material={materials["mat12.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1666869855_1.geometry}
        material={materials["mat13.006"]}
      />
    </group>
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1833144401.geometry}
        material={materials["mat12.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1833144401_1.geometry}
        material={materials["mat13.006"]}
      />
    </group>
    <group position={[0.95, 0.26, -1.01]} scale={0.66}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh710235077.geometry}
        material={materials["mat12.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh710235077_1.geometry}
        material={materials["mat13.006"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1391535045.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2001253607.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group384724072.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1128630770.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group644428560.geometry}
      material={materials["mat16.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2108899202.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1730489725.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1593141303.geometry}
      material={materials["mat10.027"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group37275415.geometry}
      material={materials["mat16.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group464703084.geometry}
      material={materials["mat16.005"]}
      position={[0.95, 0.26, -1.01]}
      scale={0.66}
    />
    <group position={[-0.93, 0.18, 1.75]} scale={0.49}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030"].geometry}
        material={materials["mat21.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_1"].geometry}
        material={materials["mat20.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_2"].geometry}
        material={materials["mat8.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_3"].geometry}
        material={materials["mat3.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_4"].geometry}
        material={materials["mat13.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_5"].geometry}
        material={materials["mat12.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh030_6"].geometry}
        material={materials["mat14.008"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Glass.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_GlassSG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube.geometry}
      material={materials["Material.002"]}
      position={[0, 0, -0.01]}
      scale={[1.12, 0.04, 1.91]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane001.geometry}
      material={materials["Material.001"]}
      position={[-0.86, 0.04, 0.02]}
      scale={0.22}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane002.geometry}
      material={materials["Material.004"]}
      position={[-0.81, 0.07, 0.02]}
      scale={[0.18, 0.08, 0.18]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane003.geometry}
      material={materials["Material.005"]}
      position={[0.84, 0.07, 0.02]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.08, 0.18]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane004.geometry}
      material={materials["Material.006"]}
      position={[0.89, 0.04, 0.02]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={0.22}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane.geometry}
      material={materials["Material.009"]}
      position={[-0.73, 0.09, 0.45]}
      scale={[0.14, 0.27, 0.13]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube001.geometry}
      material={materials["Material.012"]}
      position={[-0.97, 0.05, -1.77]}
      scale={[-0.15, -0.01, -0.15]}
    />
    <group
      position={[-0.91, 0.08, -1.02]}
      rotation={[0, 0.02, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh005"].geometry}
        material={materials["mat9.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh005_1"].geometry}
        material={materials["mat10.001"]}
      />
    </group>
    <group
      position={[-1.05, 0.08, -1.02]}
      rotation={[0, 0.02, 0]}
      scale={0.05}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh006"].geometry}
        material={materials["mat9.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh006_1"].geometry}
        material={materials["mat10.002"]}
      />
    </group>
    <group
      position={[-0.9, 0.08, -0.92]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh007"].geometry}
        material={materials["mat9.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh007_1"].geometry}
        material={materials["mat10.003"]}
      />
    </group>
    <group
      position={[-1.02, 0.08, -0.91]}
      rotation={[0, -0.95, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh008"].geometry}
        material={materials["mat9.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh008_1"].geometry}
        material={materials["mat10.004"]}
      />
    </group>
    <group
      position={[-0.9, 0.08, -1.15]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh009"].geometry}
        material={materials["mat9.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh009_1"].geometry}
        material={materials["mat10.005"]}
      />
    </group>
    <group
      position={[-0.9, 0.08, -1.53]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh010"].geometry}
        material={materials["mat9.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh010_1"].geometry}
        material={materials["mat10.006"]}
      />
    </group>
    <group
      position={[-1.05, 0.08, -1.59]}
      rotation={[Math.PI, -0.59, Math.PI]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh011"].geometry}
        material={materials["mat9.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh011_1"].geometry}
        material={materials["mat10.007"]}
      />
    </group>
    <group
      position={[-0.42, 0.08, -1.84]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh012"].geometry}
        material={materials["mat9.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh012_1"].geometry}
        material={materials["mat10.008"]}
      />
    </group>
    <group
      position={[-0.42, 0.08, -1.75]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh013"].geometry}
        material={materials["mat9.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh013_1"].geometry}
        material={materials["mat10.009"]}
      />
    </group>
    <group
      position={[-0.55, 0.08, -1.75]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh014"].geometry}
        material={materials["mat9.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh014_1"].geometry}
        material={materials["mat10.010"]}
      />
    </group>
    <group
      position={[-0.52, 0.08, -1.83]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh015"].geometry}
        material={materials["mat9.011"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh015_1"].geometry}
        material={materials["mat10.011"]}
      />
    </group>
    <group
      position={[-0.72, 0.08, -1.83]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh016"].geometry}
        material={materials["mat9.012"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh016_1"].geometry}
        material={materials["mat10.012"]}
      />
    </group>
    <group
      position={[-0.75, 0.08, -1.75]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh017"].geometry}
        material={materials["mat9.013"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh017_1"].geometry}
        material={materials["mat10.013"]}
      />
    </group>
    <group
      position={[-0.62, 0.08, -1.75]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh018"].geometry}
        material={materials["mat9.014"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh018_1"].geometry}
        material={materials["mat10.014"]}
      />
    </group>
    <group
      position={[-0.62, 0.08, -1.84]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh019"].geometry}
        material={materials["mat9.015"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh019_1"].geometry}
        material={materials["mat10.015"]}
      />
    </group>
    <group
      position={[-0.62, 0.08, -1.69]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh020"].geometry}
        material={materials["mat9.016"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh020_1"].geometry}
        material={materials["mat10.016"]}
      />
    </group>
    <group
      position={[-0.75, 0.08, -1.69]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh021"].geometry}
        material={materials["mat9.017"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh021_1"].geometry}
        material={materials["mat10.017"]}
      />
    </group>
    <group
      position={[-0.55, 0.08, -1.69]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh022"].geometry}
        material={materials["mat9.018"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh022_1"].geometry}
        material={materials["mat10.018"]}
      />
    </group>
    <group
      position={[-0.42, 0.08, -1.69]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh023"].geometry}
        material={materials["mat9.019"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh023_1"].geometry}
        material={materials["mat10.019"]}
      />
    </group>
    <group
      position={[-0.85, 0.08, -1.69]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh024"].geometry}
        material={materials["mat9.020"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh024_1"].geometry}
        material={materials["mat10.020"]}
      />
    </group>
    <group
      position={[-0.82, 0.08, -1.83]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh025"].geometry}
        material={materials["mat9.021"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh025_1"].geometry}
        material={materials["mat10.021"]}
      />
    </group>
    <group
      position={[-0.87, 0.08, -1.83]}
      rotation={[0, -1.08, 0]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh026"].geometry}
        material={materials["mat9.022"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh026_1"].geometry}
        material={materials["mat10.022"]}
      />
    </group>
    <group
      position={[-1.04, 0.08, -1.83]}
      rotation={[Math.PI, -1.01, Math.PI]}
      scale={0.06}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh027"].geometry}
        material={materials["mat9.023"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh027_1"].geometry}
        material={materials["mat10.023"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube002.geometry}
      material={materials["Material.013"]}
      position={[-0.97, 0.04, 1.75]}
      rotation={[3.14, 0, 0]}
      scale={[-0.15, -0.01, -0.15]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Text.geometry}
      material={nodes.Text.material}
      position={[-1.09, 0.05, 1.55]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.04}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube003.geometry}
      material={materials["Material.014"]}
      position={[0.95, 0.04, 1.73]}
      rotation={[2.21, -1.57, -0.94]}
      scale={[-0.16, -0.01, -0.16]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube004.geometry}
      material={materials["Material.016"]}
      position={[0.97, 0.05, -1.77]}
      rotation={[0, 0, -3.13]}
      scale={[-0.15, -0.01, -0.15]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane005.geometry}
      material={materials["Material.017"]}
      position={[0.24, 0.05, 1.79]}
      scale={[0.13, 0.13, 0.08]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube005.geometry}
      material={materials["Material.018"]}
      position={[0.25, 0.11, 1.79]}
      scale={[0.08, 0.1, 0.03]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane006.geometry}
      material={materials["Material.019"]}
      position={[-0.14, 0.05, 1.79]}
      scale={[0.13, 0.13, 0.08]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube006.geometry}
      material={materials["Material.020"]}
      position={[-0.13, 0.11, 1.79]}
      scale={[0.08, 0.1, 0.03]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane007.geometry}
      material={materials["Material.022"]}
      position={[0.05, 0.05, 1.61]}
      scale={[0.19, 0.19, 0.06]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane008.geometry}
      material={materials["Material.021"]}
      position={[0.06, 0.07, 1.61]}
      scale={[-0.13, -0.13, -0.04]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Text001.geometry}
      material={materials["Material.023"]}
      position={[0.17, 0.07, 1.59]}
      rotation={[-Math.PI, 0, -Math.PI]}
      scale={0.06}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba_tail.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba_l_eye_Eyes.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba_Eyes_r_eye.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba_l_ear_Ears.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shiba_Ears_r_ear.geometry}
      material={materials["lambert6SG.004"]}
      position={[-1.01, 0.14, 1.5]}
      rotation={[0, -1.09, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.DXD5ZqVVAAErfz4.geometry}
      material={materials.DXD5ZqVVAAErfz4}
      position={[-0.67, 0.09, 0.02]}
      rotation={[-Math.PI, -Math.PI / 2, 0]}
      scale={[0.4, 0.38, 0.44]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Shapeshift.geometry}
      material={materials.Shapeshift}
      position={[-0.73, 0.09, 0.45]}
      rotation={[0, -1.57, 0]}
      scale={0.37}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.windmill.geometry}
      material={materials.None}
      position={[-1.02, 0.29, -1.77]}
      rotation={[0, -0.9, 0]}
      scale={0.21}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.church.geometry}
      material={materials["None.005"]}
      position={[0.9, 0.36, 1.56]}
      rotation={[Math.PI, -1.12, Math.PI]}
      scale={0.36}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.DXD5ZqVVAAErfz4001.geometry}
      material={materials["DXD5ZqVVAAErfz4.001"]}
      position={[0.71, 0.09, 0.02]}
      rotation={[-Math.PI, 1.57, 0]}
      scale={[0.4, 0.38, 0.44]}
    />
    <group position={[-1.45, 0.01, -2.22]} scale={0.03}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh"].geometry}
        material={materials.lambert2SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.lambert7SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.lambert8SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.lambert3SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_4"].geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_5"].geometry}
        material={materials.lambert5SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_6"].geometry}
        material={materials.lambert6SG}
      />
    </group>
    <group position={[-1.45, 0.01, -1.98]} scale={0.03}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002"].geometry}
        material={materials["lambert2SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_1"].geometry}
        material={materials["lambert7SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_2"].geometry}
        material={materials["lambert8SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_3"].geometry}
        material={materials["lambert3SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_4"].geometry}
        material={materials["lambert4SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_5"].geometry}
        material={materials["lambert5SG.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh002_6"].geometry}
        material={materials["lambert6SG.002"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.legend.geometry}
      material={materials.legend}
      position={[0.25, 0.09, 1.77]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.25}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.legend001.geometry}
      material={materials["legend.001"]}
      position={[-0.13, 0.09, 1.77]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.25}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cow_mesh.geometry}
      material={materials.Cow_mat}
      position={[-0.95, 0.06, -1.47]}
      rotation={[0, -0.28, 0]}
      scale={0.02}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cow_mesh001.geometry}
      material={materials["Cow_mat.001"]}
      position={[-0.84, 0.05, -1.3]}
      rotation={[-Math.PI, 1.02, -Math.PI]}
      scale={0.01}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Pagoda_mesh.geometry}
      material={materials["lambert2SG.004"]}
      position={[0.9, 0.04, -1.72]}
      scale={0.02}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Tractor_mesh.geometry}
      material={materials["Tractor:Tractor_mat"]}
      position={[-0.49, 0.05, -1.78]}
      rotation={[0, 0.51, 0]}
      scale={0.02}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.AmericanWhitePelican_mesh.geometry}
      material={materials.AmericanWhitePelican_mat}
      position={[0.46, 0.05, -1.72]}
      rotation={[0, 0.51, 0]}
      scale={0.03}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Body.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_BodySG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Wheel_FL.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_BodySG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Wheel_FR.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_BodySG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Wheel_RL.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_BodySG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Lamborghini_Aventador_Wheel_RR.geometry}
      material={
        materials["_Lamborghini_AventadorLamborghini_Aventador_BodySG.001"]
      }
      position={[-0.56, 0.04, 1.75]}
      rotation={[Math.PI, -1.22, Math.PI]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Scarecrow_mesh.geometry}
      material={materials.Scarecrow_mat1}
      position={[-0.62, 0.05, -1.76]}
      rotation={[0, -0.48, 0]}
      scale={0.07}
    />
  </group>
  );
}

useGLTF.preload("/xdxd3.glb");
export default Model;