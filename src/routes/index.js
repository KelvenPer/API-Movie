import express from "express";
import MovieController from "../controllers/movieController.js"; // Corrigido aqui

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("rota inicial"));
    
    // Middleware para o parsing do corpo das requisições como JSON
    app.use(express.json());
    
    // Rota para buscar informações de filmes
    app.get("/movie/search", MovieController.getMoviePlot);
};

export default routes;
