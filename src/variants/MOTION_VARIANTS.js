export const MOTION_VARIANTS = {
    hero: {
        initial: {
            opacity: .01,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .7,
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
    },
    work: {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: .1,
                when: "beforeChildren",
                ease: "easeOut"
            }
        },
        exit: {
            x: "-100vw",
            transition: {
                duration: 1,
            }
        }
    },
    fadeUp: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: .6,
                when: "beforeChildren",
                staggerChildren: .1
            }
        }
    },
    footer: {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.3,
                staggerChildren: .3,
                ease: "easeOut",
                when: "beforeChildren"
            }
        }
    },
    projects: {
        initial: {
            opacity: .01,
            x: "100vw",
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut",
                staggerChildren: .3,
                when: "beforeChildren"
            }
        },
        exit: {
            x: "100vw",
            transition: {
                duration: 1,
            }
        },
    }
}

export const SECTION_VARIANTS = {
    heading: {
        initial: {
            opacity: 0,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: "easeOut"
            }
        },
    },
    headingWork: {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .3,
                duration: .7,
                ease: "easeOut"
            }
        },
    },
    rule: {
        initial: {
            opacity:0,
            scaleY: .01
        },
        animate: {
            opacity:1,
            scaleY: 1,
            transition: {
                duration: .5,
                delay: .7,
                ease: "easeOut"
            }
        }
    },
    p: {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .8,
                delay: 1.3,
                ease: "easeOut"
            }
        },
    },
    fadeUpElement: {
        initial: {
            opacity: 0,
            y: 40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .4,
                ease: "easeOut"
            }
        }
    },
    fadeUpP: {
        initial: {
            opacity: 0,
            y: 40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .6,
                duration: .7,
                ease: "easeOut"
            }
        }
    }
}

export const PROJECT_VARIANTS = {
    heading: {
        initial: {
            opacity: .01,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
                ease: "easeOut"
            }
        }
    },
    links: {
        initial: {
            opacity: .01,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
                ease: "easeOut"
            }
        }
    },
    rule: {
        initial: {
            opacity:0,
            scaleY: .01
        },
        animate: {
            opacity:1,
            scaleY: 1,
            transition: {
                duration: .5,
                delay: .7,
                ease: "easeOut"
            }
        }
    },
    image: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }
}

export const SVG_VARIANTS = {
    initial: {opacity: 0},
    animate: {
        opacity: 1
    },

}

export const PATH_VARIANTS = {
    initial: {
        pathLength: 0,
        fillOpacity: 0,
    },
    animate: {
        pathLength: [0, .5, .75, 1, 0],
        fillOpacity: [0, 0, .5, 1, 1],
        transition: {
            duration: 2,
            ease: "easeOut",
        }
    }
}