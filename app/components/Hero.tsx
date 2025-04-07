'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const offset = window.scrollY;
                bgRef.current.style.transform = `translateY(${offset * 0.3}px)`;
            }
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);  
    return(
        <section className="relative min-h-screen pt-[210px] pb-20 text-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-cover bg-center" ref={bgRef}
                style={{ backgroundImage: "url('/img/htrc-bg.avif')", }}          
            />

            {/* Foreground Content */}
            <div className="relative bg-htrcGrey bg-opacity-100 p-10 rounded-lg max-w-lg mx-auto fade-in-up duration-300">
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">We Make Indie Albums</h1>
                <h2 className="text-zinc-200 text-lg lg:text-xl max-w-xl mx-auto">
                    Production, Creative Direction, Mixing, and Mastering that'll make you sound amazing.
                </h2>
            </div>
        </section>
    )
}