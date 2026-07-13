'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <header ref={headerRef} className="fixed top-0 w-full z-50 bg-htrcGrey border-b-[1px] border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]">
                <a href="/" aria-label="Hot Take Recording Co home">
                    <Image src="/img/logo.png" alt="HTRC Logo" width={80} height={80} priority />
                </a>
                <nav className="hidden md:flex space-x-6 text-lg" aria-label="Primary navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <button
                    type="button"
                    className={`htrc-burger ${isOpen ? 'open' : ''}`}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    aria-controls="site-navigation"
                    onClick={() => setIsOpen((current) => !current)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav
                id="site-navigation"
                className={`htrc-mobile-nav ${isOpen ? 'open' : ''}`}
                aria-label="Mobile navigation"
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={() => setIsOpen(false)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
