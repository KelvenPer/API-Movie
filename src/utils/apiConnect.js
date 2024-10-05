import fetch from 'node-fetch';

export async function fetchMovie(movieName) {
    const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${encodeURIComponent(movieName)}&plot=full`;
    console.log("URL montada:", URL);
    
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`Falha ao buscar o filme: ${res.status}`);
        }
        const movieData = await res.json(); // Aguarda a resolução da Promise
        console.log("Dados do filme obtidos:", movieData); // Log dos dados do filme
        return movieData;
    } catch (error) {
        console.error("Erro na busca do filme:", error);
        throw new Error("Erro ao buscar filme: " + error.message); // Melhor tratamento de erro
    }
}

export async function fetchTranslation(moviePlot) {
    const URL = `http://localhost:5000/translate`;
    
    try {
        const res = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                q: moviePlot,
                source: "en",
                target: "pt",
                format: "text"
            }),
            headers: {"Content-Type": "application/json"}
        });
        
        if (!res.ok) {
            throw new Error(`Falha na tradução: ${res.status}`);
        }

        const translatedObj = await res.json(); // Aguarda a resolução da Promise
        console.log("Dados traduzidos obtidos:", translatedObj); // Log dos dados traduzidos
        return translatedObj;
    } catch (error) {
        console.error("Erro na tradução:", error);
        throw new Error("Erro na tradução: " + error.message); // Melhor tratamento de erro
    }
}
