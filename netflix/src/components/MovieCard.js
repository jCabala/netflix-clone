import "./styles/MovieCard.css"

function MovieCard({movie, num, disabled}) {
  
    return(
      <article class={`card ${!disabled ? "useful-card" : ""}`} style={{backgroundImage : `url(${movie.img})`, width: `calc(90vw / ${num})` }}>
        <div class="card__info">
          <button class="round-btn">
            P
          </button>
             <button class="round-btn">
            P
          </button>
        </div>
      </article>
    )
}

export default MovieCard;