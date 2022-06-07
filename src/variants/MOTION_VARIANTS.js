export const MOTION_VARIANTS = {
    hero: {
        initial: {
            opacity: .01,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                staggerChildren: .4,
                ease: "easeOut",
            }
        }
    },
    about: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: .1,
                staggerChildren: .1,
                when: "beforeChildren",
                ease: "easeOut"
            }
        }
    }
}