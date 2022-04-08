const express = require('express')// requre the express framework
const app = express()
const Cars = require('db.json')

//get all cars
app.use(express.json())
app.get('/Cars', (req,res) => {
  res.status(200).json(Cars)
})

app.get('/Cars/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const Cars = Cars.find(Cars => Cars.id === id)
  res.status(200).json(Cars)
})

//add car
app.post('/Cars', (req,res) => {
  Cars.push(req.body)
  res.status(200).json(Cars)
})


//delete car
app.delete('/Cars/:id', (req,res) => {

  const id = parseInt(req.params.id)
  let Cars = Cars.find(Cars => Cars.id === id)
  Cars.splice(Cars.indexOf(Cars),1)
  res.status(200).json(Cars)
})


//Started Server 
app.listen(8080, () => {
  console.log('Serveur à l ecoute')
  })
