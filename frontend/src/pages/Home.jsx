import MovieCard from "../components/MovieCard";
import {useState} from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Forrest Gump", release_date: "1994" },
    { id: 2, title: "Michael", release_date: "April 18, 2026" },
    { id: 3, title: "Scary Movie", release_date: "October 30, 2026" },
    { id: 4, title: "F1", release_date: "June 27, 2025" },
  ];

  const searchHandler = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={searchHandler} className="search-form">
        <input
          type="text"
          placeholder="Search for movies!"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>
    </div>
  );
}

export default Home;
