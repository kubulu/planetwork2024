import React from "react";
import styles from './servicesSectionThree.module.scss';
import Slider from "react-slick";
import Link from "next/link";
const ServicesSectionThree = (nav: any) => {

    return (
            <div id={`service`} className={styles.servicesSection}>
                <div className={`container`}>
                    <div className={`row justify-content-between align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.serviceContent}>
                                <h3>Services</h3>
                                <p>PlanetWork improves your organization’s performance by making you successful. Keeping up with the latest technologies and generating insights on your business needs allow us to design and deliver solutions that fit your immediate and long-term objectives.</p>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <img src={`/images/solution-1.png`} width={`100%`} />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ServicesSectionThree;
