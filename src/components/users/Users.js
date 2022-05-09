/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
  });
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3001/users/$(id)');
    setUser(result.data);
  };

  return (
    <div className="container">
      <Link className="btn btn-primary" to="/">
        Back toHome
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">username: {user.username}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">password: {user.password}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
      </ul>
    </div>
  );
};

export default Users;
