import React from "react";
import styles from './aboutSection.module.scss';
import Link from "next/link";
import SolutionSection from "../solutionSection/solutionSection";
const AboutSection = (nav: any) => {
    return (
            <div className={styles.aboutSection}>
                <div className={`container`}>
                    <div className={styles.aboutContent}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-8`}>
                                <label>ABOUT COMPANY</label>
                                <h3>We offer cost-effective solutions designed to maximize your IT infrastructure that scale to your organization’s needs and structure.</h3>
                            </div>
                        </div>
                    </div>
                    <SolutionSection/>
                </div>
            </div>

    );
};

export default AboutSection;
