export const getSection = (_location) => {
    _location = _location || (window && window.location)

    if (_location) {
        if (_location.pathname === '/') {
            if(_location.hash.includes('about') ) return 'about'
            if(_location.hash.includes('work') ) return 'work'
            if(_location.hash.includes('contact') ) return 'contact'
            return 'hero'
        }
        if (_location.pathname.startsWith('/projects/')) {
            return 'project'
        }

        return 'unknown'
    }
}