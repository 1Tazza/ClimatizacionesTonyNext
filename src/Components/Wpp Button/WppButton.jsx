"use client";
import c from "./wppbutton.module.css"

export default function WppButton(){

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

    return(<div className={c.wppButton}>
    
    <div className={c.container}>
    <a href="https://wa.link/4esc8w" onClick={handleOnClick}
       target="_blank"
       /* onClick={() => {
          if (typeof gtag !== "undefined") {
            gtag("event", "conversion", {
              send_to: "AW-XXXXXXXX/XXXXXXXX",
            });
          }
        }} */
        className={c.a}
        >
        <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848153/Climatizaciones/sxgo5xgsiqhu47mq1cek.png" alt="wpp button" />
    </a>
    </div>

    </div>)
}