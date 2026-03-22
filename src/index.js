require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.APP_PORT || 3000
const HOST = process.env.APP_HOST || "0.0.0.0"

app.get('/health', (req, res) => {
    res.send("Service is healthy")
})

app.listen(PORT, HOST, () => console.log(`Service running on ${HOST}:${PORT}`))

