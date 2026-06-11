function MovieCard({ movie }) {

  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-poster">
      <img src={movie.url} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          dis a button
        </button>
      </div>
    </div>
  );
}
