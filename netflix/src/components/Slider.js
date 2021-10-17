import './styles/Slider.css'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

//@TODO removeevent listenerafter unmount
//@TODO last and first element's transitionof origin
//@TODO manipulation of heights
//@TODO responsiveness of slider after

function Slider({movies, id}){
    const [sectionWidth, setSectionWidth] = useState(3);
    const [current, setCurrent] = useState(0);
    const [nextSection, setNext] = useState(1);

    function resizeSections(width) {
      const num = width >= 1000 ? 6 : (width >= 700 ? 4 : (width >= 400 ? 3 : 2));
      if(sectionWidth != num) setSectionWidth(num);
    }
  
    function calcNext(){
      const nextCurrent = current + sectionWidth;
      return nextCurrent >= movies.length ? 0 : nextCurrent; 
    }

    useEffect(() => {
      window.addEventListener('resize', () => resizeSections(window.innerWidth));
      resizeSections(window.innerWidth);
    }, []);

    function handleClick(){
      const nextCurrent = current + sectionWidth;

      document.querySelector(`#${id}`).style.right = `calc(95vw - 1rem)`;
      document.querySelector(`#${id}`).style.transitionDuration = `1s`;
      setTimeout(() => {
        document.querySelector(`#${id}`).style.transitionDuration = `0s`;
        document.querySelector(`#${id}`).style.right = `0`;

        nextCurrent >= movies.length ? setCurrent(0) : setCurrent(nextCurrent); 
      }, 1000); 
    }

    return(
    <div class="slider-container">
      <h2 class="slider-title">{id.split('-').join(" ")}</h2>
      <div class="slider-wrapper" id={id}>
        <div class="slider">
          {
              movies.slice(current, Math.min(current + sectionWidth, movies.length)).map( e => {
                 return <MovieCard num={sectionWidth} movie={e} disabled={false} />
              })
          }
          <button class="arrow" onClick = {handleClick} style={{height: `calc(90vw / ${sectionWidth} * 5 / 8)`}}> {'>'} </button>
        </div>
        
        <div class="slider-after">
          {
            movies.slice(calcNext(), Math.min(calcNext() + sectionWidth, movies.length)).map( e => {
              return <MovieCard num={sectionWidth} movie={e} disabled={true} />
           })
       }
          
        </div>
      </div>
    </div>
    )
}

export default Slider;