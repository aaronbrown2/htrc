export default function Contact () {
    return (
        <section id="contact" className="py-20 px-4 bg-zinc-900 text-center">
            <div className='bg-htrcGrey max-w-xl mx-auto p-10 rounded-3xl border-[1px] border-black'>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-zinc-300 mb-6">Send us a message or inquiry.</p>
                <form className="max-w-lg mx-auto space-y-5">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400" />
                    <textarea placeholder="Your Message" className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400" rows={5}></textarea>
                    <div>
                        <button type="submit" className="bg-htrcWhite mt-5 mb-5 text-htrcGrey font-semibold px-6 py-3 rounded 
                        hover:bg-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]">
                            Send Message
                        </button>
                    </div>  
                </form>
            </div>
        </section>
    )
}