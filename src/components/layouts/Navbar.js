/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" exact to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" exact to="/about">
                  Link
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" exact to="/contact">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-outline-light" exact to="/users/add">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
