import React, {forwardRef} from 'react'

import Toggle from '../elements/Toggle'

const Hero = forwardRef((props, ref) => {
    return (
        <section className="hero-section" ref={ref}>
            
                    <div id="home" className="darkmode-toggle">
                        <Toggle />
                    </div>
                    <div className="hero">
                        <h1>Zac Rogers</h1>
                        <span className='tagline'>Creative Developer</span>
                        <div className="hero-rule"></div>
                    </div>
        </section>
    )
})

export default Hero