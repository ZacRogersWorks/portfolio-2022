import React, { useEffect, useState } from 'react'
import { useSiteContext } from '../context/SiteContext'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'
import AboutScene from './AboutScene'
import WorkScene from './WorkScene'

export default function Background() {
    const currentContext = useSiteContext()
    const [currentSection, setCurrentSection] = useState()

    useEffect(() => {
        if (currentContext.section.visibleSection === 'hero') {
            setCurrentSection(<HeroScene darkMode={currentContext.darkMode} />)
        }
        else{
            setCurrentSection(<AboutScene darkMode={currentContext.darkMode} section={currentContext.section.visibleSection} />)
        }
        }, [currentContext.darkMode, currentContext.section])

    return (
        <div className="canvas-container">
                <Canvas >
                    {currentSection}
                </Canvas>

        </div>
    )
}
