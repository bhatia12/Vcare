import React  from "react";
import { Link } from "react-router-dom";

// import EventBus from "./common/EventBus";


const Nav = () => {
  const logout = () => {
    localStorage.removeItem("tokenID")
  }
  return( 
    <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <button onClick={logout}>
                <a href="/login" className="nav-link">
                  LogOut
                </a>
              </button>
            </li>
          </div>
        </nav>
     )
}

export default Nav

