import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="columns is-centered">
        <div className="column is-12-mobile is-10-tablet is-8-desktop">
          <div className="mb-3 has-text-centered">
            <Link to="/add" className="button is-success">
              Add New
            </Link>
          </div>
          <div className="table-container">
            <table className="table is-striped is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td className="is-flex is-justify-content-start is-align-items-center">
                      <Link
                        to={`/edit/${user._id}`}
                        className="button is-info is-small mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="button is-danger is-small"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
