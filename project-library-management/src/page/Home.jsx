import React from "react";

const Home = (list) => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height:'80vh'}}src=" https://static.vecteezy.com/system/resources/thumbnails/045/697/776/small/many-books-on-a-shelf-in-a-library-photo.jpeg"className="d-block w-100 h-80" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:'80vh'}}src="https://img.freepik.com/free-vector/flat-twitch-banner-template-world-teacher-s-day-celebration_23-2150736277.jpg?semt=ais_hybrid&w=740&q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:'80vh'}} src="https://img.freepik.com/free-photo/old-books-shelf-background-with-never-stop-dreaming-quote_53876-132278.jpg?semt=ais_hybrid&w=740&q=80" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
