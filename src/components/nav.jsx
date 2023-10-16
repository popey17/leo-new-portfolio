'use client'
import React, { useLayoutEffect, useRef } from 'react';
import styles from './nav.module.sass';
import Link from 'next/link';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger'
import { pacifico } from '@/app/fonts';

gsap.registerPlugin(scrollTrigger)


function Nav() {
  const logo = useRef(null)

  useLayoutEffect(()=>{
    gsap.to(logo.current,
      {transform:'translateY(-44%)', duration: 1.5, ease: 'power2.out',scrollTrigger:{
        trigger: logo.current,
        start: 'top -25%',
        end: 'bottom -25%',
        scrub: false,
        markers: true,
        toggleActions: 'play none none reverse'
      }})
  }, [])


  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer} >
        <Link href="/" className={styles.logoDiv} ref={logo}>
          <div className={styles.logoName}> 
            Leo Chen
          </div>
          <div style={pacifico.style} className={styles.logo}>
            Popey
          </div>
        </Link>
      </div>
      <div className={styles.navLinksContainer}>
        <div className={styles.navIcons}>  
          <Link href="#about" >About</Link>
          <Link href="#projects" >Projects</Link>
        </div>
        <div className={styles.contact}>
          <Link href="#contact" >Contact</Link>
        </div>
      </div>
      
    </nav>
  );
}

export default Nav;