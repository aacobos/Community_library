import express from 'express'
const app = express()

app.use(express.json())

const users = []

// As três partes das rotas
// As rotas tem os seguintes Metodos => GET, POST, PUT/PATCH, DELETE
// A segunda parte da rota é o nome NAME => deve ser sempre no plural
// A terceira parte da rota são as funções Callback => Onde executamos o backend (lógica, regra de negócio)

app.post('/users', (req, res) => {
  console.log(req)
  const body = req.body
  users.push(body)
  res.status(201).send("Usuário criado com sucesso.")
});

app.get('/users', (req, res) => {
  res.send({users})
});

app.listen(3000, () => {console.log("Server is running on port 3000")})