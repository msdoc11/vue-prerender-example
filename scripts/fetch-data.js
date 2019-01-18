const fs = require('fs')
const axios = require('axios')

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:4201/companies')
  const { companies } = data
  const routes = companies.map(company => `/companies/${company}`)
  const jsonString = JSON.stringify(routes, null, 2)
  fs.writeFileSync('./data/index.json', jsonString, 'utf-8')
}

fetchData()
