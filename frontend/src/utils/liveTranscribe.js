import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://rev-ai.p.rapidapi.com/jobs/%7Bid%7D/transcript',
  headers: {
    Accept: 'application/vnd.rev.transcript.v1.0+json',
    'X-RapidAPI-Key': 'e7875fce74msh8bd1229fa0692eep130535jsn515d1428b3ab',
    'X-RapidAPI-Host': 'rev-ai.p.rapidapi.com'
  }
};

export const fetchTranscript = async() => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}