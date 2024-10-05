import fetch from 'node-fetch';

export async function fetchMovie(movieName) {
    const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${encodeURIComponent(movieName)}&plot=full`;
    console.log("URL montada:", URL);
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`falha: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function fetchTranslation(moviePlot) {
    const URL = `http://localhost:5000/translate`;
    const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            q: moviePlot,
            source: "en",
            target: "pt",
            format: "text"
        }), 
        headers: {"Content-type": "application/json"}
    })
    const translatedObj = await res.json();
    return translatedObj
}
