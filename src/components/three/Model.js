
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion-3d";
import { useSiteContext } from "../context/SiteContext";

const desktopBreakpoint = 1024;
const mobileBreakpoint = 500;
const heightBreakpoint = 690;
const defaultRotation = [(Math.PI / 2), (Math.PI / 15), (Math.PI / -6)]

export default function Model(props) {
  // const currentContext= useSiteContext();
  // // const motionControls = useAnimation();
  // useEffect(() => {
  //   if (currentContext.section.visibleSection === "about") {
  //     motionControls.start()
  //   }
  // },[currentContext.section.visibleSection])


  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/me-swimming.glb");
  const { actions } = useAnimations(animations, group);

  const [width, setWidth] = useState(window?.innerWidth);
  const [height, setHeight] = useState(window?.innerHeight)
  const [position, setPosition] = useState()
  const [scale, setScale] = useState()
  const [rotation, setRotation] = useState(defaultRotation)


  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window?.innerWidth)
      setHeight(window?.innerHeight)
    };
    window?.addEventListener("resize", handleResizeWindow);
    return () => {
      window?.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (width > desktopBreakpoint) {
      setPosition([6, -3, 3])
      setScale(.07)
      setRotation([(Math.PI / 2.5), (Math.PI / 30), (Math.PI / 5)])
    } else if (width < desktopBreakpoint) {
      setPosition([0, -1, 0])
      setScale(.055)
      setRotation(defaultRotation)
    }
    if (height < heightBreakpoint) {
      setPosition([0, 0, 0])
      setScale(.050)
    }
  }, [width, height])

  useEffect(() => {
    actions.swim.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature002"
          position={position}
          rotation={rotation}
          scale={scale}
        >
          <primitive object={nodes.mixamorigHips} />
          <motion.skinnedMesh
            name="Ch31_Collar002"
            geometry={nodes.Ch31_Collar002.geometry}
            material={nodes.Ch31_Collar002.material}
            skeleton={nodes.Ch31_Collar002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Earring002"
            geometry={nodes.Earring002.geometry}
            material={nodes.Earring002.material}
            skeleton={nodes.Earring002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Left002"
            geometry={nodes.Left002.geometry}
            material={materials.Hair}
            skeleton={nodes.Left002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Right002"
            geometry={nodes.Right002.geometry}
            material={materials.Hair}
            skeleton={nodes.Right002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Left_Eye"
            geometry={nodes.Left_Eye.geometry}
            material={materials.OrangOetan__LOWOog_buiten}
            skeleton={nodes.Left_Eye.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Right_Eye"
            geometry={nodes.Right_Eye.geometry}
            material={materials.OrangOetan__LOWOog_buiten}
            skeleton={nodes.Right_Eye.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Ch31_Body002"
            geometry={nodes.Ch31_Body002.geometry}
            material={materials.RealSkin}
            skeleton={nodes.Ch31_Body002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="FBHead003"
            geometry={nodes.FBHead003.geometry}
            material={materials.RealSkin}
            skeleton={nodes.FBHead003.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Hair002"
            geometry={nodes.Hair002.geometry}
            material={materials.Hair}
            skeleton={nodes.Hair002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Ch31_Pants002"
            geometry={nodes.Ch31_Pants002.geometry}
            material={materials["Ch31_body.001"]}
            skeleton={nodes.Ch31_Pants002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Ch31_Shoes002"
            geometry={nodes.Ch31_Shoes002.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Shoes002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
          <motion.skinnedMesh
            name="Ch31_Sweater002"
            geometry={nodes.Ch31_Sweater002.geometry}
            material={materials["Ch31_body.002"]}
            skeleton={nodes.Ch31_Sweater002.skeleton}
            material-transparent
            opacity={props.section === 'about' ? 1 : 0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/me-swimming.glb");