import React from "react";
import styles from './innerHero.module.scss';
import Link from "next/link";
const InnerHero = (nav: any) => {
    return (
            <div className={styles.innerHero}>
                <div className={`container`}>
                    <div className={`row h-100 justify-content-between align-item-center`}>
                        <div className={`col-md-5`}>
                            <div className={styles.breadcrumb}>
                                Home / Industries / Retails
                            </div>
                            <div className={styles.pageTitle}>
                                <h1>Retails</h1>
                            </div>

                        </div>
                        <div className={`col-md-5`}>
                            <div className={styles.subContent}>
                                <p>All-in-one solution to provide your platform users seamless payment and onboarding journeys.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default InnerHero;
