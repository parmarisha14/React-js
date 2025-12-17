import React, { useState } from "react";
import { useEffect } from "react";

const Home = ({ list,handleBorrowedBook }) => {
  const [newBooks, setNewBooks] = useState([]);
  
  useEffect(() => {
    setNewBooks([...list.slice(0, 4)]);
  }, [list]);
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
            <img
              style={{ height: "80vh" }}
              src=" https://static.vecteezy.com/system/resources/thumbnails/045/697/776/small/many-books-on-a-shelf-in-a-library-photo.jpeg"
              className="d-block w-100 h-80"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "80vh" }}
              src="https://img.freepik.com/free-vector/flat-twitch-banner-template-world-teacher-s-day-celebration_23-2150736277.jpg?semt=ais_hybrid&w=740&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "80vh" }}
              src="https://img.freepik.com/free-photo/old-books-shelf-background-with-never-stop-dreaming-quote_53876-132278.jpg?semt=ais_hybrid&w=740&q=80"
              className="d-block w-100"
              alt="..."
            />
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
      <section className="new-books py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>New Book</h3>
            </div>
          </div>

          <div className="row">
            {newBooks.map((value) => {
              return (
                <div className="col-md-3" key={value.id}>
                  <div className="card">
                    <div className="position-relative">
                      <img
                        src={value.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="position-absolute top-0 end-0 mt-2 badge rounded-pill bg-success">
                       New
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p>{value.author}</p>
                      {
                        value.count > 0
                        ? 
                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={()=> handleBorrowedBook(value.id)}
                        >
                        Borrowed Book
                      </button>
                      :
                        <span className="py-2 px-3 bg-secondary rounded text-white">Out of Stock</span>
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
