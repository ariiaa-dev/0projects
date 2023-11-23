"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));
const GetInTuct = dynamic(()=>import('../componets/getInTuch'));
const Blog = dynamic(()=>import('../componets/blog'));

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';

import { SeoServece } from '../Data/data'
import { clientsDataTwo } from '../Data/data'

import { FaArrowRight } from 'react-icons/fa'

export default function Seo(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [ block, setBlock] = useState(0)
    const [ isOpen, setOpen] = useState(false)
    return(
        <>
        <Navbar/>

        <section className="relative md:py-64 py-36 items-center  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg-seo.png')"}}>
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center text-center">
                    <div className="">
                        <h1
                            className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">All-in-one SEO
                            <TypeAnimation
                                sequence={[
                                    ' Plugin',
                                    2000,
                                    ' Website',
                                    2000,
                                    ' Toolkit',
                                    2000,
                                    ' Agency',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                className="typewrite"
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>

                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-xl mx-auto">
                                <input type="url" id="site-url" name="url" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="http://www.yourdomain.com" />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Start Free Trial</button>
                            </form>
                        </div>

                        <span className="font-medium">Looking for help? <Link href="#" className="text-indigo-600">Get in touch with us</Link></span>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-3/4 md:w-full relative -mt-16">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                            <div className="md:flex justify-center">
                                <div className="md:w-1/3">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">External Backlinks</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={1990} end={2021} />K+</h2>
                                    </div>
                                </div>

                                <div className="md:w-1/3 mt-8 md:mt-0">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">Pages Crawled Daily</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={2} end={210} />B+</h2>
                                    </div>
                                </div>

                                <div className="md:w-1/3 mt-8 md:mt-0">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">Domain Indexed</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={1} end={18} />M+</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">We are SEO Professionals</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Your content is an integral part of your SEO efforts and online marketing strategy</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {SeoServece.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <Icons className="h-7 w-7"/>
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
        </section>
        
        <section className="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">A Performance-driven Marketing Agency</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We offer flexible and comprehensive online marketing plans and strategies so you can take advantage of our full spectrum of marketing services.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation" onClick={() =>setBlock(0)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out ${block === 0 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                        <span className="block">Step 1</span>
                                        <span className="text-xl mt-2 block">SEO Audit</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation" onClick={() =>setBlock(1)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${block === 1 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                                        <span className="block">Step 2</span>
                                        <span className="text-xl mt-2 block">Project Execution</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation" onClick={() =>setBlock(2)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${block === 2 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                                        <span className="block">Step 3</span>
                                        <span className="text-xl mt-2 block">Results & Reporting</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <div role="tabpanel" aria-labelledby="profile-tab">
                                <Image src={ block === 0 ? "/images/cowork/7.jpg": block === 1 ? "/images/cowork/8.jpg" : block === 2 ? "/images/cowork/9.jpg" : '' } width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="relative lg:me-8">
                            <Image src="/images/business/about01.jpg" width={400} height={500}  className="rounded-md" alt="" />

                            <div className="absolute bottom-24 end-0">
                                <Image src="/images/business/about02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}  className="rounded-md shadow-md w-48 h-48" alt="" />
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

                    <div className="md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went Pop”</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
               <CompanyLogo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Loved by businesses worldwide</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {clientsDataTwo.map((item,index)=>{
                            return(
                                <ul className="space-y-8" key={index}>
                                    <li className="shadow dark:shadow-gray-800 p-6">
                                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                            <Image src={item.image} height={64} width={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
        
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                                <p className="text-slate-400">{item.title}</p>
                                            </div>
                                        </div>
        
                                        <div className="mt-6">
                                            <p className="text-slate-400">{item.desc}</p>
                                            <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
        
                                    <li className="shadow dark:shadow-gray-800 p-6">
                                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                            <Image src={item.image1} height={64} width={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
        
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name1}</Link>
                                                <p className="text-slate-400">{item.title1}</p>
                                            </div>
                                        </div>
        
                                        <div className="mt-6">
                                            <p className="text-slate-400">{item.desc}</p>
                                            <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                </div>
            </div>
            <div className='container relative md:mt-24 mt-16'>
                <Blog/>
            </div>
         <GetInTuct className="container relative md:mt-24 mt-16" title={true}/>  
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}