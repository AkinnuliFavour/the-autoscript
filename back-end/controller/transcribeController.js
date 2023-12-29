const axios = require('axios')
const fs = require('fs-extra')
const fsPromises = require('fs').promises
const path = require('path')

const base_url = 'https://api.assemblyai.com/v2'

const headers = {
  authorization: 'e27b00f7037b43e8beabf91e43796609'
}

const sendFile = async (req, res) => {
    let transcriptionResult;
    console.log(req.body)
    console.log(req.file)
    const file = req.file
    if(file){
      const data = await fs.readFile(path.join(__dirname, '..', 'uploads', file.filename))
      const response = await axios.post(`${base_url}/upload`, data, { headers })
      const upload_url = response.data.upload_url
      const uploadData = {
        audio_url: upload_url // You can also use a URL to an audio or video file on the web
      }
      const url = base_url + '/transcript'
      const uploadResponse = await axios.post(url, uploadData, { headers: headers })
      const transcriptId = uploadResponse.data.id
      console.log(transcriptId)
      const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${transcriptId}`
        while (true) {
            const pollingResponse = await axios.get(pollingEndpoint, {
              headers: headers
            })
            transcriptionResult = pollingResponse.data
            if (transcriptionResult.status === 'completed') {
              fs.removeSync(path.join(__dirname, '..', 'uploads', file.filename))
              break
            } else if (transcriptionResult.status === 'error') {
              throw new Error(`Transcription failed: ${transcriptionResult.error}`)
            } else {
              await new Promise((resolve) => setTimeout(resolve, 3000))
            }
          }
          if (transcriptionResult.status === 'completed') {
            res.json(transcriptionResult.text)
         }else {
          res.status(400)   
        }
    }else{
      res.status(400)
    }
}

const recieveTranscript = async (req, res) => {
 
}

module.exports = { sendFile, recieveTranscript }