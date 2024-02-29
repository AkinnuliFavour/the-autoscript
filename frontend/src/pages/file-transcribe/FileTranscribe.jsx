import { useState, useRef } from 'react';
// import axios from 'axios';
import { Header } from '../components';
import { createClient } from "@supabase/supabase-js";
import { AssemblyAI } from 'assemblyai'

const FileTranscribe = () => {

  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Supabase client
  const supabase = createClient('https://rljogdxufpvitwwctbta.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsam9nZHh1ZnB2aXR3d2N0YnRhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjcyODE3NCwiZXhwIjoyMDIyMzA0MTc0fQ.tG3mJEIFZ4T5R6AYhof7VqCt-KDWi2SjkBnr0FLsjZo');

  const client = new AssemblyAI({
    apiKey: 'e27b00f7037b43e8beabf91e43796609' 
  })

  const handleUpload = async() => {
    setLoading(true)
    const { data, error } = await supabase
      .storage
      .from('the-autoscript')
      .upload(`public/${selectedFile.name}`, selectedFile, {
        cacheControl: '3600',
        upsert: false
      })
      console.log(selectedFile)
      console.log(data)
      // setUploadData(data)
      console.log(error)

      console.log(data.id)

      generateDownloadUrl(data.path).then(signedUrl => {
        console.log('Download URL:', signedUrl);
        // Now you can provide this URL to your users
      });
    }

    // Function to generate a signed URL for a file
    async function generateDownloadUrl(fileId) {
      // Generate a signed URL with a 1-hour expiry
      const { data, error } = await supabase.storage
        .from('the-autoscript')
        .createSignedUrl(`${fileId}`, 60 * 60); // Replace 'files' with your folder path
      
      if (error) {
        console.error('Error generating download URL:', error.message);
        return null;
      }
      
      console.log(data.signedUrl)
      transcribe(data.signedUrl)
    }

    const transcribe = async(audioUrl) => {
      const transcript = await client.transcripts.transcribe({ audio: audioUrl })

      if (transcript.status === 'error') {
        console.log(transcript.error)
      }

      const { error } = await supabase
        .storage
        .from('the-autoscript')
        .remove([`public/${selectedFile.name}`])

      if (error) {
        console.error('Error deleting file: ', error)
      } else {
        console.log('File deleted successfully')
      }

      console.log(transcript)
      setTranscript(transcript.text)
      setLoading(false)
    }

    // generateDownloadUrl(uploadData.id).then(downloadUrl => {
    //   console.log('Download URL:', downloadUrl);
    //   // Now you can provide this URL to your users
    // });

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0])
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
        <input
          type="file"
          className='p-3 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box'
          placeholder = 'URL of audio file' 
          onChange={(e) => handleFileChange(e)}
          name='foo'
          ref={inputRef}
        />
      </form>
      <button
        className='px-6 py-2 mb-4 mt-4 bg-[#9D9B62] text-[#62649d] text-md font-semibold rounded-lg shadow-circle'
        onClick={() => handleUpload()}
        disabled = {!selectedFile ? true : false}
      >
        {loading ? 'Transcribing...' : 'UPLOAD'}
      </button>
    </main>
  )
}

export default FileTranscribe
