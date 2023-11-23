"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const ClientsTwo = dynamic(()=>import('../componets/clientsTwo'));
const GetInTuct = dynamic(()=>import('../componets/getInTuch'));
const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));

import CountUp from 'react-countup';

import * as Icon from 'react-feather';

import {FaDribbble, FaRegComments} from "react-icons/fa"
import {FiAirplay} from "react-icons/fi"
import {LiaUniversitySolid, LiaMoneyBillAltSolid, LiaDocker} from "react-icons/lia"
import {TfiTruck} from "react-icons/tfi"
import {HiArrowTrendingUp} from "react-icons/hi2"

export default function IndexServices(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [activeIndex, setActiveIndex] = useState(1);

    const accordionData = [
        {
            id: 1,
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 2,
            title: 'Do I need a designer to use Techwind ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 3,
            title: 'What do I need to do to start selling ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 4,
            title: 'What happens when I receive an order ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 5,
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 6,
            title: 'Do I need a designer to use Techwind ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 7,
            title: 'What do I need to do to start selling ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id: 8,
            title: 'What happens when I receive an order ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        }
    ]
    const discoverData = [
        {
            icon:HiArrowTrendingUp,
            title:'Business Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FaDribbble,
            title:'Social Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FiAirplay,
            title:'Personal Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaUniversitySolid,
            title:'Banking Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaMoneyBillAltSolid,
            title:"Insurance Service",
            desc:'One advantage everything you need to generate',
        },
        {
            icon:TfiTruck,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaDocker,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FaRegComments,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
    ]
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    const accordionData1 = accordionData.filter((x) => x.id < 5);
    const accordionData2 = accordionData.filter((x) => x.id > 4)

    return(
        <>
        <Navbar/>

        <section className="relative table w-full pt-36 lg:pt-44 pb-32  bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/home-shape.png')"}}>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Find the perfect <br /> <span className="text-indigo-600">Professional</span> for you</h4>
                            <p className="text-slate-400 text-xl max-w-xl">Get free quotes within minutes</p>

                            <div className="subcribe-form z-1 mt-8">
                                <form className="relative mx-auto max-w-2xl">
                                    <Icon.Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4"></Icon.Search>
                                    <input type="text" id="search_name" name="name" className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ps-12" placeholder="What service are you looking for?" />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Search</button>
                                </form>
                                <p className="text-slate-400 max-w-xl mt-3"><span className="font-semibold">Popular:</span> House Cleaning, Web Design, Personal Trainers</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <Image src="/images/illustrator/services.svg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Discover Area</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {discoverData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group transition-all duration-500 ease-in-out text-center">
                                <div className="flex align-middle mx-auto justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                    <Icons className="h-6 w-6"/>
                                </div>
                                <div className="mt-4">
                                    <Link href="#"  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={1548} start={1010}/>+</h1>
                        <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={25} start={2}/>+</h1>
                        <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={9} start={0}/>+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <ClientsTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div id="accordion-collapse" data-accordion="collapse" className="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
                    <div>
                    {accordionData1.map((item, index) => (
                            <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{item.title}</span>
                                        <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                {activeIndex === item.id && (
                                    <div>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div>
                    {accordionData2.map((item, index) => (
                            <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{item.title}</span>
                                        <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                {activeIndex === item.id && (
                                    <div>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <GetInTuct/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}