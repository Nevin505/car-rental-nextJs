import Image from "next/image";
import Page from "@/components/ui/page";
import pageStyles from "./page.module.css";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Page>
            <Hero/>
      </Page>
      {/* <CalendarInput/> */}
    </>
  );
}
