import { useState, useRef } from 'react';
// import axios from 'axios';
import { Header } from '../components';
import { submitFile } from '../../utils';

const FileTranscribe = () => {

  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [urlpath, setUrlpath] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

  const fetchTranscript = async() => {
    console.log()
    setLoading(true)
    const formData = new FormData()
    const file = inputRef.current.files[0]
    formData.append('foo', file)
    // const data = await axios.post('https://the-autoscript.vercel.app', formData)
    // const formData = new FormData();  // Assuming you have some data to send in the formData

    try {
      const response = await fetch('https://the-autoscript.vercel.app', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();  // Assuming the response is JSON; adjust accordingly
      console.log(data);
      console.log(selectedFile)
      console.log(formData)
      console.log(data.data)
      const transcriptionResult = data.data
      setTranscript(transcriptionResult);
      setLoading(false)
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  const handleUpload = async() => {
    if(urlpath){
      setLoading(true);
      const transcriptionResult = await submitFile(urlpath);
      setLoading(false);
      setTranscript(transcriptionResult);
    }
    if(selectedFile){
      fetchTranscript()
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(typeof(e.target.files[0]))
      setSelectedFile(e.target.files[0])
    }
  }

  const handleChange = (e) => {
    setTranscript(e.target.value)
  }

  return (
    <main 
      className='bg-gradient-to-b from-[#62649d] to-[#8183B1] text-gray-100 min-h-screen flex flex-col items-center justify-between uppercase'
    >
      <Header transcript={transcript}/>
      <form encType='multipart/form-data' className='w-full flex flex-col gap-8 px-8'>
        <textarea
          className='p-4 w-full h-72 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box resize-none'
          value={transcript}
          onChange={(e) => handleChange(e)}
        />
        <p className='text-md'>
            upload a
            <span
              className='hover:cursor-pointer text-[#9D9B62] font-bold'
              onClick={
                () => {
                  showUrlInput && setShowUrlInput(false)
                  setShowFileInput(true)
                }
              }
            >
              {` local file `} 
            </span>
            or 
           <span
            className='hover:cursor-pointer text-[#9D9B62] font-bold'
            onClick={
              () => {
                showFileInput && setShowFileInput(false)
                setShowUrlInput(true)
              }
            }
           > 
            {` audio url `}
           </span>
        </p>
        {
          showUrlInput
            &&
          <input
            type="text"
            className='p-3 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box'
            placeholder = 'URL of audio file' 
            value={urlpath}
            onChange={(e) => setUrlpath(e.target.value)}
          />
        }
        {
          showFileInput
            &&
          <input
            type="file"
            className='p-3 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box'
            placeholder = 'URL of audio file' 
            onChange={(e) => handleFileChange(e)}
            name='foo'
            ref={inputRef}
          />
        }
      </form>
      <button
        className='px-6 py-2 mb-4 mt-4 bg-[#9D9B62] text-[#62649d] text-md font-semibold rounded-lg shadow-circle'
        onClick={() => handleUpload()}
        disabled = {!urlpath && !selectedFile ? true : false}
      >
        {loading ? 'Transcribing...' : 'UPLOAD'}
      </button>
    </main>
  )
}

export default FileTranscribe
