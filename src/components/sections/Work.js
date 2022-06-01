import React, { useEffect, forwardRef} from 'react'
import WorkItems from '../elements/WorkItems'


const Work = forwardRef((props, ref) => {

    return (
        <section id="work" className="about-section" ref={ref}>
            <h2>Selected <br /> Works</h2>
            <div className="about-vertical-rule"></div>
            <div className="work-container">
                <WorkItems />
            </div>
        </section>
    )
})

export default Work