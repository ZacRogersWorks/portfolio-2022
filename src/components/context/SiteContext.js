import React, { useEffect, useState, createContext, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { getDarkModeFromStorage, setDarkModeToStorage } from '../../utilities/themeStorage'
import { getSection } from '../../utilities/getSection'


const initialSection = 'hi'

const getInitialState = () => {
  return {
    darkMode: false,
    darkModeToggle: () => undefined,
    section: {
      visibleSection: '',
      refs: {
        hero: {},
        about: {},
        work: {},
        contact: {},
        project: {},
      }
    }
  }
}

const SiteContext = createContext(getInitialState())

const useSiteContext = () => {
  const _context = useContext(SiteContext)

  return _context
}

const SiteContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(getDarkModeFromStorage)

  const [visibleSection, setVisibleSection] = useState(getSection)
  const [hero, heroInView] = useInView({ threshold: .1 })
  const [about, aboutInView] = useInView({ threshold: .3 })
  const [work, workInView] = useInView({ threshold: .5 })
  const [contact, contactInView] = useInView({ threshold: .8 })
  const [project, projectInView] = useInView({ threshold: .01})

  useEffect(() => {

    if (darkMode) document.body.classList.add('dark-mode')
  }, [])

  const darkModeTogglez = () => {
   if (document) {
    setDarkMode((_darkMode) => {
      const newDarkMode = !_darkMode
      newDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
      setDarkModeToStorage(newDarkMode)
      return newDarkMode
    })
   }
  }

  const setVisibleSectionState = (section) => {
    const history = window || window.history
    if (history) window.history.pushState({}, "", `#${section}`)
    setVisibleSection(section)
  }

  useEffect(() => {
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