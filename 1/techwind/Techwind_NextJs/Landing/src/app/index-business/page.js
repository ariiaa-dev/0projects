"use client"
import React,{useState,useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));
const ClientsOne = dynamic(()=>import('../componets/clientsOne'));
const Blog = dynamic(()=>import('../componets/blog'));

import * as Icon from 'react-feather';
import {BsCheckCircle} from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Business(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false);
    const aboutData = [
        {
            icon:Icon.PieChart,
            title:"Profitable Marketing",
            desc:"We develop digital strategies, products and services appreciated by clients.",
        },
        {
            icon:Icon.Briefcase,
            title:"SEO Specialists",
            desc:"We develop digital strategies, products and services appreciated by clients.",
        },
        {
            icon:Icon.Target,
            title:"Audience Analysis",
            desc:"We develop digital strategies, products and services appreciated by clients.",
        },
    ]
    const PricingData=[
        {
            title:"STARTER",
            amount:"39",
            subData:["Full Access","Source Files","Free Appointments","Enhanced Security"]
        },
        {
            title:"BUSINESS",
            amount:"49",
            subData:["Full Access","Source Files","Free Appointments","Enhanced Security"]
        },
        {
            title:"PROFESSIONAL",
            amount:"59",
            subData:["Full Access","Source Files","Free Appointments","Enhanced Security"]
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section  className="relative">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={3}
                interval={5000}
                isPlaying={true}
                className='h-screen'
            >
                <Slider className='h-full careHeight'>
                    <Slide index={0} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg01.jpg')"}}></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center ">
                                <div className="grid grid-cols-1 md:mt-10 mt-14">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl md:mb-6 mb-2">Take Care of Your Future</h1>
                                        <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="md:mt-8 mt-4">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg02.jpg')"}}></div>
                            <div className="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:to-black md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center justify-center">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Lets Start With Techwind</h1>
                                        <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">See Services</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg03.jpg')"}}></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="md:text-end text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Build and Grow Your Business</h1>
                                        <p className="text-white/70 text-lg max-w-xl md:ms-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Pricing Plans</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </section>

        <section className="relative py-8 bg-indigo-600">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/business/about01.jpg" width={400} height={500}  className="rounded-md" alt="" />
                            <div className="absolute bottom-24 end-0">
                                <Image src="/images/business/about01.jpg" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}  className="rounded-md shadow-md w-48 h-48" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                        className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br /> Business expert </h4>
                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Who We Are ?</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br /> permormance ideas</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    {aboutData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div className="group text-center" key={index}>
                                <Icons className="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"/>
                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">Profitable Marketing</Link>

                                    <p className="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                                    <div className="mt-4">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/> </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/team.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>
                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {PricingData.map((item,index)=>{
                        return(
                            <div key={index} className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
                                <div className="p-6 py-8">
                                    <h6 className="font-bold uppercase mb-5 text-indigo-600">{item.title}</h6>
        
                                    <div className="flex mb-5">
                                        <span className="text-xl font-semibold">$</span>
                                        <span className="price text-4xl font-semibold mb-0">{item.amount}</span>
                                        <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                    </div>
        
                                    <ul className="list-none text-slate-400">
                                        {item.subData.map((el,index)=>{
                                            return(
                                                <li className="mb-1 flex" key={index}><BsCheckCircle className="text-indigo-600 text-base me-2"/>{el}</li>
                                            )
                                        })}
                                       
                                    </ul>
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className=" md:mt-24 mt-16" >
               <ClientsOne/>
            </div>
            <Blog className="container relative md:mt-24 mt-16" />
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}