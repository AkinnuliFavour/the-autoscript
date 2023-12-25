import { FaMicrophone } from 'react-icons/fa'
import { Header } from '../components'
// import { useState } from 'react'

const LiveTranscribe = () => {
//   if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();

//     // Configure recognition settings
//     recognition.continuous = true;
//     recognition.interimResults = true;

//     // Handle recognition results
//     recognition.onresult = (event) => {
//         const result = event.results[event.results.length - 1];
//         const transcript = result[0].transcript;
//         outputText.textContent = transcript;
//     };

//     // Handle recognition errors
//     recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//     };

//     // Start recognition when the button is clicked
//     startButton.addEventListener('click', () => {
//         recognition.start();
//         startButton.disabled = true;
//     });

//     // Re-enable the button when recognition ends
//     recognition.onend = () => {
//         startButton.disabled = false;
//     };
// } else {
//     outputText.textContent = "Speech recognition not supported in this browser.";
// }
  
  return (
    <main 
      className='bg-gradient-to-b from-[#62649d] to-[#8183B1] text-gray-100 h-screen flex flex-col items-center justify-between uppercase'
    >
      <Header />
      <section className='w-full flex justify-center px-8'>
        <textarea name="" id="" className='p-2 w-full h-72 bg-[#8183B1] text-gray-300 outline-none rounded-md shadow-box'></textarea>
      </section>
      <section
        className='p-4 mb-4 bg-[#9D9B62] text-[#62649d] rounded-full shadow-circle'
      >
          <FaMicrophone />
      </section>
    </main>
  )
}

export default LiveTranscribe
