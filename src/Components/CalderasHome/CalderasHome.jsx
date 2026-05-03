import About from "../About/About"
import ChooseUs from "../Choose Us/ChooseUs"
import Trabajos from "../Trabajos/Trabajos"
import Nav from "../Nav/Nav"
import SeoHome from "../SeoHome/SeoHome"
import WppButton from "../Wpp Button/WppButton"
import InicioCalderas from "../InicioCalderas/InicioCalderas"
import CalderasAlt from "../CalderasAlt/CalderasAlt"

export default function CalderasHome(){

   return(<div>

   <Nav home={false}/>

   <InicioCalderas/>

   <CalderasAlt/>

   <About/>

   <Trabajos/>

   <ChooseUs/>

   <SeoHome/>

   <WppButton/>
   </div>)
}