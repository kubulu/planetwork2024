import React from "react";
import styles from './insightSection.module.scss';
import Link from "next/link";
const InsightSection = (nav: any) => {
    return (
            <div className={styles.insightSection}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-6`}>
                            <h2>Latest Insight</h2>
                        </div>
                        <div className={`col-md-6 text-end`}>
                            <Link href={`#`} className={`btn btn-light`}>View More</Link>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={styles.insightBlock}>
                                <div className={styles.insightImg}>
                                    <img src={`/images/insight.png`} />
                                </div>
                                <div className={styles.insightContent}>
                                    <span>06/12/1990</span>
                                    <p>Securing Your AI-Powered Network Transformation A Guide for C-Suite Leaders</p>
                                </div>

                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.insightBlock}>
                                <div className={styles.insightImg}>
                                    <img src={`/images/insight.png`} />
                                </div>
                                <div className={styles.insightContent}>
                                    <span>06/12/1990</span>
                                    <p>Securing Your AI-Powered Network Transformation A Guide for C-Suite Leaders</p>
                                </div>

                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.insightBlock}>
                                <div className={styles.insightImg}>
                                    <img src={`/images/insight.png`} />
                                </div>
                                <div className={styles.insightContent}>
                                    <span>06/12/1990</span>
                                    <p>Securing Your AI-Powered Network Transformation A Guide for C-Suite Leaders</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
};

export default InsightSection;
