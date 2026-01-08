import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

const Table = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Todo Item</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.length > 0 ? (
                    todos.map((val, index) => (
                      <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.text}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => dispatch(removeTodo(val.id))}
                            className="btn btn-outline-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center">
                        No todos available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
