export const getSection = (location) => {
    location = location || window?.location

    if (location) {
        if (location.pathname === '/') {
            if(location.hash.includes('about') ) return 'about'
            if(location.hash.includes('work') ) return 'work'
            if(location.hash.includes('contact') ) return 'contact'
            return 'hero'
        }
        if (location.pathname.startsWith('/projects/')) {
            return 'project'
        }

        return 'unknown'
    }
}