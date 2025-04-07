export default function Footer () {
    return (
        <footer className="py-6 bg-black border-t border-gray-800 text-center text-zinc-600 text-sm">
            <div className="flex justify-center space-x-4 mb-2">
                <a href="https://twitter.com/htrc" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                    <i className="fab fa-youtube text-3xl text-htrcWhite hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook text-3xl text-htrcWhite hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram text-3xl text-htrcWhite hover:text-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]"></i>
                </a>
            </div>
            &copy; {new Date().getFullYear()} Hot Take Recording Co. All rights reserved.
        </footer>
    )
}