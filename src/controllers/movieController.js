import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/helpers.js";

class MovieContoller {
    static async getMoviePlot(req, res) {
        const movieName = req.query.movie;
        console.log("Nome do filme solicitado:", movieName);  // Log do nome do filme
        try {
            const moviePlot = await MovieService.getMovieInfo(movieName);
            const response = formatMovieObject(moviePlot)
            const translatedPlot = await MovieService.getTranslation(response)
            console.log("Dados do filme:", moviePlot);  // Log dos dados retornados
            res.status(200).json(translatedPlot);
        } catch (error) {
            console.error("Erro no Controller:", error);
            res.status(500).json({ message: error.message });
        }
    }
}

export default MovieContoller;
