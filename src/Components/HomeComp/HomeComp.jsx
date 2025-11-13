import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeServices from "./HomeServices/HomeServices";
import HomePerf from "./HomePerformance/HomePerformance";
import HomeWhyChoose from "./HomeWhyChoose/HomeWhyChoose";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";

const HomeComp = () => {
    return(
        <>
           <HomeBanner/>
           <HomeAbout />
           <HomePerf />
           <HomeWhyChoose />
           <HomeServices/>
           <HomeTestimonials/>
        </>
    )
}


export default HomeComp;
