const storageKey = '__zac_rogers_works_darkMode__'

export const getDarkModeFromStorage = () => {
    const storedTheme = localStorage.getItem(storageKey)
    return storedTheme === 'true'
}

/**
 * 
 * @param {boolean} darkMode 
 */
export const setDarkModeToStorage = (darkMode) => {
    localStorage.setItem(storageKey, `${darkMode}`)
}