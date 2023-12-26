import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TranscribeChoice, LiveTranscribe, FileTranscribe} from './pages';
import {Routes, Route} from 'react-router-dom';
// import { use } from 'bcrypt/promises';

function App() {
  // const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
        <Routes>
            {/* <Route path='/' element={<Home />}/> */}
            <Route path='/' element={<TranscribeChoice />} />
            <Route path='/live-transcribe' element={<LiveTranscribe />} />
            <Route path='/file-transcribe' element={<FileTranscribe />} />
        </Routes>
  )
}

export default App
