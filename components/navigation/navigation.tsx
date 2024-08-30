import React from "react";
import styles from './navigation.module.scss';
import Link from "next/link";
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
                        <li><Link href="#about" className="nav-link px-4 ">About Us</Link></li>
                        <li><Link href="#product" className="nav-link px-4">Products</Link></li>
                        <li><Link href="#service" className="nav-link px-4">Services</Link></li>
                        <li><Link href="#partner" className="nav-link px-4">Partners</Link></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link href={`#contact`} className="btn btn-light text-black">Contact Us</Link>
                    </div>
                </header>
            </div>
        </div>

    );
};

export default Header;
