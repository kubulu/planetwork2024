import React from "react";
import styles from './footerSection.module.scss';
import Link from "next/link";
const FooterSection = (nav: any) => {
    return (
            <div className={styles.footerSection}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-5 px-0`}>
                           <div className={styles.footerContentLeft}>
                               <div className={styles.footerLogo}>
                                   <img src={`/images/footerLogo.png`} />
                               </div>
                               <div className={styles.social}>
                                   <ul>
                                       <li><Link href={`/`}><img src={`/images/facebook.svg`} /></Link></li>
                                       <li><Link href={`/`}><img src={`/images/twitter.svg`} /></Link></li>
                                       <li><Link href={`/`}><img src={`/images/instagram.svg`} /></Link></li>
                                       <li><Link href={`/`}><img src={`/images/linkedin.svg`} /></Link></li>
                                   </ul>
                               </div>
                           </div>
                        </div>
                        <div className={`col-md-7`}>
                           <div className={`row`}>
                               <div className={`col-md-4`}>
                                   <div className={styles.footMenu}>
                                       <ul>
                                           <li><Link href={`/`}>Home</Link></li>
                                           <li><Link href={`/`}>About</Link></li>
                                           <li><Link href={`/`}>Insight</Link></li>
                                           <li><Link href={`/`}>Careers</Link></li>
                                           <li><Link href={`/`}>Contact</Link></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className={`col-md-4`}>
                                   <div className={styles.footMenu1}>
                                       <h4>Solutions</h4>
                                       <ul>
                                           <li><Link href={`/`}>Audio/Visual</Link></li>
                                           <li><Link href={`/`}>Identity/Access control</Link></li>
                                           <li><Link href={`/`}>Security System</Link></li>
                                           <li><Link href={`/`}>Office Automation</Link></li>
                                           <li><Link href={`/`}>Networking</Link></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className={`col-md-4`}>

                                   <div className={styles.footMenu1}>
                                       <h4>Industries</h4>
                                       <ul>
                                           <li><Link href={`/`}>Retail</Link></li>
                                           <li><Link href={`/`}>Hospitality</Link></li>
                                           <li><Link href={`/`}>Healthcare</Link></li>
                                           <li><Link href={`/`}>Transit</Link></li>
                                           <li><Link href={`/`}>Builders Architects</Link></li>
                                           <li><Link href={`/`}>Banking Finance</Link></li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                    <div className={`row border-top pt-2 px-0`}>
                        <div className={`col-md-6 px-0`}>
                            <div className={styles.bottomLink}>
                                <ul className={`d-inline`}>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Legal</li>
                                </ul>
                            </div>

                        </div>
                        <div className={`col-md-6 text-end px-0`}>
                            <p>© 2024 PlanetWork Technologies. All Rights Reserved Powered by NetiApps</p>
                        </div>
                    </div>
               </div>
            </div>

    );
};

export default FooterSection;
