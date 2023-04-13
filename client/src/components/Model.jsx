import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { deathwing } from "../assets";


export function Model(props) {
  const { nodes, materials } = useGLTF("/xdxd4.glb");

  
  // Inside the component where the mesh is being rendered:
  const meshRef = useRef();

  const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(deathwing);

const material1= new THREE.MeshStandardMaterial({
  map: texture,
  color: 0xffffff, 
});


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
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <group
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    >
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
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group708977906.geometry}
      material={materials["mat10.025"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group782497130.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <group
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    >
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
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group192025321.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1087340524.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group211240389.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1467201906.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1345804679.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1923766579.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1535172347.geometry}
      material={materials["mat23.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group825597784.geometry}
      material={materials["mat7.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group568159733.geometry}
      material={materials["mat7.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group621784425.geometry}
      material={materials["mat8.003"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group927813173.geometry}
      material={materials["mat10.025"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group53042870.geometry}
      material={materials["mat10.025"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1167757391.geometry}
      material={materials["mat21.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1268708625.geometry}
      material={materials["mat21.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group62286769.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2010671219.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group261742740.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group319832160.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group148953620.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1154146536.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1643572436.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1901817716.geometry}
      material={materials["mat20.004"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group895133976.geometry}
      material={materials["mat9.024"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group603932705.geometry}
      material={materials["mat9.024"]}
      position={[-1.29, 0.06, 2.16]}
      rotation={[0, -0.99, 0]}
      scale={0.13}
    />
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
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group999926703.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1959334084.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group501438823.geometry}
      material={materials["mat21.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1583569083.geometry}
      material={materials["mat13.004"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group623948272.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group521428595.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group394876426.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group175067529.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group771674849.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1499288047.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group540753698.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group910836835.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1266094004.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group879935772.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1237499413.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2052411543.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group814182451.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1563157012.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group945954435.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group2137811705.geometry}
      material={materials["mat23.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1325921846.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group558692371.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.06, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.1}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1965545412.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group1780542559.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group238580994.geometry}
      material={materials["mat20.007"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group557000331.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group590056157.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group792148737.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
      scale={0.08}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.group367664734.geometry}
      material={materials["mat8.006"]}
      position={[-1.27, 0.05, 2.09]}
      rotation={[-Math.PI, 0.46, -Math.PI]}
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
      material={materials.Material}
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
      geometry={nodes.endTurn.geometry}
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
      geometry={nodes.Plane009.geometry}
      material={materials["Material.003"]}
      position={[-0.21, 0.09, -0.95]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh1}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane010.geometry}
      material={materials["Material.007"]}
      position={[-0.21, 0.09, -0.61]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh2}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane011.geometry}
      material={materials["Material.008"]}
      position={[-0.21, 0.09, -0.28]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh3}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane012.geometry}
      material={materials["Material.010"]}
      position={[-0.21, 0.09, 0.04]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh4}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane013.geometry}
      material={materials["Material.011"]}
      position={[-0.21, 0.09, 0.36]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh5}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane014.geometry}
      material={materials["Material.015"]}
      position={[-0.21, 0.09, 0.68]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh6}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane015.geometry}
      material={materials["Material.024"]}
      position={[-0.21, 0.09, 0.98]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh7}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane016.geometry}
      material={materials["Material.025"]}
      position={[0.23, 0.09, -0.92]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh8}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane017.geometry}
      material={materials["Material.026"]}
      position={[0.24, 0.09, -0.62]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh9}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane018.geometry}
      material={materials["Material.027"]}
      position={[0.24, 0.09, -0.3]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh10}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane019.geometry}
      material={materials["Material.028"]}
      position={[0.24, 0.09, 0.02]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh11}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane020.geometry}
      material={materials["Material.029"]}
      position={[0.24, 0.09, 0.34]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh12}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane021.geometry}
      material={materials["Material.030"]}
      position={[0.24, 0.09, 0.67]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh13}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane022.geometry}
      material={materials["Material.031"]}
      position={[0.24, 0.09, 1]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[0.18, 0.18, 0.12]}
      visible={props.showMesh14}
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
      geometry={nodes.windmill.geometry}
      material={materials.None}
      position={[-1.02, 0.29, -1.77]}
      rotation={[0, -0.9, 0]}
      scale={0.21}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.myFace.geometry}
      material={materials.DXD5ZqVVAAErfz4}
      position={[-0.67, 0.09, 0.02]}
      rotation={[-Math.PI, -Math.PI / 2, 0]}
      scale={[0.4, 0.38, 0.44]}
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
      onClick={() => props.handleMeshClick("HeroPower")}
      geometry={nodes.heroPower.geometry}
      material={materials.Shapeshift}
      position={[-0.73, 0.1, 0.45]}
      rotation={[0, -1.57, 0]}
      scale={0.37}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick("FaceEnemy")}

      geometry={nodes.faceEnemy.geometry}
      material={materials["DXD5ZqVVAAErfz4.001"]}
      position={[0.71, 0.09, 0.02]}
      rotation={[-Math.PI, 1.57, 0]}
      scale={[0.4, 0.38, 0.44]}
    />
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
  
      onClick={() => props.handleMeshClick(1)}
      geometry={nodes.card1.geometry}
      material={props.material1}
      position={[-0.19, 0.12, -0.96]}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      scale={0.44}
      visible={props.showMesh1}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(2)}    
      geometry={nodes.card2.geometry}
      material={props.material2}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, -0.62]}
   
      scale={0.44}
      visible={props.showMesh2}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(3)}    

      geometry={nodes.card3.geometry}
      material={props.material3}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, -0.29]}
 
      scale={0.44}
      visible={props.showMesh3}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(4)}    
      visible={props.showMesh4}
      geometry={nodes.card4.geometry}
      material={props.material4}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, 0.03]}

      scale={0.44}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(5)}    
      visible={props.showMesh5}
      geometry={nodes.card5.geometry}
      material={props.material5}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, 0.35]}
    
      scale={0.44}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(6)}    
      visible={props.showMesh6}
      geometry={nodes.card6.geometry}
      material={props.material6}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, 0.67]}
 
      scale={0.44}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(7)}    
      visible={props.showMesh7}
      geometry={nodes.card7.geometry}
      material={props.material7}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[-0.19, 0.12, 0.97]}
   
      scale={0.44}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(8)}    
      visible={props.showMesh8}
      geometry={nodes.cardb1.geometry}
      material={props.material8}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.21, 0.12, -0.91]}
    
      scale={0.44}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(9)}    

      geometry={nodes.cardb2.geometry}
      material={props.material9}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.21, 0.12, -0.62]}
   
      scale={0.44}
      visible={props.showMesh9}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(10)}    
      visible={props.showMesh10}
      geometry={nodes.cardb3.geometry}
      material={props.material9}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.21, 0.12, -0.3]}
    
      scale={0.44}
    />


    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(11)}    
      visible={props.showMesh11}
      geometry={nodes.cardb4.geometry}
      material={props.material11}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.21, 0.12, 0.02]}
 
      scale={0.44}
    
    />

  
  <mesh
    castShadow
    receiveShadow
    onClick={() => props.handleMeshClick(12)}
    geometry={nodes.cardb5.geometry}
    material={props.material12}
      rotation={[ Math.PI, Math.PI / 2, 0]}
    position={[0.22, 0.12, 0.34]}
 
    scale={0.44}
    visible={props.showMesh12}
  />


    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(13)}    
      geometry={nodes.cardb6.geometry}
      material={props.material13}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.22, 0.12, 0.67]}
      
      scale={0.44}
      visible={props.showMesh13}
    />
    <mesh
      castShadow
      receiveShadow
      onClick={() => props.handleMeshClick(14)}    

      geometry={nodes.cardb7.geometry}
      material={props.material14}
      rotation={[ Math.PI, Math.PI / 2, 0]}
      position={[0.22, 0.12, 1.01]}
     
      scale={0.44}
      visible={props.showMesh14}
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
      geometry={nodes.Tractor_mesh.geometry}
      material={materials["Tractor:Tractor_mat"]}
      position={[-0.49, 0.05, -1.78]}
      rotation={[0, 0.51, 0]}
      scale={0.02}
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



useGLTF.preload("/xdxd4.glb");
export default Model;