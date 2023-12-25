import { Link } from 'react-router-dom';
import { transcribeChoiceImages, features } from '../../constants';

const TranscribeChoice = () => {
  return (
    <main>
        <nav 
            className='bg-[#62649d] text-gray-300 h-48 flex flex-col items-center text-center justify-center px-12 uppercase'
        >
            <p>
                <span className='text-[#9D9B62]'>The AutoScript </span>
                Speech to text Converter
            </p>
            <p>
                TRANSCRIBE ALL YOUR AUDIO FILES QUICKLY OR CREATE A LIVE TRANSCRIBED TEXT
            </p>
        </nav>
        <main className='bg-gray-100 text-gray-300 flex flex-col items-center justify-center text-center'>
            <section className='mt-12 grid gap-8 lg:flex lg:justify-between w-full'>
                {
                    transcribeChoiceImages.map(image => (
                        <section className='w-full p-4 flex flex-col items-center lg:w-1/2' key={image.id}>
                            <h3 className='mb-4 text-lg font-extrabold uppercase text-[#9D9B62]'>{image.text} <span className='text-[#62649d]'>Transcribe</span></h3>
                            <div
                                className={`w-full flex justify-center items-center h-72 md:h-96 bg-center`}
                                style={{backgroundImage: `url(${image.backgroundImage})`}}
                               
                            >
                                <Link to={image.link}>
                                    <button
                                        className='bg-[#8183B1] p-3 text-gray-300 font-semibold rounded-md'
                                    >
                                        Start Transcribe
                                    </button>
                                </Link>
                            </div>
                        </section>
                    ))
                }
            </section>
            <section className='mt-12 bg-[#62649d] w-full flex flex-col justify-between p-6'>
                <h3 className='text-xl font-bold uppercase text-[#9D9B62]'>The Autoscript <span className='text-gray-300'>Features</span></h3>
                <section className='md:grid md:grid-cols-4 gap-8'>
                {
                    features.map(feature => (
                        <div
                            key={feature.id} 
                            className='mt-8 bg-[#8183B1] p-4 text-center text-[#B1AF81] font-semibold rounded-md'
                        >
                            <p className=''>
                                {feature.content1}
                            </p>
                            <p className='mt-4'>
                                {feature.content2}
                            </p>
                        </div>
                    ))
                }
                </section>
            </section>
        </main>
    </main>
  )
}

export default TranscribeChoice
