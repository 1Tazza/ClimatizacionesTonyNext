'use client';
import c from "./inicio.module.css"

export default function Inicio(){

    const scrollToContact = () => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
    };
    

    return(<div className={`${c.inicio} ${c.bg}`}>
 
    <div className={c.container}>
    
    <div className={c.leftCont}>

     <div className={`${c.h1} ${c.transform}`}>
        <h1>SERVICIO TÉCNICO</h1>
     </div>

     <div className={c.p}>

        <p><span>CLIMATIZACIONES TONY</span> se especializa en la Instalación, Reparación y Mantenimiento de Aire Acondicionado, Calderas, Heladeras y Calefactores para empresas, hogares y técnicos instaladores.</p>

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

     <div onClick={scrollToContact} className={`${c.button} ${c.transform}`}>
     <span>@</span> Contactanos 
     </div>
     
     </div>

    </div>

    </div>
 
    </div>)
 }