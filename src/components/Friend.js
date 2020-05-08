import React from 'react'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'
function Friend({season, episode, quote,character,yt_code,url}){
    // console.log(url)
    return(<div>
        <h2>{season}</h2>
        <h2>{episode}</h2>
        <p>{quote}</p>
        <p>{character}</p>
        {/* <YouTube videoId={yt_code}  /> */}
        <ReactPlayer url={url}  />
    </div>)
}

  
export default Friend