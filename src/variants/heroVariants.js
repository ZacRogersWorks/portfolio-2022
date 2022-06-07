export const titleVariants = {
    initial: {
        opacity: .01,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            staggerChildren: .5,
            ease: "easeOut"
        }
    }
}