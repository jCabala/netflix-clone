import React  from 'react';
import { useState, useEffect, useRef} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Slider from './components/Slider';
import moviesGenerator from './moviesGenerator';

function fetchFilm() {
  const film = {
    title: "Upadek Królestwa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum diam, accumsan at orci nec, mollis fermentum libero.",
    img:
      "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQTos1O33BQ2m2zE1W9DxW_FBIUl4of4WSQCgdLrd5BItxfo-ouA0sYrXX23t0CcrqFa8yU1GQ2MDhDgUDHzWWF4Rh0R.webp?r=956",
    age: "16+"
  };

  return film;
}

function fetchFilm2() {
  const film = {
    title: "Upadek Królestwa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum diam, accumsan at orci nec, mollis fermentum libero.",
    img:
      "https://occ-0-3563-2706.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABRf6hHw8FCntgCZ9AqiBsuRLT2kVUDziETID4MHzvgfQjEPfeyuBKYdwidFQRRVMOiUScPvK-Mh1iUQvxjCADECRtR6-Ny47xvzIsiM2w29balJtxpGxhsqmBJnp.jpg?r=80f",
    age: "16+"
  };

  return film;
}

function App(){
  const movie = fetchFilm();
  const movie2 = fetchFilm2();
  const movies = [movie, movie2, movie2, movie, movie, movie, movie2, movie,  movie2, movie,  movie2, movie];


  const [children, setChildren] = useState([]);
  const generator = moviesGenerator();

  function loadMore(){ 
    if(window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight){
      const newElement = generator.next().value;
      if(newElement !== undefined){
        const newChildren = [...children];
        newChildren.push({id : newElement, movies});
        setChildren(newChildren);
      }
      
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', loadMore);
    return () => {
      window.removeEventListener('scroll', loadMore);
    };
  }, []);

  return (
    <div class="app" >
      <Navbar />
      <Jumbotron mainFilm = {movie} />
      <div class="sliders">
      {children.map(e => <Slider movies={e.movies} id={e.id} />)}
      </div>
      
    </div>
  );
}


export default App;