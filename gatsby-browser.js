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

export const wrapPageElement = ({ element }) => {
    return (
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    )
}

const TRANSITION_DELAY = 1000

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {

    if (location.pathname.startsWith('/pr')) {
        setTimeout(window.scrollTo(0, 0), TRANSITION_DELAY);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            TRANSITION_DELAY
        );
    }
    return false;
}