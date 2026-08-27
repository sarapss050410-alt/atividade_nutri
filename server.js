const express = require("express")
const consultas = require("./servidor/dados.json")

const mostrarConsultas = (req, res) => {
    calcularIMC()
    res.send(consultas)
}

const novaConsulta = (req, res) => {
    if(req.body){
        res.send("Consulta recebida, em análise")
        consultas.push(req.body)
    }else{
        res.send("Erro ao receber consulta")
    }   
}

const calcularIMC = () => {
    consultas.forEach(c=>{
        c.imc = c.peso / (c.altura * c.altura)
    })
}

const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.post("/", novaConsulta)
app.get("/", mostrarConsultas)

app.listen(porta, () => { 
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})
