import { useState } from "react";

const Movie = ({ img, title, director, time, budget, gross, desc }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="movie">
              <div>
                  <img src={img} alt="SpiderMan movies" />
              </div>
              <div>
                  <h1 className="title">{title}</h1>
              </div>
              <div>
                  <p><strong>Director: </strong>{director}</p>
              </div>
              <div>
                  <p><strong>Time: </strong>{time}</p>
              </div>
              <div>
                  <p><strong>Budget: </strong>{budget}</p>
              </div>
              <div>
                  <p><strong>Gross: </strong>{gross}</p>
              </div>
              <div>
                  <p>
                  <strong>Description: </strong>
                    {readMore ? desc : `${desc.substring(0, 90)}...`}&nbsp;&nbsp;
                    <button className="btn" onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : "read more"}</button>
                  </p>
              </div>
          </article>
    )
}

export default Movie;