const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize ('API_FARMACIA', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

const Contatos = Sequelize.afterDefine('Contato', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const port = 3000;

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.get('/contato', async(req,res)=> {
    const contato = await Contatos.findAll();
    res.json(contato);
});

app.post ('/contato', async(req,res)=>{
    try{
        const {nome,email,telefone,mensagem} = req.body;
        const novoContato = await Contatos.create({nome,email,telefone,mensagem});
        res.status(201).json(novoContato);
    }catch (error) {
        res.status(400).json({ Mensagem: "Contato já cadastrado"})
    }
})

sequelize.sync().then(() => {
    app.listen(port, () => {
    console.log(` API rodando em http://localhost:${port}`);
    console.log(' Conectado ao banco de dados MySQL.');
});}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');});