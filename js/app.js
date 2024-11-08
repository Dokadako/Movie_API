const apiKey = 'e3d02c27276320b8f8cfeba1422853a9';
const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const sortOptions = document.getElementById('sort-options');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

// Search functionality with debounce
searchInput.addEventListener('input', debounce(() => {
  const query = searchInput.value;
  if (query.length > 0) {
    fetchMovies(query);
  } else {
    discoverMovies(); // If no query, load sorted results
  }
}, 300));

// Sort functionality
sortOptions.addEventListener('change', () => {
  const query = searchInput.value;
  discoverMovies();    // Use discover if no search query
});
// Text-based search using /search/movie
async function fetchMovies(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
  const data = await response.json();
  displayMovies(data.results);
}

// Sorting and filtering with /discover/movie
async function discoverMovies() {
  const sortBy = sortOptions.value;
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sortBy}`);
  searchInput.value = "";
  const data = await response.json();
  displayMovies(data.results);
}

function displayMovies(movies) {
  movieGrid.innerHTML = movies.map(movie => `
    <div class="movie-card" onclick="showMovieDetails(${movie.id})">
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
    </div>
  `).join('');
}

// Show movie details in a modal
function showMovieDetails(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`)
    .then(response => response.json())
    .then(movie => {
      modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p>Rating: ${movie.vote_average}</p>
        <p>Runtime: ${movie.runtime} mins</p>
        <p>Cast: ${movie.credits.cast.slice(0, 5).map(cast => cast.name).join(', ')}</p>
        <button onclick="addToWatchlist(${movie.id})">Add to Watchlist</button>
        <button onclick="closeModal()">Close</button>
      `;
      modal.classList.add('show'); // Add class to make the modal visible
    })
    .catch(error => console.error("Error fetching movie details:", error));
}

function closeModal() {
  modal.classList.remove('show'); // Remove the class to hide the modal
}

function addToWatchlist(movieId) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  if (!watchlist.includes(movieId)) {
    watchlist.push(movieId);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Added to watchlist');
  }
}

async function displayWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const movieDetails = await Promise.all(
    watchlist.map(async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      return await response.json();
    })
  );

  movieGrid.innerHTML = movieDetails.map(movie => `
    <div class="movie-card" onclick="showMovieDetails(${movie.id})">
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
    </div>
  `).join('');
}


function debounce(func, delay) {
  let debounceTimer;
  return function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
  };
}
