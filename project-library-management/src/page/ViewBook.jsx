import React from "react";

const ViewBook = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">View Books</h3>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* data baad me add hoga */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBook;
