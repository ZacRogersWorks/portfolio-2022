import React, { useEffect, useState } from 'react'
import { Controls } from 'react-three-gui'
import { useSiteContext } from '../context/SiteContext'

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
            <Controls.Provider>
                <Controls.Canvas >
                    {currentSection}
                </Controls.Canvas>
            </Controls.Provider>
        </div>
    )
}
