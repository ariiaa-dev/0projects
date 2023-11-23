"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const ClientsOne = dynamic(()=>import('../componets/clientsOne'));
const PricingOne = dynamic(()=>import('../componets/pricingOne'));
const Blog = dynamic(()=>import('../componets/blog'));

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import {BsCheckCircle} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"
import { FaArrowRight , FaRegEnvelope } from 'react-icons/fa'
import {RiPresentationFill,RiMoneyCnyBoxLine} from "react-icons/ri"
import{LiaFileInvoiceDollarSolid} from "react-icons/lia"
import {AiOutlineDollar} from "react-icons/ai"

export default function LandingThree(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)
    const aboutData = [
        {
            icon:RiPresentationFill,
            title:"Best Financial Advice",
            desc:"The most well-known which is said to have originated"
        },
        {
            icon:LiaFileInvoiceDollarSolid,
            title:"Authorised Finance Brand",
            desc:"The most well-known which is said to have originated"
        },
        {
            icon:RiMoneyCnyBoxLine,
            title:"Compehensive Advices",
            desc:"The most well-known which is said to have originated"
        },
        {
            icon:RiPresentationFill,
            title:"Best Tax Advantages",
            desc:"The most well-known which is said to have originated"
        },
    ]
    const servicesData = [
        {
            icon : RiPresentationFill,
            title : "Digital Marketing",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : LiaFileInvoiceDollarSolid,
            title : "Investing",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : RiMoneyCnyBoxLine,
            title : "Mortgage Advisor",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : RiPresentationFill,
            title : "Real Estate",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : AiOutlineDollar,
            title : "Payroll & Accounting",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon :LiaFileInvoiceDollarSolid,
            title : "Branch Registration",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 lg:py-56 bg-indigo-600 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg.png')"}}>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-6 position-relative">Powerfull analytics <br /> tools for your business</h4>

                    <p className="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div className="relative mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md">Get Started</Link>
                    </div>
                </div>
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
                <div className="md:flex justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0 lg:w-4/5">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px]">
                            {aboutData.map((item,index)=>{
                                let Icons = item.icon
                                return(
                                    <div key={index} className="group flex p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 transition-all duration-500 ease-in-out">
                                        <div
                                            className="min-w-[64px] h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                            <Icons width={30} height={30}/>
                                        </div>
    
                                        <div className="content ms-4 flex-1">
                                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {servicesData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                    <Icons width={30} height={30}/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <Image src="/images/shape-image.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6 order-1 md:order-2">
                        <div className="lg:ms-8">
                            <Image src="/images/illustrator/SEO_SVG.svg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 order2 md:order-1">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br /> Analytics For All Expenses</h3>

                            <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                            <ul className="list-none text-slate-400 my-6">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative md:mt-24 mt-16">
                <ClientsOne title={true}/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid grid-cols-1 md:text-start text-center justify-center">
                            <div className="relative">
                                <Image src="/images/saas/home.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                        className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Get Free Trial</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Get An Easy Start <br /> With Techwind Now</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <Link href="#" className="text-white flex">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

        <section className="relative md:pb-24 pb-16">
           <PricingOne/>
        </section>

        <section>
            <Blog className="container relative md:pb-24 pb-16"/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}