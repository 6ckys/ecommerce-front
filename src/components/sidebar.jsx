import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="page-sidebar">
      {/* START X-NAVIGATION */}
      <ul className="x-navigation">
        <li className="xn-logo">
          <a href="index.html">Joli Admin</a>
          <a href="#" className="x-navigation-control" />
        </li>
        <li className="xn-profile">
          <a href="#" className="profile-mini">
            <img src="assets/images/users/avatar.jpg" alt="John Doe" />
          </a>
          <div className="profile">
            <div className="profile-image">
              <img src="assets/images/users/avatar.jpg" alt="John Doe" />
            </div>
            <div className="profile-data">
              <div className="profile-data-name">John Doe</div>
              <div className="profile-data-title">Web Developer/Designer</div>
            </div>
            <div className="profile-controls">
              <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
              <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
            </div>
          </div>                                                                        
        </li>
        <li className="xn-title">Navigation</li>
        <li className="active">
          <a href="index.html"><span className="fa fa-desktop" /> <span className="xn-text">Dashboard</span></a>                        
        </li>
        <li className="xn-title">
            <div class="dropdown">
              <button

                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="/createcategories" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add Category</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="/listcategories" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List Category</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        <li className="xn-title">
            <div class="dropdown">
              <button

                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subcategory
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="/createsubcategories" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add Subcategory</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="/listsubcategories" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List Subcategory</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="xn-title">
            <div class="dropdown">
              <button

                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add Products</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List Products</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
      </ul>
      {/* END X-NAVIGATION */}
    </div>
  )
}

export default Sidebar