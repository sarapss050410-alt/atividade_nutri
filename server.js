const express = require("express")
const pedidos = require("../dados.json")

const mostrarConsulta = (req, res) => {
    res.send(consulta)
}

const novoPaciente = (req, res) => {
    if(req.body){
        res.send("Paciente em Analise")
        pedidos.push(req.body)
    }else{
        res.send("Erro ao cadastrar novo Paciente")
    }   
}

const calcularPeso=() => {
    pedidos.forEach(p=>{
        p.subTotal = peso / (altura * altura)
    })
}
const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.post("/", novoPaciente)
app.get("/", mostraPacientes)

app.listen(porta, () => { 
    console.log(`Paciente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})