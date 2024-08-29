import React from "react";
import styles from './conntectSection.module.scss';
import Link from "next/link";
const ConntectSection = (nav: any) => {
    return (
            <div className={styles.connectSection}>
                <div className={`container`}>
                    <div className={`row justify-content-between align-items-center`}>
                        <div className={`col-md-6`}>
                            <h4>Connect with us today to schedule an expert visit at your premises!</h4>
                        </div>
                        <div className={`col-md-3 text-end`}>
                            <Link className={`btn btn-light`} href={`/`}>Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default ConntectSection;
