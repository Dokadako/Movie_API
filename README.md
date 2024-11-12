# Movies App

The **Movies App** is an engaging platform that empowers users to explore movies, dive into detailed information, manage a personal watchlist, and organize movies by popularity, release date, or rating. Powered by The Movie Database (TMDb) API, the app provides a seamless and informative movie browsing experience.

## Features

- **Search Movies:** Find movies effortlessly by typing the title into the search bar.
- **Sort Options:** Organize your movie list by choosing to sort by popularity, release date, or rating.
- **Movie Details:** Delve into specifics with a modal view that reveals a movie’s overview, rating, runtime, and main cast.
- **Watchlist:** Compile a personalized watchlist to revisit and enjoy movies at your convenience.
- **Debounce Search:** Enhances search performance by minimizing excess API calls during typing.

## Project Structure

- **HTML:**
  - `index.html` — The backbone layout of the application.
- **CSS:**
  - `css/styles.css` — Tailored styles for an appealing and responsive design.
- **JavaScript:**
  - `js/app.js` — The central script managing movie data fetching, sorting, and watchlist operations.

## Setup

### Prerequisites

- Secure an API key from TMDb to access and utilize the movie database.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/movies-app.git
   cd movies-app
   ```

2. **Configure your API key:**

   - Navigate to `js/app.js` and substitute the `apiKey` variable with your TMDb API key.

3. **Run the app:**

   - Open `index.html` in any web browser to start exploring movies.

## Usage

- **Search for Movies:** Input a movie title in the search bar to find what you’re looking for.
- **Sort Movies:** Select a sorting option from the dropdown to view movies organized by popularity, release date, or rating.
- **View Details:** Click on a movie card to examine detailed information displayed in a modal.
- **Add to Watchlist:** Save movies that catch your interest to the watchlist by clicking the "Watchlist" button, accessible anytime for later viewing.

## Code Overview

- **API Requests:** The app utilizes `/search/movie` for title-based searches and `/discover/movie` for sorting tasks.
- **Modal Display:** Presents movie details within a modal interface, complete with an easy-close button for swift navigation.
- **Local Storage:** Movies added to the watchlist are stored in the browser’s local storage, ensuring persistence between sessions.
- **Debounce Function:** Refines the search function by restricting the frequency of API calls during user input.

## Technologies Used

- **HTML:** Constructs the foundation of the app's interface.
- **CSS:** Supplies stylistic elements for layout, movie cards, and modals, enhancing aesthetics.
- **JavaScript:** Executes core functionalities including data retrieval, user interaction management, and local storage handling.

## Future Enhancements

- **Pagination:** Implement to efficiently handle and display larger numbers of movie results.
- **Advanced Filters:** Introduce capabilities to filter movies by genre, language, or region.
- **User Authentication:** Enable user logins to save watchlists in a database, ensuring personalized experiences across different devices.

Discover new favorites and keep track of must-see movies with the Movies App—a perfect companion for every movie enthusiast!
