import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Video from './components/video/Video';
import Rating from './components/rating/Rating';
import NotFound from './components/notfound/NotFound';


function App() {
  const[cricket, setcricket] = useState();
  const[cricketplayers, setcricketplayers] = useState();
  const[rating, setRating] = useState([]);

  const getcricketplayers = async () =>{

    try{

    const response = await api.get("/api/v1/cricket");
    setcricketplayers(response.data);

    } catch(err){console.log(err);}
  }

  const getCricketData = async (plID) => {
    try{
      const response = await api.get(`/api/v1/cricket/playerId/${plID}`);
      const singlePlayer = response.data;
      setcricket(singlePlayer);
      setRating(singlePlayer.rating);
    }catch(error){console.error(error);}
  }

  useEffect(() =>{
    getcricketplayers();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home cricketplayers={cricketplayers}/>}></Route>
          <Route path="/Video/:ytVideoId" element={<Video/>}></Route>
          <Route path="/Rating/:plID" element={<Rating getPlayerData={getCricketData} cricket={cricket} rating={rating} setRating={setRating} />}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
