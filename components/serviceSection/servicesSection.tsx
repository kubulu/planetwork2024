import React from "react";
import styles from './servicesSection.module.scss';
import Slider from "react-slick";
import Link from "next/link";
const ServicesSection = (nav: any) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
            <div id={`product`} className={styles.servicesSection}>
                <div className={`container`}>
                    <div className={`row justify-content-between align-items-center`}>
                        <div className={`col-md-5`}>
                            <div className={styles.serviceContent}>
                                <h3>Audio Video</h3>
                                <p>PlanetWork improves your organization’s performance by making you successful. Keeping up with the latest technologies and generating insights on your business needs allow us to design and deliver solutions that fit your immediate and long-term objectives.</p>

                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.serviceContentCounter}>
                                <Slider {...settings}>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.img}>
                                                <img src={`/images/wayfind.png`} width={`100%`}/>
                                            </div>
                                            <h4>Display - Screens from Samsung and LG</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ServicesSection;
