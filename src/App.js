import React, { useState, useEffect } from 'react';
import MyContext from './context';
import './app.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';


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
      <Header />
      <Body />
    </MyContext.Provider>
  );
}

export default App;
