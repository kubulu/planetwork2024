import React from "react";
import styles from './solutionSection.module.scss';
import Link from "next/link";
const SolutionSection = (nav: any) => {
    return (
            <div className={styles.solutionSection}>
                <div className={`row justify-content-between align-item-center`}>
                    <div className={`col-md-6`}>
                        <div className={styles.solutionContent}>
                            <div>
                                <h2>ENHANCE YOUR CUSTOMER EXPERIENCE WITH DYNAMIC DIGITAL SIGNAGE SOLUTIONS.</h2>
                                <p>Transform audience engagement through our cutting-edge digital signage technology. Ideal for retail, hospitality, healthcare, Government and corporate environments, our innovative solutions captivate, inform, and enhance communication with unparalleled versatility and dynamism.</p>
                            </div>

                        </div>
                    </div>
                    <div className={`col-md-5`}>
                        <div className={styles.solutionImage}>
                            <img src={`/images/solution-1.png`} width={`100%`} />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default SolutionSection;
