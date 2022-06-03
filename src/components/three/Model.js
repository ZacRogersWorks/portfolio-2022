
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// export default function Model(props) {

//   const [width, setWidth] = useState(window.innerWidth);
//   const [position, setPosition] = useState()

//   const breakpoint = 700;
//   useEffect(() => {
//    const handleResizeWindow = () => setWidth(window.innerWidth);
//     // subscribe to window resize event "onComponentDidMount"
//     window.addEventListener("resize", handleResizeWindow);
//     return () => {
//       // unsubscribe "onComponentDestroy"
//       window.removeEventListener("resize", handleResizeWindow);
//     };
//   }, []);

//   useEffect(() => {
//     if (width > breakpoint) {
//       setPosition([2, -2, 3])
//     } else setPosition([0, -1.5, 0])
//   }, [width])


//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/me-swmming.glb");
//   const { actions} = useAnimations(animations, group);

//   useEffect(() => {
//     actions.swim.play()
//   }, [])

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group
//           name="Armature002"
//           position={position}
//           rotation={[(Math.PI / 2), (Math.PI / 15), (Math.PI / -6)]}
//           scale={0.06}
//         >
//           <primitive object={nodes.mixamorigHips} />
//           <skinnedMesh
//             name="Ch31_Collar002"
//             geometry={nodes.Ch31_Collar002.geometry}
//             material={nodes.Ch31_Collar002.material}
//             skeleton={nodes.Ch31_Collar002.skeleton}
//           />
//           <skinnedMesh
//             name="Earring002"
//             geometry={nodes.Earring002.geometry}
//             material={nodes.Earring002.material}
//             skeleton={nodes.Earring002.skeleton}
//           />
//           <skinnedMesh
//             name="Left002"
//             geometry={nodes.Left002.geometry}
//             material={nodes.Left002.material}
//             skeleton={nodes.Left002.skeleton}
//           />
//           <skinnedMesh
//             name="Right002"
//             geometry={nodes.Right002.geometry}
//             material={nodes.Right002.material}
//             skeleton={nodes.Right002.skeleton}
//           />
//           <skinnedMesh
//             name="Hair002"
//             geometry={nodes.Hair002.geometry}
//             material={nodes.Hair002.material}
//             skeleton={nodes.Hair002.skeleton}
//           />
//           <skinnedMesh
//             name="Ch31_Body002"
//             geometry={nodes.Ch31_Body002.geometry}
//             material={nodes.Ch31_Body002.material}
//             skeleton={nodes.Ch31_Body002.skeleton}
//           />
//           <skinnedMesh
//             name="FBHead003"
//             geometry={nodes.FBHead003.geometry}
//             material={nodes.FBHead003.material}
//             skeleton={nodes.FBHead003.skeleton}
//           />
//           <skinnedMesh
//             name="Ch31_Pants002"
//             geometry={nodes.Ch31_Pants002.geometry}
//             material={materials["Ch31_body.001"]}
//             skeleton={nodes.Ch31_Pants002.skeleton}
//           />
//           <skinnedMesh
//             name="Ch31_Shoes002"
//             geometry={nodes.Ch31_Shoes002.geometry}
//             material={materials.Ch31_body}
//             skeleton={nodes.Ch31_Shoes002.skeleton}
//           />
//           <skinnedMesh
//             name="Ch31_Sweater002"
//             geometry={nodes.Ch31_Sweater002.geometry}
//             material={materials["Ch31_body.002"]}
//             skeleton={nodes.Ch31_Sweater002.skeleton}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/me-swmming.glb");



export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/me-swimming-3.glb");
  const { actions } = useAnimations(animations, group);

  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState()

  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (width > breakpoint) {
      setPosition([2, -2, 3])
    } else setPosition([0, -1.5, 0])
  }, [width])

  useEffect(() => {
    actions.swim.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature002"
          position={position}
          rotation={[(Math.PI / 2), (Math.PI / 15), (Math.PI / -6)]}
          scale={0.06}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch31_Collar002"
            geometry={nodes.Ch31_Collar002.geometry}
            material={nodes.Ch31_Collar002.material}
            skeleton={nodes.Ch31_Collar002.skeleton}
          />
          <skinnedMesh
            name="Earring002"
            geometry={nodes.Earring002.geometry}
            material={nodes.Earring002.material}
            skeleton={nodes.Earring002.skeleton}
          />
          <skinnedMesh
            name="Left002"
            geometry={nodes.Left002.geometry}
            material={nodes.Left002.material}
            skeleton={nodes.Left002.skeleton}
          />
          <skinnedMesh
            name="Right002"
            geometry={nodes.Right002.geometry}
            material={nodes.Right002.material}
            skeleton={nodes.Right002.skeleton}
          />
          <skinnedMesh
            name="Ch31_Body002"
            geometry={nodes.Ch31_Body002.geometry}
            material={nodes.Ch31_Body002.material}
            skeleton={nodes.Ch31_Body002.skeleton}
          />
          <skinnedMesh
            name="FBHead003"
            geometry={nodes.FBHead003.geometry}
            material={nodes.FBHead003.material}
            skeleton={nodes.FBHead003.skeleton}
          />
          <skinnedMesh
            name="Ch31_Pants002"
            geometry={nodes.Ch31_Pants002.geometry}
            material={materials["Ch31_body.001"]}
            skeleton={nodes.Ch31_Pants002.skeleton}
          />
          <skinnedMesh
            name="Ch31_Shoes002"
            geometry={nodes.Ch31_Shoes002.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Shoes002.skeleton}
          />
          <skinnedMesh
            name="Ch31_Sweater002"
            geometry={nodes.Ch31_Sweater002.geometry}
            material={materials["Ch31_body.002"]}
            skeleton={nodes.Ch31_Sweater002.skeleton}
          />
          <skinnedMesh
            name="Hair002"
            geometry={nodes.Hair002.geometry}
            material={nodes.Hair002.material}
            skeleton={nodes.Hair002.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/me-swimming-3.glb");