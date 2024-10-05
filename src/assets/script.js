document.getElementById("searchButton").addEventListener("click", async () => {
    const movieName = document.getElementById("movieInput").value;

    if (!movieName) {
        alert("Por favor, insira o nome de um filme.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/movie/search?movie=${encodeURIComponent(movieName)}`);
        const data = await response.json();

        if (response.ok) {
            // Verifique os nomes das propriedades retornadas pela API
            document.getElementById("movieTitle").innerText = data.title || "Título não encontrado."; // "title" pode precisar ser alterado
            document.getElementById("moviePlot").innerText = data.plot || "Descrição não encontrada."; // "plot" pode precisar ser alterado
            document.getElementById("result").style.display = "block"; // Mostra o resultado
        } else {
            // Exibir mensagem de erro detalhada se disponível
            document.getElementById("movieTitle").innerText = "Filme não encontrado.";
            document.getElementById("moviePlot").innerText = response.message || ""; // Mensagem do erro retornado
            document.getElementById("result").style.display = "block"; // Mostra o resultado mesmo que seja um erro
        }
    } catch (error) {
        console.error("Erro ao buscar o filme:", error);
        document.getElementById("movieTitle").innerText = "Erro ao buscar o filme: " + error.message; // Mensagem de erro detalhada
        document.getElementById("moviePlot").innerText = "";
        document.getElementById("result").style.display = "block"; // Mostra o resultado mesmo que seja um erro
    }
});
