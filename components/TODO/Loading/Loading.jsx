import "./Loading.css";

const Loading = () => {
  return (
    <section className="content-loader">
      <div className="container-loading">
        <div className="folding">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
        <div className="texto">Cargando ...</div>
      </div>
    </section>
  );
};

export default Loading;
