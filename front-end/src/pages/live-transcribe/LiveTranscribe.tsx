import { motion } from 'framer-motion'
import { FaMicrophone } from 'react-icons/fa'
import { containerVariants } from '../../utils/variants'
import { Header } from '../components'

const LiveTranscribe = () => {
  return (
    <motion.main 
      className='bg-gradient-to-b from-[#62649d] to-[#8183B1] text-gray-100 h-screen flex flex-col items-center justify-between uppercase'
      variants={containerVariants}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Header />
      <section className='w-full flex justify-center px-8'>
        <textarea name="" id="" className='p-2 w-full h-72 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box'></textarea>
      </section>
      <section className='p-4 mb-4 bg-[#9D9B62] text-[#62649d] rounded-full shadow-circle'>
          <FaMicrophone />
      </section>
    </motion.main>
  )
}

export default LiveTranscribe
