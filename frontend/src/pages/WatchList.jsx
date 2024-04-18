import { Table, Image, Carousel } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";


export default function WatchList() {
  const { rankings, setRankings } = useOutletContext();
  console.log(rankings);
  return (
    <>
      <Carousel>
        {rankings.map((film) => (
          <Carousel.Item key={film.id} interval={10000}>
            <div
              className="towatch"
            >
              <div className="overview">
                <h3>Movie Overview</h3>
                <p>{film.description}</p>
              </div>
              <img
                style={{ width: "75%" }}
                src={`https://image.tmdb.org/t/p/original/${film.banner}`}
              />
            </div>
            <Carousel.Caption>
              <h2>{film.title}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Table hover>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Average Rating</th>
            <th>Release Year</th>
            <th>Watched</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((film) => (
            <tr key={film.key}>
              <td>
                <Image style={{ height: "100px" }} src={film.poster} fluid />{" "}
              </td>
              <td>{film.title}</td>
              <td>{film.rating}</td>
              <td>{film.release}</td>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    setRankings(
                      rankings.filter((movie) => movie.id !== film.id)
                    )
                  }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
