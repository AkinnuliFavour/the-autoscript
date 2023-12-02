import {motion} from 'framer-motion';
import {Link} from 'react-router-dom'
import { containerVariants } from '../../utils/variants';

const Home = () => {
  return (
    <motion.main
        className="flex min-h-screen flex-col items-center justify-between p-8 text-white w-full bg-black"
        variants={containerVariants}
        initial = 'hidden'
        animate = 'show'
        exit= 'exit'
    >
       <motion.header 
            className='text-center'
            initial={{
                y: '-100vh'
            }}
            animate={{
                y: 0
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                duration: 2
            }}
        >
            <h3 className='text-3xl font-medium'>Welcome to <span className='text-[#9D9B62]'>
            The AutoScript!</span></h3>
            <p className='mt-4'>Helping you to save your time and stay productive</p>
        </motion.header>
        <motion.section 
            className='w-full md:w-1/2 lg:w-2/5'
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: 1,
                duration: 6
            }}
        >
            <img src="/ai3.gif" alt="" className='rounded-3xl'/>
        </motion.section>
        <Link to='transcribe-choice'>
        <motion.button 
            className='border-[3px] border-r-[#9D9B62] border-t-[#9D9B62] border-l-[#B1AF81] border-b-[#B1AF81] px-12 rounded-full py-2 hover:bg-gradient-to-t from-[#9D9B62] to-[#B1AF81]'
            initial={{
                y: '100vh'
            }}
            animate={{
                y: 0
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                duration: 2
            }}
            whileHover={{
                textShadow: '0px 0px 8px rgb(255, 255, 255)',
                boxShadow: '0px 0px 8px rgb(255, 255, 255)',
            }}
        >
            Get Started
        </motion.button>
  </Link>
</motion.main>
  )
}

export default Home;
