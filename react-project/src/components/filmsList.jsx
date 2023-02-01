import { useState, useEffect } from "react";
import "./filmListStyle.css"

function FilmsList (props) {
       let [list, SetList] = useState([]);


   function getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
          .then((response) => response.json())
          .then((films) => SetList(films))
          .catch((error) => console.error(error));
      }
  
      useEffect(() => {
        getFilms();
      }, []);
    
        return (
          <ul>
            {list.map((film) => {
              return <li key={film.id}>{film.title}</li>;
            })}
          </ul>
        );
    }


export default FilmsList;
    
  
      






 