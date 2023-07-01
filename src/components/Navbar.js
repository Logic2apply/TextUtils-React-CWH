import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";


export default function Navbar(props) {
    const navbarBG = () => {
        let mode = props.mode
        if (mode === 'dark-gray'){
            return "bg-dark"
        }
        else if (mode === "dark-blue"){
            return "bg-blue-900";
        }
        else if (mode === "dark-teal"){
            return "bg-teal-900";
        }
        else if (mode === "dark-brown"){
            return "bg-brown-900";
        }
        else {
            return "bg-light";
        }
    }

    return (
        // <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark-gray'? "dark": "light"} bg-${props.mode === 'dark-gray'? "dark": "light"}`}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light'? "light": "dark"} ${navbarBG()}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + "Assets/favicon/android-chrome-512x512.png"} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-3 rounded" />
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} navbar-nav me-4 mb-2 mb-lg-0`}>
                        {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Color Theme
                                </Link>
                                <ul className="dropdown-menu me-5">
                                    {/* LIGHT modes */}
                                    <li className="dropdown-item" onClick={() => props.toggleMode('light')}>
                                       {/* <img src={process.env.PUBLIC_URL + "/Assets/dark-blue.png"} alt="dark-blue" className="modeImages" /> */}
                                        <span className="modeName ms-2">Light Theme</span>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li> 

                                    {/* Dark Modes */}
                                    <li className="dropdown-item" onClick={() => props.toggleMode('dark-gray')}>
                                        <img src={process.env.PUBLIC_URL + "/Assets/dark-gray.png"} alt="dark-gray" className="modeImages" />
                                        <span className="modeName ms-2">Dark Gray</span>
                                    </li>
                                    <li className="dropdown-item" onClick={() => props.toggleMode('dark-blue')}>
                                        <img src={process.env.PUBLIC_URL + "/Assets/dark-blue.png"} alt="dark-blue" className="modeImages" />
                                        <span className="modeName ms-2">Dark Blue</span>
                                    </li>
                                    <li className="dropdown-item" onClick={() => props.toggleMode('dark-teal')}>
                                        <img src={process.env.PUBLIC_URL + "/Assets/dark-teal.png"} alt="dark-teal" className="modeImages" />
                                        <span className="modeName ms-2">Dark Teal</span>
                                    </li>
                                    <li className="dropdown-item" onClick={() => props.toggleMode('dark-brown')}>
                                        <img src={process.env.PUBLIC_URL + "/Assets/dark-brown.png"} alt="dark-brown" className="modeImages" />
                                        <span className="modeName ms-2">Dark Brown</span>
                                    </li>
                                </ul>
                            </li>
                        {/* </label> */}
                    </div>
                </div>
            </div>
        </nav>




    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};