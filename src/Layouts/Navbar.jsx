import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [responsiveNav, setresponsiveNav] = useState('collapse navbar-collapse');
    const [collapaseNavbar, setcollapaseNavbar] = useState('navbar-toggler collapsed');
    const handleResponsive = () => {
        responsiveNav === 'collapse navbar-collapse' ? setresponsiveNav('navbar-collapse collapse show') : setresponsiveNav('collapse navbar-collapse')
        responsiveNav === 'collapse navbar-collapse' ? setcollapaseNavbar('navbar-toggler') : setcollapaseNavbar('navbar-toggler collapsed');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <Link className="navbar-brand" to="#"><span className="fw-bolder text-primary">Web Dev Sweta</span></Link>
                <button className={collapaseNavbar} type="button" data-bs-toggle="collapse" onClick={handleResponsive} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className={responsiveNav} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar