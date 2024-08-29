import React from "react";
import styles from './solutionSection.module.scss';
import Link from "next/link";
const SolutionSection = (nav: any) => {
    return (
            <div className={styles.solutionSection}>
                <div className={`row justify-content-center align-item-center`}>
                    <div className={`col-md-5`}>
                        <div className={styles.solutionContent}>
                            <h5>Solutions</h5>
                            <div>
                                <h2>Audio/Visual</h2>
                                <h3>We are dedicated to providing good connectivity and secure surroundings as per your needs</h3>
                            </div>

                        </div>
                    </div>
                    <div className={`col-md-7`}>
                        <div className={styles.solutionImage}>
                            <img src={`/images/solution-1.png`} width={`100%`} />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default SolutionSection;
