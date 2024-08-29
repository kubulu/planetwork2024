import React from "react";
import styles from './innerContentPanel.module.scss';
import Link from "next/link";
const InnerContentPanel = (nav: any) => {
    return (
        <div className={styles.innerContent}>
            <nav id="navbar-example2" className="navbar px-3 mb-3">
                <ul className="nav nav-pills sticky-top">
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll1">Outdoor display </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll2">Parking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll3">Shop windows display  </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll4">Wayfinding</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll5">Display Wall</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scroll6"> Front Display</a>
                    </li>

                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                 data-bs-smooth-scroll="true" className="scrollspy-example  p-3 rounded-2" tabIndex="0">
                <div id="scroll1">
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-md-4`}>
                                <h3>Outdoor display</h3>
                                <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={styles.imgBlock}>
                                    <img src={`/images/parking.png`} />
                                </div>
                            </div>
                        </div>
                </div>

                <div id="scroll2">
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.imgBlock}>
                                <img src={`/images/parking.png`} />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <h3>Parking</h3>
                            <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                        </div>

                    </div>
                </div>

                <div id="scroll3">
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-4`}>
                            <h3>Parking</h3>
                            <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.imgBlock}>
                                <img src={`/images/parking.png`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="scroll4">
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.imgBlock}>
                                <img src={`/images/parking.png`} />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <h3>Parking</h3>
                            <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                        </div>

                    </div>
                </div>

                <div id="scroll5">
                    <div className={`row justify-content-center align-items-center`}>

                        <div className={`col-md-4`}>
                            <h3>Parking</h3>
                            <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                        </div>

                        <div className={`col-md-6`}>
                            <div className={styles.imgBlock}>
                                <img src={`/images/parking.png`} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default InnerContentPanel;
