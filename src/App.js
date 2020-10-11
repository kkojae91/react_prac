import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
    state ={
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies)
        // 위의 코드를 아래의 코드처럼 사용할 수 있다 es6 버전
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        // console.log(movies);
        // this.setState({movies:movies, isLoading:false})
        // 위의 코드를 아래의 코드처럼 쓸 수 있다 es6
        this.setState({ movies, isLoading: false })
    }

    // componentDidMount() rendering 된 후 실행 되는 코드
    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return(
            <div id="potato">
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text"><strong>Loading...</strong></span>
                    </div>
                ) :(
                    <div className="movies">
                        {movies.map(movie =>(
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
            </div>
        );
    }
}

export default App;