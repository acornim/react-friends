import React from 'react';
import axios from 'axios'
import Moive from "./components/Movie"

import "./App.css"
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
       data: { 
         data: { movies } 
        } 
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies) // movies.data.data.movies -> es6
    this.setState({movies, isLoading:false}) // movies (from state) : movies (from axios)

  }
  componentDidMount() {
    this.getMovies()
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    //   }, 6000);
  }
  render() {
    const { isLoading, movies } = this.state;
    return (<section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>

        </div>) : (<div className="movies">
        {movies.map(movie => (
        // console.log(movie)
        <Moive 
          key={movie.id} 
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          trailer={movie.yt_trailer_code}
          genres={movie.genres} />
      ))}
        </div>)}
    </section>
    )
  }
}

export default App;
