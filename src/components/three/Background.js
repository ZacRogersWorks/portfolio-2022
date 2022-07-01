import React, { useEffect, useState, Suspense, useRef } from 'react'
import { useSiteContext } from '../context/SiteContext'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import HeroScene from './HeroScene'
import AboutScene from './AboutScene'
import { getSection } from '../../utilities/getSection'


export default function Background() {
    const canvasRef = useRef(null)
    const currentContext = useSiteContext()
    const [currentSection, setCurrentSection] = useState()

    const loaderColors = {
        light: "#ffffff",
        dark: "#000000"
    }

    const chooseScene = () => {
        const _section = getSection()
        if (_section === 'hero') {
            setCurrentSection(<HeroScene darkMode={currentContext.darkMode} />)
        }
        else {
            setCurrentSection(<AboutScene darkMode={currentContext.darkMode} section={currentContext.section.visibleSection} />)
        }
    }

    useEffect(() => {
        chooseScene()
    }, [])

    useEffect(() => {
        chooseScene()

    }, [currentContext.darkMode, currentContext.section])


    return (
        <div className="canvas-container" ref={canvasRef}>
            <Canvas >
                <Suspense fallback={null}>
                    {currentSection}
                </Suspense>
            </Canvas>
            <Loader
                containerStyles={{
                    background: `${currentContext.darkMode ? loaderColors.dark : loaderColors.light}`,
                    alignItems: "flex-end",
                    paddingBottom: "6rem"
                }}
                dataStyles={{
                    fontFamily: 'space mono',
                    color: `${currentContext.darkMode ? loaderColors.light : loaderColors.dark}`
                }}
                barStyles={{
                    backgroundColor: "#7D93A9",
                }}
            />

        </div>
    )
}
