import express from 'express'

const app = express()
app.use(express.json())

let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Bruna", nota: 9 }
]

app.get("/alunos", (req, res) => {
    res.json(alunos)
})

app.listen(3333, ()=> {
    console.log("Servidor rodando em http://localhost:3333")
})
