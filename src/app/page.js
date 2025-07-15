
import Contact from "@/components/compo-ui/contact";
import Facilities from "@/components/compo-ui/facilities";
import Gallery from "@/components/compo-ui/gallery";
import Hero from "@/components/compo-ui/hero";
import Rooms from "@/components/compo-ui/rooms";


export default function Home() {
  return (
    <div className="max-w-screen-2xl text-black ">
        <Hero/>
        <Rooms/>
        <Facilities/>
        <Gallery/>
        <Contact/>
        
    </div>
  );
}
