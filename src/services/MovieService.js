import { fetchMovie, fetchTranslation } from "../utils/apiConnect.js";

class MovieService {
    static async getMovieInfo(movieName) {
        // Fetch API para obter informações do filme
        const movie = await fetchMovie(movieName);
        console.log("Informações do filme recebidas:", movie); // Adicione este log para depuração
        return movie;
    }

    static async getTranslation(movieInfo) {
        // Verifica se movieInfo.plot existe antes de tentar traduzir
        if (!movieInfo || !movieInfo.plot) {
            throw new Error("Informações insuficientes para tradução.");
        }

        const translated = await fetchTranslation(movieInfo.plot);
        console.log("Descrição traduzida:", translated); // Adicione este log para depuração
        return translated;
    }
}

export default MovieService;
