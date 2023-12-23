import { easeInOut } from "framer-motion";

export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1.5,
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: easeInOut 
        }
    }
}