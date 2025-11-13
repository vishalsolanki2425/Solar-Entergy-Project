import HomeTitle from "../HomeTitle";
import "./HomeServices.css"
import ServiceCard from "./ServicesCard";
import { LuMonitorDot } from "react-icons/lu";
import { GiWindTurbine } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";

const HomeServices = () => {
    return(
        <section className="home-services">
            <div className="container">
                <div className="services-content">
                    <HomeTitle 
                        title={"Our Services"} 
                        heading={"Complete Solar Solutions"}
                        subtitle="From installation to maintenance, we provide end-to-end solar energy services"
                    />
                    <div className="services-grid">
                        <ServiceCard 
                            icon={<LuMonitorDot/>} 
                            heading={"Energy Monitoring"} 
                            desc={"Intelligent Energy Monitoring to Control Costs Effectively"}
                            color="var(--solar-orange)"
                        />
                        <ServiceCard 
                            icon={<GiWindTurbine />} 
                            heading={"Wind Turbines"} 
                            desc={"Wind turbines Powering a greener tomorrow effortlessly."}
                            color="var(--sky-blue)"
                        />
                        <ServiceCard 
                            icon={<FaSolarPanel/>} 
                            heading={"Battery Solutions"} 
                            desc={"Store Sunlight Effectively with Innovative Battery Tech"}
                            color="var(--solar-yellow)"
                        />
                        <ServiceCard 
                            icon={<GrInstallOption/>} 
                            heading={"Panel Installation"} 
                            desc={"Professional solar panel installation for maximum efficiency"}
                            color="var(--eco-green)"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;