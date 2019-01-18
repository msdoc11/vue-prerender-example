const express = require('express')
const path = require('path')

const PORT = process.env.FRONTEND_PORT || 3333
const app = express()

app.use(express.json())

app.use('/', express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`))
})

app.listen(PORT)

console.log(`listening on port: ${PORT}`)
