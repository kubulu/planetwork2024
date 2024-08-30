import React from "react";
import styles from './contactSection.module.scss';
import Link from "next/link";
const ContactSection = (nav: any) => {
    return (
            <div id={`contact`} className={styles.contactSection}>
                <div className={`container`}>
                    <div className={`row justify-content-between align-items-center`}>
                        <div className={`col-md-4`}>
                            <h6>Contact</h6>
                            <h1>Have questions? Get in touch!</h1>

                            <div className={styles.address}>
                                <h5>Bangalore</h5>
                                <p>No. 839, First Floor, 9th Main, 1st Block HRBR Layout, Kalyan Nagar, Bangalore, Karnataka, India – 560 043.</p>
                            </div>

                            <div className={styles.address}>
                                <h5>Singapore</h5>
                                <p>No 7 Temasek Boulevard#12-07 PMB1157 Suntec Tower One Singapore, 038987</p>
                            </div>

                            <div className={styles.contact}>
                                <h2>Phone - +91 97876 53210</h2>
                                <h2>Email - enquiry@planetwork.in</h2>
                            </div>
                        </div>
                        <div className={`col-md-6`}>

                            <div className={styles.contactCard}>
                                <div className={`row`}>
                                    <div className={`col-md-6`}>
                                        <div className="form-floating mb-3">
                                            <input type="name" className="form-control" id="floatingInput"
                                                   placeholder="Full Name" />
                                            <label htmlFor="floatingInput">Full Name</label>
                                        </div>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput"
                                                   placeholder="Email Address" />
                                            <label htmlFor="floatingInput">Email Address</label>
                                        </div>
                                    </div>
                                    <div className={`col-md-12`}>
                                        <div className="form-floating mb-3">
                                            <input type="phone" className="form-control" id="floatingInput"
                                                   placeholder="Phone Number" />
                                            <label htmlFor="floatingInput">Phone Number</label>
                                        </div>
                                    </div>
                                    <div className={`col-md-12`}>
                                        <div className="form-floating mb-3">
                                            <textarea type="phone" className="form-control" id="floatingInput"
                                                   placeholder="Message" />
                                            <label htmlFor="floatingInput">Message</label>
                                        </div>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <Link href={`/`} className={`btn btn-light`}>Get in touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default ContactSection;
