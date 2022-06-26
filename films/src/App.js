import movies from "./comps/movies";
import Movie from "./comps/Movie";
import Spidey from "./assets/Spider-Man.png";

const App = () => {

  return (
    <div>
      <div>
        <h1 className="spidey">
          <img src={Spidey} width="400px" height="auto" alt="Spider-Man" />
        </h1>
        <h1 className="spidey-title">spider-man's</h1>
        <p className="spidey-title-two">cinematic universe</p>
      </div>
      <section>
        <div className="movie-list">
          {movies.map((movie) => {
            return (
              <section>
                <Movie key={movie.id} {...movie}/>
              </section>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default App;
