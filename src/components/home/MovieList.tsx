import { useSelector } from "react-redux";
import "../home/Home.scss";
import "../../common/Common.scss";
import DummyImage from "../../assets/images/dummyImage.png";
import Shimmer from "../../common/Shimmer";
import { Link } from "react-router-dom";
const MovieList = () => {
  const allMovies = useSelector((state: any) => state.movies);
  const data = allMovies.movieList.Search;
  const renderSlides = () => {
    return (
      <div className="card flex-c">
        {data &&
          data.length > 0 &&
          data.map((x: any, index: any) => (
            <Link className="link-div" to={`/detail/${x.imdbID}`} key={index}>
              {x.Poster === "N/A" ? (
                <img src={DummyImage} alt="poster" />
              ) : (
                <img src={x.Poster} alt="poster" />
              )}
              <div className="overlay"></div>
              <span>{x.Title}</span>
            </Link>
          ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex-b">
        <div className="header">Top movies this week</div>
      </div>
      {!allMovies.loading ? renderSlides() : <Shimmer />}
    </>
  );
};

export default MovieList;
