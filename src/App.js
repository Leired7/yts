import React, { useState, useEffect } from 'react';
import MyContext from './context';
import './app.css';

function App() {

  const [myState, setMystate] = useState([]);

  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((data)=>{
        return data.json()
      })
      .then((dataJSON)=>{
        setMystate(dataJSON)
      })
  },[])

  const state = {myState, setMystate}

  return (
    <MyContext.Provider value={myState}>
      <header>
        <div>
          <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="logo-yts" />
          <p>HD movies at the smallest file size</p>
        </div>

        <div>
          <input  />
          <ul>
            <li>Home</li>
            <li>4K</li>
            <li>Browse Movies</li>
          </ul>
        </div>
      </header>
    </MyContext.Provider>
  );
}

export default App;
