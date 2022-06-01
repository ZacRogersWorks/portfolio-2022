import React from 'react'
import { SiteContextProvider } from './src/components/context/SiteContext'

export const wrapRootElement = ({ element }) => {
    return (
        <SiteContextProvider>
            {element}
        </SiteContextProvider>
    )
}
