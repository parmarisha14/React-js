import React from "react";

const AddBook = ({book,handleChange,handleSubmit}) => {
  return (
    <div className="container">
      <div className="row  justify-content-center mx-auto mt-5 ">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                 Book Image:
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={book.image || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                 Book Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={book.title || ""}
                onChange={handleChange}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="author" className="form-label">
                 Author:
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={book.author || ""}
                onChange={handleChange}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="category" className="form-label">
                 Category:
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={book.category || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
