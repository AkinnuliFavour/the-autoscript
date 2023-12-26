import { FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

const Header = (transcript) => {
  console.log(transcript)
  const handleDownload = () => {
    if(typeof transcript === 'object') {
      const blob = new Blob([`${transcript.transcript}`], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "transcript.txt");
    }
    const blob = new Blob([`${transcript}`], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "transcript.txt");
  }

  return (
    <header className='w-full'>
        <nav className='w-full py-4 px-8 flex justify-between text-[#9D9B62]'>
          <Link to='/transcribe-choice' className='text-left text-xl font-bold brand-name-shadow'>The AutoScript</Link>
          <section className='p-4 mb-4 bg-[#9D9B62] text-[#62649d] rounded-full shadow-circle' onClick={() => handleDownload()}>
            <FaDownload />
          </section>
        </nav>
    </header>
  )
}

export default Header
