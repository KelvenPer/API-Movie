import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/helpers.js";

class MovieController {
    static async getMoviePlot(req, res) {
        const movieName = req.query.movie;
        console.log("Nome do filme solicitado:", movieName);  // Log do nome do filme

        if (!movieName) {
            return res.status(400).json({ message: "Por favor, forneça um nome de filme." });
        }

        try {
            // Obtém informações do filme
            const moviePlot = await MovieService.getMovieInfo(movieName);
            // Verifica se o filme foi encontrado
            if (!moviePlot || !moviePlot.Title) {
                return res.status(404).json({ message: "Filme não encontrado." });
            }

            // Formata a resposta
            const response = formatMovieObject(moviePlot);
            console.log("Dados do filme formatados:", response);  // Log dos dados formatados

            // Se você tem uma função de tradução, chame-a aqui
            const translatedPlot = await MovieService.getTranslation(response);
            console.log("Descrição traduzida:", translatedPlot);  // Log da descrição traduzida

            // Envia a resposta final
            res.status(200).json(translatedPlot);
        } catch (error) {
            console.error("Erro no Controller:", error);
            res.status(500).json({ message: error.message });
        }
    }
}

export default MovieController;
