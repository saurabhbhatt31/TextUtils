import React from 'react';
// import { a } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>
            <nav className= {`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div>
                            <li className="nav-item">
                            <a className="navbar-brand" href="#">Home</a>
                            </li>
                            </div>

                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle navbar-brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-a disabled">Disabled</a> */}
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode=== 'dark'?'Enable Light Mode':'Enable Dark Mode'}</label>
                        </div>
                            
                    </div>

                </div>
            </nav>
        </>
    )
}