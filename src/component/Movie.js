import React from 'react'

const IMGS = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) =>{
    if(vote >= 8){
        return 'green';
    }else if(vote >= 6){
        return 'orange';
    }else{
        return 'red';
    }
}

const Movie = ({title , poster_path , overview , vote_average}) => {
  return (
    <div className='movie'>
    <img src={poster_path? IMGS + poster_path : "https://kenandersonalliance.org/wp-content/uploads/2021/07/Movie-Night.jpg"} alt={title} />

        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default Movie