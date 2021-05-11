import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

//app을 mount하면 isLoading은 기본적으로 true이다.

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  // componentDidMount에서 data를 fetch(=불러온다.) 
  // API로 부터 data fetching이 완료되면 movie를 Render하고 map을 만들고 movie를 render한다.

  getMovies = async () => { //비동기 함수, 접근이 끝날 때까지 기다리도록 한다.
    const { data: { data: { movies } } }
      = await axios.get(" https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //axios가 끝날 때까지 기다렸다가 계속해
    //this.setState({movies: movies}); 왼쪽은 state에 있고 오른쪽은 axios에 있는 data이다. 이렇게 양쪽이 같은 경우에는 생략이 가능하다.
    this.setState({ movies, isLoading: false })
  }

  async componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image} />
        })}
      </div>
    );
  }
}

export default App;



