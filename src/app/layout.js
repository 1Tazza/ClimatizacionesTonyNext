
import './globals.css';
import Contacto from "../Components/Contacto/Contacto";
import Script from "next/script";

export const metadata = {
  title: 'Climatizaciones Tony - Servicio Técnico',
  description: 'Servicio técnico experto en instalación y mantenimiento de Aire Acondicionado, Calderas, Heladeras y Estufas. Más de 15 años brindando soluciones eficientes en Ciudad Autónoma de Buenos Aires. ¡Descuentos especiales todo el año!',
  keywords: 'instalación de Calderas, reparacion de aires acondicionados, climatización, instalación, mantenimiento, Buenos Aires',
  openGraph: {
    title: 'Climatizaciones Tony - Servicios de Climatización',
    description: 'Expertos en instalación y mantenimiento de aires acondicionados, calderas y heladeras. ¡Llámanos y mejora tu confort hoy!',
    url: 'https://climatizacionestony.com',
    type: 'website',
    images: [
      {
        url: 'https://climatizacionestony.com/logo512.png',
        width: 800,
        height: 600,
        alt: 'Climatizaciones Tony'
      }
    ],

  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icons.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
      </head>

      <body>
        {children}
        <Contacto />

        {/* Google reCAPTCHA */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
          async
          defer
        />

        {/* Google Analytics/Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17024624245"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17024624245');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Climatizaciones Tony",
              "url": "https://climatizacionestony.com",
              "logo": "https://climatizacionestony.com/logo512.png",
              "description": "Especialistas en instalación, mantenimiento y reparación de aire acondicionado, calderas, calefacción y heladeras en Buenos   Aires.",
              "telephone": "+54 9 11 3822-4883",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Solís 843. Capital Federal",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "openingHours": "Mo-Sa 09:00-19:00",
              "sameAs": [
                "https://mtclimatizaciones.com/"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
