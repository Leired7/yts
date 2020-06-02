import React, {useEffect, useState, Fragment} from 'react';
import './Peliculas.scss';

const Peliculas = () => {

  const [myState, setMystate] = useState([]);

  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=4")
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
          <div className="pelicula">
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