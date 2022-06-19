import React, { useEffect, useState, Suspense, useRef} from 'react'
import { useSiteContext } from '../context/SiteContext'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import HeroScene from './HeroScene'
import AboutScene from './AboutScene'
import { useLocation } from '@reach/router'
import { getSection } from '../../utilities/getSection'

export default function Background() {
    const canvasRef = useRef(null)
    const currentContext = useSiteContext()
    const [currentSection, setCurrentSection] = useState()
    const location = useLocation()

    const loaderColors = {
        light:"#ffffff",
        dark: "#000000"
    }

    const chooseScene = () => {
        // setTimeout(() => {
            const _section = getSection()
            if (_section === 'hero') {
                setCurrentSection(<HeroScene darkMode={currentContext.darkMode} />)
            }
            // if (currentContext.section.visibleSection === 'hero') {
            //     setCurrentSection(<HeroScene darkMode={currentContext.darkMode} />)
            // }
            // else if (location.pathname.startsWith('/projects/')) {
            //     setCurrentSection(<AboutScene darkMode={currentContext.darkMode} section={currentContext.section.visibleSection} />)
            // }
            else{
                setCurrentSection(<AboutScene darkMode={currentContext.darkMode} section={currentContext.section.visibleSection} />)
            }
        // }, 0)
    }

    useEffect(() => {
        chooseScene()

        setTimeout(() => {
            console.log('Loader', canvasRef.current)
        },200)
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
