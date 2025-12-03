import React from "react";

const ViewUser = ({
  currentItems,
  currentPage,
  totalPage,
  setCurrentPage
}) => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">User Data</h3>

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {currentItems && currentItems.length > 0 ? (
                currentItems.map((val, idx) => (
                  <tr key={idx}>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-muted p-3">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        
        <nav className="d-flex justify-content-center mt-3">
          <ul className="pagination">

           
            {currentPage > 1 && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
              </li>
            )}

            
            {[...Array(totalPage)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

           
            {currentPage < totalPage && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ViewUser;
