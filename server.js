const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const firebase = require('firebase')
require('dotenv').config()

firebase.initializeApp({
  databaseURL: process.env.DB_HOST,
  serviceAccount: process.env.SERVICE_ACCOUNT, //this is file that I downloaded from Firebase Console
})
db = firebase.database()

const portNum = 3000
const app = express()
app.listen(portNum, () => {
  console.log('listen on  ', portNum)
})

app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, HEAD, OPTIONS, POST, PUT, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  )
  next()
})

app.get('/api/tutor/:tutorId', async (req, res) => {
  const { tutorId } = req.params
  const tutorsSnapshot = await db.ref(`/tutors/${tutorId}`).once('value')
  res.send(tutorsSnapshot.val())
})

app.post('/api/tutors/new', (req, res) => {
  const { name, age, topics, description, mail, phone, tutorId } = req.body
  db
    .ref(`/tutors/${tutorId}`)
    .push({ name, age, topics, description, mail, phone }, error => {
      if (error) {
        res.sendStatus(501)
      } else {
        res.sendStatus(201)
      }
    })
})
