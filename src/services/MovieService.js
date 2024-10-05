
import {fetchMovie,fetchTranslation} from "../utils/apiConnect.js";

class MovieService {
    static async getMovieInfo (movieName) {
        //fetch API
        const movie = await fetchMovie(movieName);
        return movie
    }
    static async getTranslation(movieInfo) {
        const translated = await fetchTranslation(movieInfo.plot)
        
        return translated
    }
}

export default MovieService