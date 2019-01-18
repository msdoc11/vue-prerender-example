const express = require('express')
const cors = require('cors')

const PORT = process.env.BACKEND_PORT || 4201
const app = express()

app.use(cors())
app.use(express.json())
app.listen(PORT)

const db = {
  test1: {
    name: 'Test 1',
    description: 'This is the test 1 description'
  },
  test2: {
    name: 'Test 2',
    description: 'This is the test 2 description'
  },
  test3: {
    name: 'Test 3',
    description: 'This is the test 3 description'
  },
  test4: {
    name: 'Test 4',
    description: 'This is the test 4 description'
  },
  test5: {
    name: 'Test 5',
    description: 'This is the test 5 description'
  }
}

app.get('/companies', async(req, res) => {
  res.send({
    companies: Object.keys(db)
  })
})

app.get('/companies/:name', async(req, res) => {
  const company = req.params.name
  res.send(db[company])
})
