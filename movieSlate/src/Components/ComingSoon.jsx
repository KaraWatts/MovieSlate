import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import default_poster from "../assets/default_poster.jpeg";
import { nowPlayingURL } from "./TMDB";
import axios from "axios";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function ComingSoon() {
  const [banners, setBanners] = useState([]);
  const getBanners = async () => {
    const banResponse = await axios.get(nowPlayingURL);
    const bannerData = banResponse.data;
    console.log("DATA", bannerData.results);
    setBanners(bannerData.results);
  };

  useEffect(() => {
    getBanners();
  }, []);
  return (
    <Carousel>
      {banners.map((film, index) => (
        <Carousel.Item key={index} interval={10000}>
          <img
            style={{ width: "100%" }}
            src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}
          />
          <Carousel.Caption>
            <h2>{film.title}</h2>
            <p>Now Playing</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default ComingSoon;
