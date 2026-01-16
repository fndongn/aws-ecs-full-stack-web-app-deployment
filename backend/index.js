const express = require('express')
const { v4: uuidv4 } = require('uuid');
const { CORS_ORIGIN } = require('./config')

const ID = uuidv4()
const app = express()
const PORT = 8080

app.use(express.json())

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next();
})

// Preflight handler 
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// Routes
app.get(/.*/, (req, res) => {
  res.json({ id: ID })
})

// Listen on all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on ${PORT}`)
})
