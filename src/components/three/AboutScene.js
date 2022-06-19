import React from 'react';
import { Float, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useState } from 'react'
import Bubble from './Bubble'
import Gradient from './Gradient'
import Model from './Model'


import UNIQUE_ID from '../../utilities/UNIQUE_ID'

const AboutScene = ({darkMode, section}) => {
    // const currentContext = useContext(SiteContext)
    let bubbleCount = 0
    const [bubbles, setBubbles] = useState(new Array(12))

    const createBubble = () => {
        setBubbles(bubbles => {
            const bubbleSlot = bubbleCount % (bubbles.length)
            bubbles[bubbleSlot] = UNIQUE_ID()
            bubbleCount++
            const bubs = [...bubbles]
            return bubs
        })
    }

    useEffect(() => {
        setInterval(() => {
           createBubble()
        }, 800);
    }, [])

    return (
        <scene>
            <pointLight position={[5, 13, 5]} color={darkMode ? "#BA815D" : "#FFFFBF"} intensity={3} />
            <pointLight position={[3, -5, 3]} color={darkMode ? "#023643" : "#D6C3CC"} intensity={darkMode ? 16 : 2} />
            <Float rotationIntensity={.2} floatIntensity={.1}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} near={1} far={20000} />
            </Float>
               {(section == 'about') ? <Model /> : null}
                {
                    bubbles.filter(bubble => !!bubble ).map(bubble => {
                        return <Bubble key={bubble} id={bubble} />
                    })
                }
                <Gradient darkMode={darkMode} />
        </scene>
    )
}

export default AboutScene