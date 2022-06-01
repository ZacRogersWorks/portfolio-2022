import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { LayerMaterial, Depth, Noise } from 'lamina'


const colors = {
    light: {
        noise: {
            a: "#ffffff",
            b: "#8097ad",
            c: "#7E9CBF",
            d: "#ebdfa5"
        },
        depth: {
            a: '#ffc4e5',
            b: '#000000',
            near: 1,
            far: 20,
            alpha: .2
        }
    },
    dark: {
        noise: {
            a: "#204660",
            b: "#020507",
            c: "#004252",
            d: "#AC693F"
        },
        depth: {
            a: "#000000",
            b: "#fef9fc",
            near: 10,
            far: 50,
            alpha: .7
        }
    }
}

const Gradient = ({ darkMode }) => {
    const noise = useRef(null)
    const depth = useRef(null)
    useFrame(({ clock }) => {
        //Animate Noise Layer
        noise.current.offset.x = Math.sin(clock.getElapsedTime() / 100) * 50
        noise.current.offset.y = Math.sin(clock.getElapsedTime() / 100) * 50
        noise.current.offset.z = (clock.getElapsedTime() / 2)
        //Animate Depth Layer
        depth.current.origin.x = Math.sin(clock.getElapsedTime() / 4) * 20
        depth.current.origin.y = Math.cos(clock.getElapsedTime() / 4) * 20
    })
    return (
        <mesh castShadow scale={[1.5, 1.5, 1.5]} position={[0,0,-10]}>
            <planeGeometry args={[40, 24]} />
            <LayerMaterial name={'Gradient'}>
                <Noise
                    ref={noise}
                    colorA={darkMode ? colors.dark.noise.a : colors.light.noise.a}
                    colorB={darkMode ? colors.dark.noise.b : colors.light.noise.b}
                    colorC={darkMode ? colors.dark.noise.c : colors.light.noise.c}
                    colorD={darkMode ? colors.dark.noise.d : colors.light.noise.d}
                    scale={.1}
                    mode={'normal'}
                />
                <Depth
                    ref={depth}
                    near={darkMode ? colors.dark.depth.near : colors.light.depth.near}
                    far={darkMode ? colors.dark.depth.far : colors.light.depth.far}
                    origin={[20, 0, 0]}
                    colorA={darkMode ? colors.dark.depth.a : colors.light.depth.a}
                    colorB={darkMode ? colors.dark.depth.b : colors.light.depth.b}
                    alpha={darkMode ? colors.dark.depth.alpha : colors.light.depth.alpha}
                    mode={"softlight"}

                />
            </LayerMaterial>
        </mesh>
    )
}

export default Gradient



{/* <LayerMaterial color={16711422} name={"Flower"}>
<Noise colorA={"#d4a63f"} colorB={"#00919d"} colorC={"#526c75"} colorD={"#86a4b0"} scale={0.1} offset={[-23.553420988748584,-23.553420988748584,603.7934500000197]} name={"noise"} />
<Depth near={10} far={50} origin={[2.9917721268595967,9.541975662353474,0]} colorA={"#000000"} colorB={"#fef9fc"} alpha={0.63} mode={"softlight"} />
</LayerMaterial> */}
