import React, { useEffect, forwardRef} from 'react'
import { useSiteContext } from '../context/SiteContext'


const About = forwardRef((props, ref) => {

    return (
        <section id="about" className="about-section" ref={ref}>
            <h2>About</h2>
            <div className="about-vertical-rule"></div>
            <div>
                <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat. Elementum integer enim neque volutpat ac tincidunt vitae semper. Porta nibh venenatis cras sed felis. Hac habitasse platea dictumst vestibulum rhoncus est. Facilisis magna etiam tempor orci eu. Condimentum id venenatis a condimentum vitae sapien. Ullamcorper morbi tincidunt ornare massa eget egestas. 
                </p>
            </div>
        </section>
    )
})

export default About