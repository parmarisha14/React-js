import React from "react";
import "./Card.css";
function Cards() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">This is a simple card example.</p>
              <button>Read More</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Cards;