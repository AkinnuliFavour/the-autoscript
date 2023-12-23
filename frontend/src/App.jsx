import {Home, TranscribeChoice, LiveTranscribe, FileTranscribe} from './pages';
import {Routes, Route} from 'react-router-dom';

function App() {
  // const location = useLocation();
  return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/transcribe-choice' element={<TranscribeChoice />} />
            <Route path='/live-transcribe' element={<LiveTranscribe />} />
            <Route path='/file-transcribe' element={<FileTranscribe />} />
        </Routes>
  )
}

export default App
