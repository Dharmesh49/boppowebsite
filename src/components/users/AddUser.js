/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import { axios } from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
  });
  const { name, username, email, phone, password, age } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/users', user);
    history.push('/');
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container">
        <div class="form-group">
          <div class="col">
            <label for="exampleInputtext">Frist Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="col">
            <label for="exampleInputtext1">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <label for="phone">Contact No</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          placeholder="Contact no"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />

        <label for="phone">Age</label>
        <input
          type="number"
          class="form-control"
          id="number"
          placeholder="number"
          name="age"
          value={age}
          onChange={(e) => onInputChange(e)}
        />
        <br />
        <button type="submit" class="btn btn-primary">
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUser;
