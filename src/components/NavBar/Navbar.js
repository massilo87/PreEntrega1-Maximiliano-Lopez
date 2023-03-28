import './NavBar.css';
import React from 'react'
import logoBrand from './assets/logo9.png'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="brandLogo"><img src={logoBrand} alt="logo-brand" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Lulu Impresiones 3D</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Tags para mascotas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lámparas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Macetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Letras Corporeas</a>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
