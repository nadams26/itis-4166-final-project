import React from 'react';

import {
  Link
} from "react-router-dom";

function Navigationmenu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
  );
}

export default Navigationmenu;