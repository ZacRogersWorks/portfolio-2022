import React, { useEffect, useState, createContext, useContext } from 'react'
import { useInView, InView } from 'react-intersection-observer'

// const defaultState = {
//   darkMode: false,
//   darkModeToggle: () => {}
// }

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
    if (heroInView) setVisibleSection("hero")
    if (aboutInView) setVisibleSection("about")
    if (workInView) setVisibleSection("work")
    if (contactInView) setVisibleSection("contact")
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
          contact
        }
      }
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext

export { useSiteContext, SiteContextProvider }