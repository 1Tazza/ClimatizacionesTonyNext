'use client';
import c from "./inicio.module.css"

export default function InicioBaxi(){

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
        <h1>SERVICE DE CALDERAS <br /> <span className={c.h1Span}>BAXI</span></h1>
     </div>

     <div className={`${c.peisaDiv} ${c.p}`}>

        <p><span>ATENCIÓN INMEDIATA en CABA y Zona Sur.</span> <br /> Reparación, Mantenimiento e Instalación de <span>Calderas BAXI</span> para empresas y hogares. <br /> Servicio técnico especializado en la <span>MARCA BAXI</span> las 24hs. <br /> Soluciona tu problema <span>AHORA</span></p>

        <div className={`${c.peisa24}`}>
          <img className={`${c.peisa}`} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1782434082/Climatizaciones/logo-vector-baxi_k5uozt.jpg"   alt="Calderas Baxi" />

          <img className={`${c.horario}`} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1782434083/Climatizaciones/24hr_uc2mlz.png" alt="24hs" />
        </div>
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
            <div className={c.text}>Presupuesto Sin Cargo</div>
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
     <span>@</span> SOLICITAR SERVICE AHORA
     </div>
     </a>
     
     </div>

    </div>

    </div>
 
    </div>)
 }