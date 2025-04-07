import Image from 'next/image';

export default function Header () {
    return (
        <header className="fixed top-0 w-full z-50 bg-htrcGrey border-b-[1px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]">
        <Image src="/img/logo.png" alt="HTRC Logo" width={80} height={80} />
        <nav className="hidden md:flex space-x-6 text-lg">
            <a href="#about" className="hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]">About</a>
            <a href="#projects" className="hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]">Projects</a>
            <a href="#contact" className="hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]">Contact</a>
        </nav>
        </div>
        </header>
    )
}