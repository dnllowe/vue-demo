'use strict'

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')

// MIDDLEWARE

// Needed to parse POST requests from HTML forms
app.use(bodyParser.urlencoded({extended: true}))

// Needed to parse POST requests from AJAX requests
app.use(bodyParser.json())

// Static routes
app.use(express.static(path.resolve(__dirname, '../public')))

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

// Only start server if main module
if (module === require.main) {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
  })
}

module.exports = { app }