import About from "../About/About"
import ChooseUs from "../Choose Us/ChooseUs"
import Trabajos from "../Trabajos/Trabajos"
import Nav from "../Nav/Nav"
import SeoHome from "../SeoHome/SeoHome"
import WppButton from "../Wpp Button/WppButton"
import CalderasAlt from "../CalderasAlt/CalderasAlt"
import InicioBaxi from "../InicioBaxi/InicioBaxi"

export default function BaxiHome(){

   return(<div>

   <Nav home={false}/>

   <InicioBaxi/>

   <About/>

   <Trabajos/>

   <ChooseUs/>

   <SeoHome/>

   <WppButton/>
   </div>)
}