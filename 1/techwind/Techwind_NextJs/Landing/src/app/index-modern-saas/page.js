"use client"
import React,{useState,useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const GetInTuct = dynamic(()=>import('../componets/getInTuch'));
const PricingOne = dynamic(()=>import('../componets/pricingOne'));
const ClientsOne = dynamic(()=>import('../componets/clientsOne'));

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import CountUp from 'react-countup';

import * as Icon from 'react-feather';

import { FaArrowRight } from "react-icons/fa"
import {BsCheckCircle} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"
import {HiArrowTrendingDown} from "react-icons/hi2"

export default function ModernSaas(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);

    const accordionData = [
        {
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'Do I need a designer to use Techwind ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What do I need to do to start selling ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What happens when I receive an order ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
    ]

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    return(
        <>
            <Navbar/>

            <section className="relative table w-full py-36 overflow-hidden bg-gradient-to-b to-transparent from-indigo-600/20 dark:from-indigo-600/40">
                <div className="container relative">
                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="md:me-8">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">Easy way to <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block"><span className="relative text-white">manage</span></span> your over work</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="subcribe-form mt-6 mb-3">
                                    <form className="relative max-w-xl">
                                        <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                        <button type="submit" className="py-2 px-5 inline-flex items-center item-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free<FaArrowRight className="ms-2 text-[10px]"/></button>
                                    </form>
                                </div>

                                <span className="text-slate-400 font-medium">Looking for help? <Link href="#" className="text-indigo-600">Get in touch with us</Link></span>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="relative">
                                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                                    <div className="w-full py-72 bg-slate-400  bg-cover bg-no-repeat bg-top jarallax" style={{backgroundImage:"url('/images/saas/home.jpg')"}} ></div>
                                </div>

                                <div className="absolute flex justify-between items-center md:bottom-10 bottom-5 md:-start-16 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                            <Icon.Monitor className="h-6 w-6"></Icon.Monitor>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-slate-400">Visitor</h6>
                                            <p className="text-xl font-bold"><CountUp className="counter-value" end={4589} start={2100} /></p>
                                        </div>
                                    </div>

                                    <span className="text-red-600 flex items-center"><HiArrowTrendingDown className="me-1"/>0.5%</span>
                                </div>

                                <div className="absolute xl:top-20 top-40 xl:-end-20 lg:-end-10 -end-1 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <h5 className="text-xl font-semibold mb-3">Manage Your Software</h5>
                                    <div className="flex justify-between mt-3 mb-2">
                                        <span className="text-slate-400">Work in progress</span>
                                        <span className="text-slate-400">84%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <div className="flex items-center justify-center rounded-full mx-auto bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 w-[110px] h-[110px]">
                            <Image src="/images/logo-icon-40.png" width={46} height={46} className="block mx-auto" alt="" />
                        </div>
                        <h3 className="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">The best customer relationship <br /> management platform for just <br /> about <span className="after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">everything.</span></h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid mt-8">
                        <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                            <video controls autoPlay loop>
                                <source src="/images/modern.mp4"  type="video/mp4" />
                            </video>

                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Everyone Loves Techwind</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative wow animate__animated animate__fadeInLeft" data-wow-delay=".3s">
                            <Image src="/images/saas/classic02.png" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>

                        <div className="lg:ms-8 wow animate__animated animate__fadeInRight" data-wow-delay=".3s">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                            <Image src="/images/saas/classic03.png" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>

                        <div className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <ClientsOne/>
                </div>
                <PricingOne/>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="relative">
                                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                                    <div className="w-full py-72 bg-slate-400  bg-no-repeat bg-top bg-cover jarallax" style={{backgroundImage:"url('/images/saas/cta.jpg')"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div id="accordion-collapse">
                                {accordionData.map((item, index) => (
                                    <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {activeIndex === index && (
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
                </div>

                <GetInTuct className="container relative md:mt-24 mt-16"/>
            </section>

            <Footer/>
            <Switcher/>
            <CookieModal/>
        </>
    )
}