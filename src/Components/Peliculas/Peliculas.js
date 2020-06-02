import React, {useEffect, useState, Fragment} from 'react';
import './Peliculas.css';

const Peliculas = () => {

  const [myState, setMystate] = useState([]);

  let randonId = Math.floor(Math.random() * 9999)
  
  useEffect(()=>{
    fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${randonId}`)
      .then((data)=>{
        return data.json()
      })
      .then((dataJSON)=>{
        setMystate(dataJSON)
      })
  },[])

  return ( 
    <Fragment>
      {
      myState.length !== 0

      ? myState.data.movies.map((pelicula) => {
        return (
          <div key={pelicula.id} className="pelicula">
            <img src={pelicula.medium_cover_image} alt="cover"/>
            <p className="pelicula__titulo">{pelicula.title}</p>
            <p className="pelicula__año">{pelicula.year}</p>
           
          </div>

        ) 
      })

      : null

    }
    </Fragment>
    

   );
}
 
export default Peliculas;