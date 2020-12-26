import React from 'react';

import {Link} from "react-router-dom";

function index() {
    return (
        <div>
             <nav>
          <ul className="">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default index
