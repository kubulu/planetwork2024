import React from "react";
import styles from './industrySection.module.scss';
import Link from "next/link";
const IndustrySection = (nav: any) => {
    return (
            <div className={styles.industrySection}>
                <div className={`container`}>
                    <div className={styles.heading}>
                        <h3 className={`text-center`}>Top Industries that we worked on</h3>
                    </div>
                </div>
            </div>

    );
};

export default IndustrySection;
