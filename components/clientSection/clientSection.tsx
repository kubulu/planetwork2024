import React from "react";
import styles from './clientSection.module.scss';
import Link from "next/link";
const ClientSection = (nav: any) => {
    return (
            <div id={`partner`} className={styles.clientBlock}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-8 text-center`}>
                            <h3>Partners</h3>
                            <h1>Hardware that grows with your business</h1>
                        </div>
                    </div>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col`}>
                            <img src={`/images/partner-1.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`/images/partner-2.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`/images/partner-3.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`/images/partner-4.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`/images/partner-5.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`/images/partner-6.png`} />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ClientSection;
