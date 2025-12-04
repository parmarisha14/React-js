import React from 'react';

const ViewUser = ({ currentItems, currentPage, totalPage, setCurrentPage }) => {
  return (
    <div className="container mt-4">
      <h3>View Users</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>   {/* Serial Number */}
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((val, index) => (
              <tr key={val.id}>
                {/* Show Serial Number = index + 1 */}
                <td>{index + 1}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination UI */}
      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-dark"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span className="px-3 py-2 border rounded">
          {currentPage} / {totalPage}
        </span>

        <button
          className="btn btn-dark"
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
