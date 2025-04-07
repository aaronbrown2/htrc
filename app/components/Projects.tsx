'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    image: 'british.jpg',
    link: 'https://open.spotify.com/album/3w5lLtXniCQ3qH234VBgz4?si=OWWnlqILS8KLah0jfPr_oQ',
    title: 'British',
    artist: 'Dino Gala',
    roles: 'Production, Recording, and Editing',
  },
  {
    image: 'reggie.jpg',
    link: 'https://open.spotify.com/album/0GjQV3glseW1A5baoTqQWH?si=Yy22RPZqQaa5JudRbcIGdw',
    title: 'Twilight Zone',
    artist: 'Reggie Pearl',
    roles: 'Production, Recording, Editing, and Session Playing',
  },
  {
    image: 'funfair.jpg',
    link: 'https://open.spotify.com/album/3uBE0StyEM1BzmbUbRtw9i?si=S4insQyHRNaXQaxwdZOlEA',
    title: 'Fun Fair',
    artist: 'Dino Gala',
    roles: 'Production, Recording, and Editing',
  },
  {
    image: 'delivision.jpg',
    link: 'https://open.spotify.com/album/3FkqIhuQvPCoK7BnAoguhT?si=D5pQOIenRsWcj6IiPEAehw',
    title: 'Delivision',
    artist: 'Good Deli',
    roles: 'Production, Recording, Editing, Mixing, Mastering, and Session Playing',
  },
  {
    image: 'marrow.jpeg',
    link: 'https://open.spotify.com/album/24wkGgnwzyJM7hcNF7lugT?si=EolMAdueQ7Gm9BxxOIDvFg',
    title: 'Marrow',
    artist: 'Silvies Okay',
    roles: 'Production, Recording, Editing, Mixing, Mastering, and Session Playing',
  },
  {
    image: 'tanner.jpg',
    link: 'https://open.spotify.com/album/2aiAD3sL3PobYL0lpOJzzr?si=dnexTOyXSrqJNfv5NDC4Mg',
    title: 'Bald By Choice',
    artist: 'Bald By Choice',
    roles: 'Production and Recording',
  },
  {
    image: 'maggie.jpg',
    link: 'https://open.spotify.com/album/6YmaOMyYvmFWSDQ9qrOSaa?si=H4c4jdplQBapHiZw4_hZJw',
    title: 'Self Titled',
    artist: 'The Most Beautiful Moth in America',
    roles: 'Production, Recording, Editing, Mastering, and Session Playing',
  },
  {
    image: 'vincent.jpg',
    link: 'https://open.spotify.com/album/1pUAC11o9S58O4FJ31iHoP?si=ovUc7xlyQjC2TsLCSHsDRQ',
    title: 'Burn Out Loud',
    artist: 'Vincent Blackshadow',
    roles: 'Production and Recording',
  },
  {
    image: 'conservators.jpeg',
    link: 'https://open.spotify.com/album/4ALIdk1cEbJITRQ19mSGBW?si=NOJUI5B0SpKB7nyf4T6TGA',
    title: 'The Couch Sessions',
    artist: 'The Conservators',
    roles: 'Production, Recording, Editing, Mixing, Mastering, and Session Playing',
  },
];

export default function Projects () {
    return (
        <section id="projects" className="py-20 px-4 bg-htrcGrey text-center">
            <h2 className="text-4xl font-bold mb-6">Sounds</h2>
            <div className="max-w-6xl mx-auto">
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                className="rounded-lg overflow-hidden"
                >
                    {projects.map(({ image, link, title, artist, roles }, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-16 p-6 mb-24 rounded-2xl">
                                {/* Album Artwork with Spotify Hover */}
                                <div className="relative group w-full md:w-1/2 max-w-md">
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <Image
                                        src={`/img/${image}`}
                                        alt={`${title} Album Artwork`}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-40"
                                        />
                                        <i className="fab fa-spotify text-white text-[200px] group-hover:opacity-100 opacity-0 
                                        transition-opacity duration-300 absolute inset-0 flex justify-center items-center"></i>
                                    </a>
                                </div>
                            
                                {/* Album Details */}
                                <div className="text-left text-white max-w-md space-y-2">
                                    <h5 className="text-3xl font-extrabold">{title}</h5>
                                    <h6 className="text-xl font-bold italic">{artist}</h6>
                                    <p className="text-md text-zinc-300">{roles}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}