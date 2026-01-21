import React from "react";

const AddBook = ({handleSubmit,handleChange,book}) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Add Book Data</h2>
            
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Book Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={handleChange}
                value={book.title || ''}
                placeholder="Enter book title"
              />
            </div>

            
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Book Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                onChange={handleChange}
                value={book.price || ''}
                name="price"
                placeholder="Enter book price"
                min={100}
                max={1000}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
