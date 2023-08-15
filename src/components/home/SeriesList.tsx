import { useSelector } from "react-redux";
import "../home/Home.scss";
import "../../common/Common.scss";
import DummyImage from "../../assets/images/dummyImage.png";
import Shimmer from "../../common/Shimmer";

const SeriesList = () => {
  const allSeries = useSelector((state: any) => state.movies);
  const data = allSeries.seriesList.Search;

  const renderSlides = () => {
    return (
      <div className="card flex-c">
        {data &&
          data.length > 0 &&
          data.map((x: any, index: any) => (
            <div className="link-div" key={index}>
              {x.Poster === "N/A" ? (
                <img src={DummyImage} alt="poster" />
              ) : (
                <img src={x.Poster} alt="poster" />
              )}
              <div className="overlay"></div>
              <span>{x.Title}</span>
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      <div className="header">Top Series this week</div>
      {!allSeries.loadingS ? renderSlides() : <Shimmer />}
    </>
  );
};

export default SeriesList;
