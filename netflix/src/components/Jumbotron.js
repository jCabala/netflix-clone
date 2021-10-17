import './styles/Jumbotron.css'

function Jumbotron({mainFilm}) {
    return (
      <div class="jumbotron" style={{ backgroundImage: `url(${mainFilm.img})` }}>
        <div class="jumbotron__info">
          <h1> {mainFilm.title} </h1>
          <p> {mainFilm.description} </p>
          <button class="light-button">Play</button>
        </div>
        <div class="jumbotron__age">{mainFilm.age}</div>
      </div>
    );
}

export default Jumbotron;