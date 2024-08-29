import React from "react";
import styles from './navigation.module.scss';
const Header = (nav: any) => {
    return (
        <div className={styles.mainNavigation}>
            <div className="container">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={`/images/logo.png`} />
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-4 ">About Us</a></li>
                        <li><a href="#" className="nav-link px-4">Products</a></li>
                        <li><a href="#" className="nav-link px-4">Services</a></li>
                        <li><a href="#" className="nav-link px-4">Partners</a></li>
                        <li><a href="#" className="nav-link px-4">Gallery</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-light">Contact Us</button>
                    </div>
                </header>
            </div>
        </div>

    );
};

export default Header;
