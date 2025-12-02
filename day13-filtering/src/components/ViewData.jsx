import React from 'react'

function ViewData({ user, handleSearch, handleDelete, handleEdit }) {
    return (
        <>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by username or email"
                            onChange={handleSearch}
                        />
                    </form>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-10 border-dark p-4 shadow caption-top">

                    <table className='table table-bordered table-hover table-striped text-center caption-top'>
                        <caption>
                            <h2>User Data</h2>
                        </caption>

                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {user.length > 0 ? (
                                user.map((value, index) => {
                                    const { id, username, email, password } = value;
                                    return (
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{password}</td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    onClick={() => handleDelete(id)}
                                                >
                                                    Delete
                                                </button>{" "}

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary"
                                                    onClick={() => handleEdit(id)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={9} className="text-center">
                                        Data Not Found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default ViewData;
