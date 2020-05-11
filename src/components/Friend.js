import React from 'react'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'
import poster from './poster.png'; 
function Friend({season, episode, quote,character,yt_code,url}){
    // console.log(url)
    return(
    <section className="content">
        <div className='wrapper'>    
        <div className="content__header">
            <h4>{quote}</h4>
            <h5>{character}</h5>  
        </div>
        {/* <img style={{width: '694px', height: '393px'}}src={poster} alt="hihi" /> */}
        <ReactPlayer className="content__video" url={url} width='694px' height='393px' />
        </div> 
    </section>
        // <h2>{season}</h2>
        // <h2>{episode}</h2>
        
    )
}

  
export default Friend