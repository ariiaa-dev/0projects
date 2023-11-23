"use client"
import React,{useState,useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const SmallFooter = dynamic(()=>import('../componets/Footer/smallFooter'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import AvailableProject from "../componets/availaleProject"
import { FaRegEnvelope } from "react-icons/fa"

export default function Portfolio(){

    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const images = ["/images/portfolio/10.jpg", "/images/portfolio/2.jpg", "/images/portfolio/11.jpg", "/images/portfolio/13.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/14.jpg", "/images/portfolio/12.jpg", "/images/portfolio/8.jpg", "/images/portfolio/9.jpg'", "/images/portfolio/1.jpg", "/images/portfolio/15.jpg", "/images/portfolio/16.jpg"];

    const data = [
        {
            id:0,
            category: 'branding',  
            image: "/images/portfolio/10.jpg",

        },
        {
            id:1,
            category: 'designing',
            image: "/images/portfolio/2.jpg",
        },
        {
            id:2,
            category: 'photography',
            image: "/images/portfolio/11.jpg",

        },
        {
            id:3,
            category: 'branding',  
            image: "/images/portfolio/13.jpg",
        },
        {
            id:4,
            category: 'branding',  
            image: "/images/portfolio/6.jpg",

        },
        {
            id:5,
            category: 'designing',
            image: "/images/portfolio/7.jpg",
        },
        {
            id:6,
            category: 'development',
            image: "/images/portfolio/14.jpg",
        },
        {
            id:7,
            category: 'development',
            image: "/images/portfolio/12.jpg",
        },
        {
            id:8,
            category: 'development',
            image: "/images/portfolio/8.jpg",
        },
        {
            id:9,
            category: 'development',
            image: "/images/portfolio/9.jpg",
        },
        {
            id:10,
            category: 'branding',  
            image: "/images/portfolio/1.jpg",
        },
        {
            id:11,
            category: 'designing',
            image: "/images/portfolio/15.jpg",
        },
        {
            id:12,
            category: 'development',
            image: "/images/portfolio/16.jpg",
        }
    ];

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;
    return(
        <>
        <Navbar/>

        <section className="relative table w-full pt-28 lg:pt-36">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10 text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">Building <br /> digital products, brands, <br /> and experience.</h4>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">A <span className="text-black dark:text-white font-semibold">Product Designer</span> and <span className="text-black dark:text-white font-semibold">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>

                    <div className="mt-6">
                        <Link href="/contact-one" className="py-2 px-5 inline-flex items-center  font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FaRegEnvelope className="me-2 text-sm"/> Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 items-center gap-[30px]">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid relative mt-8">
                <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900:3, 1200:5}} >
                    <Masonry columnsCount={5}>
                        {
                            filteredData.map((data, index) => {
                                return (
                                    <div className="p-1 picture-item" data-groups='["branding"]' key={index}>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Link href="#" onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                                <Image src={data.image} width={0} height={0} sizes="100vw" style={{height:"auto", width:"100%"}} className="" alt="" />
                                            </Link>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                                <Link href="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</Link>
                                                <h6 className="text-slate-400">Branding</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                        nextSrc={images[(currentImageIndex + 1) % images.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="flex justify-center mt-8">
                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</Link>
                </div>
            </div>
            <AvailableProject/>
        </section>

        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}