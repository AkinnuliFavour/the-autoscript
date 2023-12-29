const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.DB_URI || 3500
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// const upload = multer({ storage })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '.uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

app.use(cors(corsOptions))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://the-autoscript-frontend.vercel.app"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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