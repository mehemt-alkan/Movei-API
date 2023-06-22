// script.js

document
  .getElementById("getMoviesButton")
  .addEventListener("click", async () => {
    const selectElement = document.getElementById("pageSelect");
    const selectedPage = selectElement.value;

    const url = `https://moviesdatabase.p.rapidapi.com/titles?page=${selectedPage}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2850edd4femsh4976b3d963e8e2ap10d250jsn00ebc7f0f59a",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const movies = result["results"];

    const moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = ""; // Clear previous movies

    movies.forEach((movie) => {
      const movietitle = movie.titleText["text"];
      var primaryImage = movie.primaryImage;
      var movieurl = "";
      if (primaryImage != null) {
        movieurl = movie.primaryImage["url"];
      } else {
        movieurl =
          "https://m.media-amazon.com/images/M/MV5BM2ZlYjA4NmItZTYxYy00MGFiLTg3MWUtNzZmYjE1ODZmMThjXkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg";
      }

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      const imageElement = document.createElement("img");
      imageElement.src = movieurl;
      movieElement.appendChild(imageElement);

      const titleElement = document.createElement("p");
      titleElement.textContent = movietitle;
      movieElement.appendChild(titleElement);

      moviesContainer.appendChild(movieElement);
    });
  });
