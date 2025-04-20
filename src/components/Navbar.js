import React from 'react';
import { Link , Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">
  
  <img src="data:image/png;base64,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" 
  alt="" width="35" height="30" />
</Link>



     



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/men">Men</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link"  aria-current="page" to="/Women">Women</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Kids">Kids</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Beauty">Beauty</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Living">Living</Link>
              </li>
              <li className="icon mt-2 px-3" to='/cart'>
              <Link className="fas fa-shopping-bag" aria-current="page" to="/cart"></Link>

              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Navbar;
