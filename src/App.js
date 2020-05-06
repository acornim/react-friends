import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import Moive from "./components/Movie"

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
    return <div>
      <h4>{isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie)
        return <Moive 
          key={movie.id} 
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} />
      })}
      </h4>
      
    </div>
  }
}

export default App;
