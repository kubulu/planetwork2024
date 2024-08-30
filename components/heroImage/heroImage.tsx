import React from "react";
import styles from './heroImage.module.scss';
import Link from "next/link";
const HeroImage = (nav: any) => {
    return (
            <div className={styles.heroImage}>
                <video className={styles.video} autoPlay muted loop>
                    <source src="/images/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.content}>
                    <div className={`container`}>
                        <h1>Network Cabling, Security & Connectivity Solutions </h1>
                        <p>Structured Cabling Solutions for the Future of Your Business</p>
                        <Link href={`/`} className={`btn btn-light`}>Get in Touch</Link>
                    </div>
                </div>
            </div>

    );
};

export default HeroImage;
