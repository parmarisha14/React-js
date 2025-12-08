import React from "react";

function Page({ employee, handleChange, handleSubmit }) {
  return (
    <div className="Container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1>Add Employee Data</h1>

            <div className="form-group mb-3">
              <label htmlFor="ename">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="ename"
                name="ename"
                onChange={handleChange}
                value={employee.ename || ""}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={employee.email || ""}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                onChange={handleChange}
                value={employee.department || ""}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                className="form-control"
                id="salary"
                name="salary"
                onChange={handleChange}
                value={employee.salary || ""}
                mim="3000"
              
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
}

export default Page;
