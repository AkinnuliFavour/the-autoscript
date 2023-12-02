import {Home, TranscribeChoice, LiveTranscribe, FileTranscribe} from './pages';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />}/>
            <Route path='/transcribe-choice' element={<TranscribeChoice />} />
            <Route path='/live-transcribe' element={<LiveTranscribe />} />
            <Route path='/file-transcribe' element={<FileTranscribe />} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  )
}

export default App
