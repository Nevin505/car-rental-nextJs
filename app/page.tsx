import Image from "next/image";
import Page from "@/components/ui/page";
import pageStyles from "./page.module.css";
import Hero from "@/components/Hero";
import MobileBooking from "@/components/mobileVew/mobileBooking";
import Carousel from "@/components/carousel/carousel";
import PopularSection from "@/components/popularCarSection/popularSection";
import SubScribe  from "@/components/Subscribe/subScribe"


export default function Home() {
  return (
    <>
      <Page>
            <Hero/>
            {/* To display only for Mobile Version */}
             <MobileBooking/>
             <Carousel/>
             <PopularSection/>
             <SubScribe/>
      </Page>
    </> 
  );
}
