import "dotenv/config";  // Isso carrega as variáveis do .env

import express from "express";
import routes from "./src/routes/index.js";
import cors from 'cors';  // Adicionei CORS aqui

const PORT = 3000;

const app = express();

app.use(cors());  // Habilita CORS para todas as rotas
app.use(express.json());

routes(app);

app.listen(PORT, () => {
    console.log("servidor escutando na porta", PORT);
});
