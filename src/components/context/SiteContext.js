import React, { useEffect, useState, createContext, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocation } from '@reach/router'
import * as utils from '../../utilities'

const initialSection = utils.getSection()

const SiteContext = createContext({
  darkMode: false,
  darkModeToggle: () => undefined,
  section: {
    visibleSection: initialSection,
    refs: {}
  }
})

const useSiteContext = () => {
  const _context = useContext(SiteContext)

  return _context
}

const SiteContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)

  const [visibleSection, setVisibleSection] = useState(initialSection)
  const [hero, heroInView] = useInView({ threshold: .2 })
  const [about, aboutInView] = useInView({ threshold: .5 })
  const [work, workInView] = useInView({ threshold: .5 })
  const [contact, contactInView] = useInView({ threshold: .8 })
  const [project, projectInView] = useInView({ threshold: .01})

  const darkModeTogglez = () => {
   if (document) {
    if (darkMode) {
      setDarkMode(() => false)
      document.body.classList.remove('dark-mode')
    }
    if (!darkMode) {
      setDarkMode(() => true)
      document.body.classList.add('dark-mode')
    }
   }
  }

  const setVisibleSectionState = (section) => {
    const history = window || window.history
    if (history) window.history.pushState({}, "", `#${section}`)
    setVisibleSection(section)
  }

  useEffect(() => {
    console.log("IN VIEW", visibleSection)
    if (heroInView) setVisibleSectionState("hero")
    if (aboutInView) setVisibleSectionState("about")
    if (workInView) setVisibleSectionState("work")
    if (contactInView) setVisibleSectionState("contact")
    if (projectInView) setVisibleSectionState("project")
  }, [heroInView, aboutInView, workInView, contactInView])

  return (
    <SiteContext.Provider value={{
      darkMode: darkMode,
      darkModeToggle: darkModeTogglez,
      section: {
        visibleSection: visibleSection,
        refs: {
          hero,
          about,
          work,
          contact,
          project
        }
      }
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext

export { useSiteContext, SiteContextProvider }