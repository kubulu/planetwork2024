import React from "react";
import styles from './heroImage.module.scss';
import Link from "next/link";
const HeroImage = (nav: any) => {
    return (
            <div className={styles.heroImage}>
                <div className={`container`}>
                    <div className={`row h-100 justify-content-center align-item-center`}>
                        <div className={`col-md-6`}>

                        </div>
                        <div className={`col-md-6`}>
                            <h2>Network Cabling, Security & Connectivity Solutions </h2>
                            <p>Structured Cabling Solutions for the Future of Your Business</p>
                            <Link href={`/`} className={`btn btn-light`}> Explore More </Link>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default HeroImage;
