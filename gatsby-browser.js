import React from 'react'
import { SiteContextProvider } from './src/components/context/SiteContext'
import { AnimatePresence } from 'framer-motion'

export const wrapRootElement = ({ element }) => {
    return (
        <SiteContextProvider>
            {element}
        </SiteContextProvider>
    )
}

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {
    const TRANSITION_DELAY = 1000

    if (location.action === "PUSH") {
        window.setTimeout(() => window.scrollTo(0,0), TRANSITION_DELAY)
    }

    else {
        const savedPosition = getSavedScrollPosition(location) || [0,0]
        window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
    }

    return false
}

export const wrapPageElement = ({ element }) => {
    return (
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    )
}