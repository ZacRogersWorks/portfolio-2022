import React, { useEffect, useState, createContext, useContext } from 'react'
import { useInView } from 'react-intersection-observer'

const SiteContext = createContext()

const useSiteContext = () => {
  const _context = useContext(SiteContext)

  return _context
}

const SiteContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)

  const [visibleSection, setVisibleSection] = useState('hero')
  const [hero, heroInView] = useInView({ threshold: .2 })
  const [about, aboutInView] = useInView({ threshold: .5 })
  const [work, workInView] = useInView({ threshold: .5 })
  const [contact, contactInView] = useInView({ threshold: .8 })
  const [project, projectInView] = useInView({ threshold: .01})

  const darkModeTogglez = () => {
    if (darkMode) {
      setDarkMode(() => false)
      document.body.classList.remove('dark-mode')
    }
    if (!darkMode) {
      setDarkMode(() => true)
      document.body.classList.add('dark-mode')
    }
  }


  useEffect(() => {
    console.log("IN VIEW", visibleSection)
    if (heroInView) setVisibleSection("hero")
    if (aboutInView) setVisibleSection("about")
    if (workInView) setVisibleSection("work")
    if (contactInView) setVisibleSection("contact")
    if (projectInView) setVisibleSection("project")
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