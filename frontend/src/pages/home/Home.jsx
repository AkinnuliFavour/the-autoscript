import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main
        className="flex min-h-screen flex-col items-center justify-between p-8 text-white w-full bg-black"
    >
       <header 
            className='text-center'
        >
            <h3 className='text-3xl font-medium'>Welcome to <span className='text-[#9D9B62]'>
            The AutoScript!</span></h3>
            <p className='mt-4'>Helping you to save your time and stay productive</p>
        </header>
        <section 
            className='w-full md:w-1/2 lg:w-2/5'
        >
            <img src="/ai3.gif" alt="" className='rounded-3xl'/>
        </section>
        <Link to='transcribe-choice'>
        <button 
            className='border-[3px] border-r-[#9D9B62] border-t-[#9D9B62] border-l-[#B1AF81] border-b-[#B1AF81] px-12 rounded-full py-2 hover:bg-gradient-to-t from-[#9D9B62] to-[#B1AF81]'
        >
            Get Started
        </button>
  </Link>
</main>
  )
}

export default Home;
