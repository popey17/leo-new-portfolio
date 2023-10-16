'use client'
import './globals.css'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { nunito } from '@/app/fonts';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }


export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
  }, [])

  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
