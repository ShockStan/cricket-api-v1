import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Video.css';

import React from 'react';

const Video = () => {
        let params = useParams();
        let key = params.ytVideoId;

    return (
        <div className="react-player-container">
            {(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://youtube.com/watch?v=${key}`}
            width = '100%' height='100%' />:null}
        </div>
    )
}

export default Video;