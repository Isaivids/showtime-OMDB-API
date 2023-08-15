import './Common.scss'

const Shimmer = () => {
  return (
    <div className="loader">
      {[1, 2, 3, 4].map((e, index) => {
        return <div className="shimmer  shimmer_small_para" key={index}></div>;
      })}
    </div>
  );
};

export default Shimmer;
