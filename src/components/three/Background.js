import React, { useEffect, useState, Suspense} from 'react'
import { useSiteContext } from '../context/SiteContext'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import HeroScene from './HeroScene'
import AboutScene from './AboutScene'
import WorkScene from './WorkScene'
import { setQuaternionFromProperEuler } from 'three/src/math/MathUtils'

const loaderColors = {
    light:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(39,58,95,1) 34%, rgba(255,255,255,1) 74%, rgba(203,246,255,1) 100%)",
    dark: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(39,58,95,1) 34%, rgba(249,145,66,1) 78%, rgba(203,246,255,1) 100%)"
}

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
                    color: "#ffffff"
                }}
                barStyles={{backgroundColor: "#7D93A9"}}
                />

        </div>
    )
}
