import React from "react";
import styles from './servicesSection.module.scss';
import Link from "next/link";
const ServicesSection = (nav: any) => {
    return (
            <div className={styles.servicesSection}>
                <div className={`container`}>
                    <div className={`row justify-content-between`}>
                        <div className={`col-md-6`}>
                            <div className={styles.serviceContent}>
                                <h3>We offer cost-effective solutions designed to maximize your IT infrastructure that scale to your organization’s needs and structure.</h3>
                                <p>PlanetWork improves your organization’s performance by making you successful. Keeping up with the latest technologies and generating insights on your business needs allow us to design and deliver solutions that fit your immediate and long-term objectives.</p>
                                <Link href={`/`} className={`btn btn-light`}>Read more</Link>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.serviceContentCounter}>
                                <div className={styles.block}>
                                    <h2>10x</h2>
                                    <p>More Conversion </p>
                                </div>
                                <div className={styles.block}>
                                    <h2>10x</h2>
                                    <p>More Conversion </p>
                                </div>
                                <div className={styles.block}>
                                    <h2>10x</h2>
                                    <p>More Conversion </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ServicesSection;
