const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.DB_URI || 3500
const multer = require('multer')
const upload = multer({dest: path.join(__dirname, '..', 'uploads')})

// const uploader = multer({
//     storage: multer.diskStorage({
//       destination: (_req, _file, cb) => cb(null, path.resolve(__dirname, './uploads/')),
//       filename: (_req, file, cb) => {
//         cb(null, file.fieldname);
//       },
//     }),
//   });

app.use(cors(corsOptions))

app.use(express.json())

app.use('/transcribe', upload.single('foo'), require('./routes/localFileTranscribe'))


// app.post('/upload', upload.single('foo'), 
//     (req, res) => {
//         console.log(req.file)
//         console.log(req.body)
//     }
// )

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))