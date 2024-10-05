import "dotenv/config"; // Carrega as variáveis do .env
import express from "express";
import cors from "cors"; // Importa o middleware CORS
import routes from "./src/routes/index.js"; // Importa as rotas
import path from "path"; // Importa o módulo path

const PORT = 8080; // Define a porta do servidor
const app = express(); // Cria uma instância do Express

// Middleware para habilitar CORS em todas as rotas
app.use(cors()); 

// Middleware para fazer o parsing do corpo das requisições como JSON
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(process.cwd(), 'public'))); // Corrigido para garantir que está apontando para a pasta correta

// Configura as rotas do aplicativo
routes(app);

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`); // Mensagem de confirmação no console
});
