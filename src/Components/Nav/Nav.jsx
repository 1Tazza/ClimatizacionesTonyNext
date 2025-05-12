"use client";
import c from "./nav.module.css";
import { useEffect, useState } from "react";
import Link from 'next/link';
import burgerNavImg from "./burgerNav.svg"
import NavNode from "../NavNode/NavNode";
import Descuentos from "../Descuentos/Descuentos";


export default function Nav({home}){

    useEffect(() => {

     
        function handleScroll() {
            const navbar = document.querySelector(`.${c.nav}`);
            if (window.scrollY > 60) {
                navbar.classList.add(c.scrolled);
            } else {
                navbar.classList.remove(c.scrolled);
            }
        }
        
        // Ejecutar la función al cargar la página
        document.addEventListener("DOMContentLoaded", handleScroll);
        
        // Escuchar el evento de scroll
        window.addEventListener("scroll", handleScroll);
    },[])

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
        } else {
            document.body.style.overflow = "auto"; // Restaura el scroll normal
        }
    
        return () => {
            document.body.style.overflow = "auto"; // Asegura que el scroll vuelva a la normalidad al desmontar
        };
    }, [isOpen]); 
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return(<>
    <div className={c.nav}>

    <div className={c.container}>

    <div onClick={toggleMenu} className={c.navItem}>
        <img className={`${c.burgerNavImg} ${c.transform}`} src="/svg/burgerNav.svg" alt="Navegador para empresa de climatización" />

        <div className={`${c.explore} ${c.poppins} ${c.transform}`}>
            Explorar
        </div>
    </div>

    <div className={c.logoCont}>
    
    <div>
    <img className={c.logo} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742199686/Tony%20Clima/bjgoa3ycflcsppa4fdw1.png" alt="" />
    </div>
    
    <div className={c.titleCont}>
    <img className={c.titleLogo} src="/svg/titleLogo.svg" alt="Logo de Climatizaciones Tony" />
    </div>
     
    </div>

    {home ? <Link className={`${c.link} ${c.linkT}`} href="/" onClick={() => {window.scrollTo(0, 0);}}>
    <div className={`${c.navItem} ${c.trabajosLink}`}>
        
        <img className={`${c.houseImg} ${c.transform}`} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742667742/Tony%20Clima/cgheg92zagmwmcbxibu0.png" alt="Inicio de empresa de climatización" />

        <div className={`${c.trabajos} ${c.poppins} ${c.transform}`}>
        Inicio
        </div>
    </div>
    </Link> : <Link className={`${c.link}`} href="/trabajos" onClick={() => {window.scrollTo(0, 0);}}>
    <div className={`${c.navItem} ${c.trabajosLink}`}>
        
        <img className={`${c.valijaImg} ${c.transform}`} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742589503/Tony%20Clima/afobsp6cqztalu4vxspc.png" alt="trabajos de empresa de climatización" />

        <div className={`${c.trabajos} ${c.poppins} ${c.transform}`}>
        Trabajos
        </div>
    </div>
    </Link>} 

    </div>

    <Descuentos/>
    </div>


    {isOpen ? <NavNode home={home} isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    
    
    </>)
}
    