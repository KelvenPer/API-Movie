import express from "express";
import MovieContoller from "../controllers/movieController.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("rota inicial"));
    app.use(express.json());
    app.get("/movie/search", MovieContoller.getMoviePlot)
}

export default routes;