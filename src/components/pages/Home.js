import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpdateUser from '../users/UpdateUser';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3001/users');
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete('http://localhost:3001/users/$(id)');
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr No </th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link class="btn btn-primary" to={'/users/${user.id}'}>
                    View
                  </Link>
                  <Link class="btn btn-dark" to={'/users/update/${user.id}'}>
                    Update
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
