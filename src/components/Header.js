import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='mb-3'>
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <a className="navbar-brand fw-light" href="/">#jobs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/list"} className="nav-link">Add Job</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header