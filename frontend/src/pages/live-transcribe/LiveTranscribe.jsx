import { FaMicrophone } from 'react-icons/fa'
import { Header } from '../components'
import { useState } from 'react'

const LiveTranscribe = () => {
  const [transcript, setTranscript] =useState("")

  const stream = (e) => {
    console.log('streaming')
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      console.log('Speech recognition supported.');
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
  
      // Configure recognition settings
      recognition.continuous = true;
      recognition.interimResults = true;
  
      // Handle recognition results
      recognition.onresult = (event) => {
          const result = event.results[event.results.length - 1];
          const liveTranscript = result[0].transcript;
          setTranscript((prev) => prev + liveTranscript);
      };
  
      // Handle recognition errors
      recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
      };
  
      // Start recognition when the button is clicked
          recognition.start();
          e.target.disabled = true;
  
      // Re-enable the button when recognition ends
      recognition.onend = () => {
          e.target.disabled = false;
      };
  } else {
      setTranscript("Speech recognition not supported in this browser.");
  }
  }
  
  const handleChange = (e) => {
    setTranscript(e.target.value)
  }
  
  return (
    <main 
      className='bg-gradient-to-b from-[#62649d] to-[#8183B1] text-gray-100 h-screen flex flex-col items-center justify-between uppercase'
    >
      <Header transcript={transcript}/>
      <section className='w-full flex justify-center px-8'>
        <textarea
          name="" 
          id="" 
          className='p-2 w-full h-72 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box resize-none'
          onChange={(e) => handleChange(e)}
          value={transcript}
        >

        </textarea>
      </section>
      <section
        className='p-4 mb-4 bg-[#9D9B62] text-[#62649d] rounded-full shadow-circle'
      >
          <FaMicrophone onClick={(e) => stream(e)} />
      </section>
    </main>
  )
}

export default LiveTranscribe
