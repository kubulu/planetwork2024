import React from "react";
import '../styles/global.scss';
import Navigation from "../components/navigation/navigation";
import HeroImage from "../components/heroImage/heroImage";
import AboutSection from "../components/aboutSection/aboutSection";
import ServicesSection from "../components/serviceSection/servicesSection";
import IndustrySection from "../components/industrySection/industrySection";
import InsightSection from "../components/insightSection/insightSection";
import ConntectSection from "../components/connectSection/conntectSection";
import FooterSection from "../components/footerSection/footerSection";

export default function Home(props: any) {
    return (
        <div>
            <Navigation/>
            <HeroImage/>
            <AboutSection/>
            <ServicesSection/>
            <IndustrySection/>
            <InsightSection/>
            <ConntectSection/>
            <FooterSection/>
        </div>
    )
}