import axios from 'axios';

const base_url = 'https://api.assemblyai.com/v2';

const headers = {
  authorization: 'e27b00f7037b43e8beabf91e43796609'
}

export const submitFile = async(path: string) => {
  console.log(path);
  const data = {
    audio_url: `${path}` // You can also use a URL to an audio or video file on the web
  }
  const url = base_url + '/transcript'

  const response = await axios.post(url, data, { headers: headers })
  console.log(response);
  const transcriptId = response.data.id
  const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${transcriptId}`

  while (true) {
    const pollingResponse = await axios.get(pollingEndpoint, {
      headers: headers
    })
    const transcriptionResult = pollingResponse.data

    if (transcriptionResult.status === 'completed') {
      // console.log(transcriptionResult)
      return transcriptionResult.text
      break
    } else if (transcriptionResult.status === 'error') {
      throw new Error(`Transcription failed: ${transcriptionResult.error}`)
    } else {
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }

  }
}