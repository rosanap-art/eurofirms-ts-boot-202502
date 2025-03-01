import express from 'express'
import { SystemError } from './errors'
import logic from './logic'

const api = express()

const jsonBodyExpress = express.json()

api.get('/', (req, res) => {
  res.send('Hello, API!')
})

api.post("/users", jsonBodyExpress, (req, res) => {
  try {
    const { name, email, username, password } = req.body

    logic.registerUser(name, email, username, password)

    res.status(201).send()

  } catch (error) {
    res.status(500).json({ error: SystemError.name, message: error.message })
  }
})

api.listen(8080, () => console.log('API is up'))

