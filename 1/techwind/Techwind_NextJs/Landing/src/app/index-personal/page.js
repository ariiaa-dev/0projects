"use client"
import React,{useState,useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const SmallFooter = dynamic(()=>import('../componets/Footer/smallFooter'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));

import { TypeAnimation } from 'react-type-animation';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import { FaArrowRight ,FaRegComment } from "react-icons/fa"
import {HiOutlineCog6Tooth} from "react-icons/hi2"
import {MdApi} from "react-icons/md"
import {FiAirplay,FiCamera} from "react-icons/fi"
import {TbCameraPlus} from "react-icons/tb"
import {PiFlowerLight} from "react-icons/pi"
import BlogTwo from "../componets/blogTwo"
import GetInTuct from "../componets/getInTuch"

export default function Personal(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false);  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImage, setIsImage] = useState(false);


    const images = ["/images/portfolio/1.jpg", "/images/portfolio/2.jpg", "/images/portfolio/3.jpg", "/images/portfolio/4.jpg", "/images/portfolio/5.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/8.jpg"]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsImage(true);
    };
    const currentImage = images[currentImageIndex];
    const services = [
        {
            icon:FiAirplay,
            title:"UX / UI Design",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon: MdApi,
            title:"IOS App Designer",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon: TbCameraPlus,
            title:"Photography",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:PiFlowerLight,
            title:"Graphic Designer",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:HiOutlineCog6Tooth,
            title:"Web Security",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:FaRegComment,
            title:"24/7 Support",
            decs:"The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    const portfolioData = [
        {
            id:1,
            image:"/images/portfolio/1.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:2,
            image:"/images/portfolio/2.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:3,
            image:"/images/portfolio/3.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:4,
            image:"/images/portfolio/4.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:5,
            image:"/images/portfolio/5.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:6,
            image:"/images/portfolio/6.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:7,
            image:"/images/portfolio/7.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            id:8,
            image:"/images/portfolio/8.jpg",
            name:"Mockup Collection",
            title:"Abstract"
        },
    ]
    return(
        <>
        <Navbar/>

        <section className="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:start-0 before:end-36 before:mx-auto before:rounded-full before:bg-indigo-600 sm:before:w-[50rem] before:w-[30rem] sm:before:h-[50rem] before:h-[30rem]">
            <div className="absolute inset-0 jarallax bg-fixed" style={{ backgroundImage: `url('/images/personal/hero-overlay.png')` }}></div>
            <div className="container relative z-1">
                <div className="grid grid-cols-1 mt-5">
                    <div className="title-heading">
                        <div className="grid md:grid-cols-12 mt-12">
                            <div className="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                                <div className="rounded-md lg:shadow-md lg:dark:shadow-gray-800 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                                    <h5 className="mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white">I am Professional Web Developer</h5>
                                    <p className="para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0">Obviously I am a Web Designer. Web Developer with over 3 years of experience.</p>
                                    <div className="mt-4">
                                        <Link href="/#portfolio" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Hire me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 lg:block hidden lg:order-2"></div>
                            <div className="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                                <h4 className="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">John <br /> S
                                    <TypeAnimation
                                        sequence={[
                                            'tradford!',
                                            2000,
                                            'tradford!'
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        className="typewrite"
                                    />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2"></div>
            <ul className="circles p-0 mb-0"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </section>
        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <Link href="/#about"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="pt-12">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <Image src="/images/personal/hero.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-full" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                            <div className="absolute top-0 start-0 -z-1">
                                <Image src="/images/illustrator/dots.svg" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} alt="" />
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">About us</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Better Design <br /> Better Experience</h3>

                            <p className="text-slate-400 max-w-xl">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">WordPress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">JavaScript</span>
                                    <span className="text-slate-400">79%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "79%" }}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">HTML</span>
                                    <span className="text-slate-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What do i offer ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {services.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
                            <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                <Icons className="w-7 h-7"/>
                            </div>

                            <div className="content mt-7">
                                <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.decs}</p>

                                <div className="mt-5">
                                    <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Experience</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Work Experience</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative after:content-[''] after:absolute after:top-0 md:after:end-0 md:after:start-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                        <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <Image src="/images/client/shree-logo.png" width={36} height={36} className="rounded-full h-9 w-9 md:ms-auto" alt="" />
                                    <h5 className="my-2 font-semibold text-lg">Self Employed</h5>
                                    <h6 className="text-slate text-sm mb-0">2019-21</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                                    <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start ms-8 relative md:order-2">
                                    <Image src="/images/client/google-logo.png" width={36} height={36} className="rounded-full h-9 w-9 md:me-auto" alt="" />
                                    <h5 className="my-2 font-semibold text-lg">Google Tech.</h5>
                                    <h6 className="text-slate text-sm mb-0">2018-19</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold">Sr. UX / UI Designer</h5>
                                    <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <Image src="/images/client/lenovo-logo.png" width={36} height={36} className="rounded-full h-9 w-9 md:ms-auto" alt="" />
                                    <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                                    <h6 className="text-slate text-sm mb-0">2016-18</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">Jr. UX / UI Designer</h5>
                                    <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start ms-8 relative md:order-2">
                                    <Image src="/images/client/circle-logo.png" width={36} height={36} className="rounded-full h-9 w-9 md:me-auto" alt="" />
                                    <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                                    <h6 className="text-slate text-sm mb-0">2015-16</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold">Front-end Web Designer</h5>
                                    <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative jarallax bg-fixed" style={{ background: `url('/images/personal/cta.jpg') center` }} >
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">I Am Available For Freelancer Projects.</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                    <div className="relative mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Hire Me</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="container relative md:py-24 py-16" id="portfolio">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Portfolio</h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Works & Projects</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                {portfolioData.map((item,index)=>{
                    return(
                        <div key={index} className="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                            <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

                            <div className="content">
                                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                    <Link href="#" onClick={() => handleImageClick(index)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="w-4 h-4"/></Link>
                                </div>

                                <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                    <Link href="/portfolio-detail-one" className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                    <p className="text-slate-100 tag mb-0">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                {isImage && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                            nextSrc={images[(currentImageIndex + 1) % images.length]}

                            onCloseRequest={() => setIsImage(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
            </div>
        </section>
        <section className="container">
            <BlogTwo/>
        </section>
        <section className="container relative md:py-24 py-16">
            <GetInTuct/>
        </section>

        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}