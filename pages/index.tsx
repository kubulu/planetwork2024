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
import ServicesSectionTwo from "../components/serviceSectionTwo/servicesSectionTwo";
import ServicesSectionThree from "../components/serviceSectionThree/servicesSectionThree";
import ClientSection from "../components/clientSection/clientSection";
import ContactSection from "../components/contactSection/contactSection";

export default function Home(props: any) {
    return (
        <div>
            <Navigation/>
            <HeroImage/>
            <AboutSection/>
            <ServicesSection/>
            <ServicesSectionTwo/>
            <ServicesSection/>
            <ServicesSectionTwo/>
            <ServicesSectionThree/>
            <ClientSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    )
}