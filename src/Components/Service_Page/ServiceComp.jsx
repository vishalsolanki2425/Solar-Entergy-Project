import ServiceBanner from "./ServiceBanner/ServiceBanner";
import OurService from "./OurService/OurService";
import './ServiceComp.css'
import OurProcess from "./ourProcess/ourProcess";
import DiscoverComponent from "./discoverPower/DiscoverComp";

const ServiceComp = () => {
    return (
        <>
                <ServiceBanner />
                <OurService />  
                <OurProcess />
                <DiscoverComponent />
        </>
    )
}

export default ServiceComp;