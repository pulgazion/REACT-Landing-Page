import React from "react";

export const Navbar = (props) => {

    return (
        <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" style={{ color: "white" }} href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" style={{ color: "white" }} href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
