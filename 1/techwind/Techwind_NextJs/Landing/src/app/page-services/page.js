"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));

const ClientsOne = dynamic(()=>import('../componets/clientsOne'));

import {FiPhone,FiAirplay,} from "react-icons/fi"
import {MdKeyboardArrowRight, MdApi} from "react-icons/md"
import {HiOutlineCog6Tooth} from "react-icons/hi2"
import {TbCameraPlus} from "react-icons/tb"
import {PiFlowerLight} from "react-icons/pi"
import {FaRegComment,FaArrowRight} from "react-icons/fa"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

const settings2 = {
    container: '.tiny-six-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 6
        },

        992: {
            items: 4
        },

        767: {
            items: 3
        },

        320: {
            items: 1
        },
    },
}


export default function Services(){

    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
      
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const services = [
        {
            image: "/images/portfolio/1.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/2.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/3.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/4.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/5.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/6.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/7.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/8.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/9.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/20.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/21.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        },
        {
            image: "/images/portfolio/22.jpg",
            name: 'Iphone mockup',
            role: 'Branding'
        }
    ]
    const images = [ "/images/portfolio/1.jpg", "/images/portfolio/2.jpg", "/images/portfolio/3.jpg", "/images/portfolio/4.jpg", "/images/portfolio/5.jpg","/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/8.jpg", "/images/portfolio/9.jpg", "/images/portfolio/20.jpg", "/images/portfolio/21.jpg","/images/portfolio/22.jpg",]

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

    const servicesData= [
        {
            icon:FiAirplay,
            title:"UX / UI Design",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:MdApi,
            title:"IOS App Designer",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:TbCameraPlus,
            title:"Photography",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:PiFlowerLight,
            title:"Graphic Designer",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:HiOutlineCog6Tooth,
            title:"Web Security",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:FaRegComment,
            title:"24/7 Support",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/services.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h5 className="text-white/50 text-lg font-medium">What We Offer ?</h5>
                    <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Our Services</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="#">Company</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Services</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {servicesData.map((item,index)=>{
                        let Icons =  item.icon
                        return(
                            <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icons className="w-7 h-7"/>
                                </div>
        
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 items-end">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Projects & Works</h3>
                    <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                </div>
            </div>

            <div className="container-fluid relative mt-8">
                <div className="grid grid-cols-1 mt-8">
                    <div className="tiny-six-item">

                        <TinySlider settings={settings2}>
                            {services.map((item, index) =>{
                                return (
                                    <div className="tiny-slide" key={index}>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500 mx-2">
                                            <Link href="#" onClick={() => handleImageClick(index)}  className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                                <Image src={item.image} className="" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                            </Link>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                                <Link href="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">{item.name}</Link>
                                                <h6 className="text-slate-400">{item.role}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
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
                    </div>
                </div>
            </div>

            <div className=" md:mt-24 mt-16"> 
                <ClientsOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br /> Lets talk.</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-6">
                        <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}