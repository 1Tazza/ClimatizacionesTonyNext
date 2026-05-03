'use client';
import c from "./inicio.module.css"

export default function InicioCalderas(){

    const scrollToContact = () => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
    };

    function handleOnClick(){
        if (typeof window.gtag === "function") {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17024624245/GqFnCI2Z7usaEPXM_LU_',
            'event_callback': function () {
              console.log("Conversión enviada correctamente.");
            }
          });
        } else {
          console.error("gtag no está disponible.");
        }
       }
    

    return(<div className={`${c.inicio} ${c.bg}`}>
 
    <div className={c.container}>
    
    <div className={c.leftCont}>

     <div className={`${c.h1} ${c.transform}`}>
        <h1>SERVICIO DE CALDERAS</h1>
     </div>

     <div className={c.p}>

        <p><span>CLIMATIZACIONES TONY</span> se especializa en la Instalación, Reparación y Mantenimiento de <span>Calderas</span> para empresas, hogares y técnicos instaladores. Servicio técnico experto en calderas de <span>todas las marcas</span>.</p>

     </div>

     <div className={c.items}>
        <div className={`${c.item1} ${c.transformH}`}>
            <span className={c.logo}>
            <img src="/svg/Inicio/logo1.svg" alt="Valija Icono" />
            </span>
            <div className={c.text}>Servicio de Alta Calidad</div>
        </div>
        <div className={`${c.item2} ${c.transformH}`}>
            <span className={c.logo}>
                <img src="/svg/Inicio/logo2.svg" alt="money icon" />
            </span>
            <div className={c.text}>Ofertas
Imperdibles</div>
        </div>
        <div className={`${c.item3} ${c.transformH}`}>
            <span className={c.logo}>
                <img src="/svg/Inicio/logo3.svg" alt="shield icon" />
            </span>
            <div className={c.text}>Equipo Técnico Profesional</div>
        </div>
     </div>

     <div className={c.buttonCont}>
     <a className={`${c.a}`}  onClick={handleOnClick} href="https://wa.link/4esc8w" target="_blank" >
     <div className={`${c.button} ${c.transform}`}>
     <span>@</span> Contactanos 
     </div>
     </a>
     
     </div>

    </div>

    </div>
 
    </div>)
 }