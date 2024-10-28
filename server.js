import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json()); // Middleware para parsear JSON

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            },
        });
        res.status(201).json(user); // Retorna o usuário criado
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o usuário' });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: parseInt(req.params.id), // Converte para número
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            },
        });
        res.status(200).json(user); // Retorna o usuário atualizado
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const filters = {};
        if (req.query.name) filters.name = req.query.name;
        if (req.query.email) filters.email = req.query.email;
        if (req.query.age) filters.age = parseInt(req.query.age);

        const users = await prisma.user.findMany({
            where: filters,
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: { 
                id: parseInt(req.params.id), // Converte para número
            },
        });
        res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/usuarios`);
});
