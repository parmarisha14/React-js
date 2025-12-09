import React from "react";

const Page = ({ employee, handleSubmit, handleChange,editId }) => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ width: "450px" }}>

        <h3 className="text-center mb-4 fw-bold">Add Employee Data</h3>

        <form onSubmit={handleSubmit}>

          
          <div className="mb-3">
            <label className="form-label">Employee Name</label>
            <input
              type="text"
              className="form-control"
              name="ename"
              onChange={handleChange}
              value={employee.ename || ""}
              placeholder="Enter employee name"
            />
          </div>

          
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={employee.email || ""}
              placeholder="Enter email"
            />
          </div>

      
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              onChange={handleChange}
              value={employee.department || ""}
              placeholder="Enter department"
            />
          </div>

          {/* Salary */}
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              onChange={handleChange}
              value={employee.salary || ""}
              placeholder="Enter salary"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {editId ? "Update" : "Submit"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Page;
