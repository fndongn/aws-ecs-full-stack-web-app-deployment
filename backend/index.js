const express = require('express')
const { v4: uuidv4 } = require('uuid')

const ID = uuidv4()
const app = express()
const PORT = 8080

app.use(express.json())

// CORS (safe behind ALB)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Preflight
app.options('*', (req, res) => res.sendStatus(200))

// Health check (for ALB)
app.get('/health', (req, res) => {
  res.sendStatus(200)
})

// API endpoint
app.get('/api', (req, res) => {
  res.json({ id: ID })
})

// DO NOT catch-all routes in backend
// app.get(/.*/, ...)

// Listen
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on ${PORT}`)
})
