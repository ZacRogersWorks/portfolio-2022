import React from 'react'
import Div100vh from 'react-div-100vh'
import { SiteContextProvider } from './src/components/context/SiteContext'
import { AnimatePresence } from 'framer-motion'
import { MOTION_VARIANTS } from './src/variants/MOTION_VARIANTS'
import { waitForElementToExist } from './src/utilities/waitForElementToExist'
import { useSiteContext } from './src/components/context/SiteContext'


export const wrapRootElement = ({ element }) => {
    return (
        <SiteContextProvider>
            {element}
        </SiteContextProvider>
    )
}

export const wrapPageElement = ({ element }) => {
    return (
            <AnimatePresence exitBeforeEnter>
                {element}
            </AnimatePresence>
    )
}

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {
    return false;
}

export const onRouteUpdate = ({
    location,
    prevLocation
}) => {
    // When user clicks on project, scroll projects to top of page w/ animation.
    // If user navigates back to homepage, snap to Work section w/ animation.
    const path = location.pathname
    const isProject = path.startsWith('/projects/')
    const transitionDelay = (MOTION_VARIANTS.work.exit.transition.duration * 1000) + 100
    console.log('PrevLocation', prevLocation)

    if (path === '/') {
        const cameFromProjects = prevLocation && prevLocation.pathname.startsWith('/projects/')
        if (cameFromProjects) {
            const hash = location.hash || '#work'

            setTimeout(() => {
                waitForElementToExist(`section${hash}`)
                    .then(workSection => workSection.scrollIntoView(true))
            }, transitionDelay)
        }
    } else {
        setTimeout(
            () => {
                window.scrollTo(0, 0)
            }, transitionDelay);
    }
}