import anselimg from "../../assets/ansel-main.JPG";

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <div className="flex text-3xl uppercase content-center">
          Hi, i'm Ansel
        </div>
        <img
          src={anselimg}
          alt="ansel's headshot"
          className="object-contain h-96"
        />
        <div className="text-xl uppercase mt-4 mh-24 text-center">
          <span style={{ color: "#ff577f" }}>Full stack web developer</span> -
          <span style={{ color: "#295939" }}> photographer</span> -
          <span style={{ color: "#e9b0df" }}> designer</span> -
          <span style={{ color: "#ff884b" }}> cyclist</span>
        </div>
        <p style={{ marginTop: 10 }}>
          <a href="/contact">Lets Work Together! </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
