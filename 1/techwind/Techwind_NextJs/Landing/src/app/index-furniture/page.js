"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const SmallFooter = dynamic(()=>import('../componets/Footer/smallFooter'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import * as Icon from 'react-feather';
import { FaArrowRight } from 'react-icons/fa'

const settings = {
    container: '.tiny-ten-item',
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
            items: 10
        },

        992: {
            items: 7
        },

        767: {
            items: 5
        },

        320: {
            items: 2
        },
    },
}
export default function Furniture(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)
    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const services =["/images/furniture/insta-1.jpg","/images/furniture/insta-2.jpg","/images/furniture/insta-3.jpg","/images/furniture/insta-4.jpg","/images/furniture/insta-5.jpg","/images/furniture/insta-6.jpg","/images/furniture/insta-7.jpg","/images/furniture/insta-8.jpg","/images/furniture/insta-9.jpg","/images/furniture/insta-10.jpg","/images/furniture/insta-11.jpg","/images/furniture/insta-12.jpg"]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + services.length - 1) % services.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % services.length);
    };
    const handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    const currentImage = services[currentImageIndex];

    const product = [
        {
            iamge:"/images/furniture/i1.jpg",
            name:"Item name is #1",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i2.jpg",
            name:"Item name is #2",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i3.jpg",
            name:"Item name is #3",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i4.jpg",
            name:"Item name is #4",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i5.jpg",
            name:"Item name is #5",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i6.jpg",
            name:"Item name is #6",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i7.jpg",
            name:"Item name is #7",
            amount:"$145.00"
        },
        {
            iamge:"/images/furniture/i8.jpg",
            name:"Item name is #8",
            amount:"$145.00"
        },
    ]
    const featuredcollections = [
        {
            image:"/images/furniture/fea3.jpg",
            title:"Furniture Collection #1",
            desc:"Free delivery + Assembly on most items",
        },
        {
            image:"/images/furniture/fea4.jpg",
            title:"Furniture Collection #2",
            desc:"Free delivery + Assembly on most items",
        },
        {
            image:"/images/furniture/fea5.jpg",
            title:"Furniture Collection #3",
            desc:"Free delivery + Assembly on most items",
        },
    ]
    const servicesData = [
        {
            icon:Icon.Shield,
            title:"Money Back Guarantee",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        },
        {
            icon:Icon.UserCheck,
            title:"24/7 Customer Service",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        },
        {
            icon:Icon.Truck,
            title:"Free Shipping Worldwide",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section id="controls-carousel" className="relative" data-carousel="static">
            <div className="overflow-hidden relative h-screen inset-0">
            <Swiper
                    className='swiper-wrapper'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" data-carousel-item="active" style={{backgroundImage:"url('/images/furniture/bg01.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Modern <br /> Furniture</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" data-carousel-item="" style={{backgroundImage:"url('/images/furniture/bg02.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Dream <br /> Sofa Design</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/furniture/bg03.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Look <br /> Modern House</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="group relative overflow-hidden shadow dark:shadow-gray-800">
                        <Image src="/images/furniture/fea1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                        <div className="absolute top-1/2 -translate-y-1/2 p-6">
                            <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Sofa Set for House</Link>

                            <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-800">
                        <Image src="/images/furniture/fea2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                        <div className="absolute top-1/2 -translate-y-1/2 p-6">
                            <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Lighting on Express</Link>

                            <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Products</h3>
                        <p className="text-slate-400 max-w-xl">Please check the below our latest or popular items</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {product.map((item,index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                                    <Image src={item.iamge} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full">Add to Cart</Link>
                                    </div>

                                    <span className="absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="#" className="text-slate-900 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                                    </span>
                                </div>

                                <div className="p-4 pb-0 text-center">
                                    <Link href="#" className="text-lg font-semibold hover:text-indigo-600">{item.name}</Link>

                                    <p className="text-slate-400 font-semibold">{item.amount}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-28 w-full table relative bg-center bg-no-repeat bg-cover jarallax bg-fixed" style={{backgroundImage:"url('/images/furniture/bg04.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/30"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">Comfort Seating</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
            </div>
        </section>

        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Collections</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    {featuredcollections.map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden shadow dark:shadow-gray-800">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                <div className="absolute top-0 start-0 end-0 p-6">
                                    <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">{item.title}</Link>

                                    <p className="mt-2 text-slate-950 font-medium">{item.desc}</p>

                                    <div className="mt-4">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See Collections <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30]">
                    {servicesData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <Icons className="h-8 w-8"></Icons>
                                    </div>
                                </div>
        
                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-ten-item">
                    <TinySlider settings={settings}>
                        {services.map((item, index) => {
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <Link href="#" onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="Furniture" />
                                                <div className="overlay bg-dark"></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                 {lightBox && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={services[(currentImageIndex + services.length - 1) % services.length]}
                        nextSrc={services[(currentImageIndex + 1) % services.length]}

                        onCloseRequest={() => setLightbox(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                  )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                    <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                </div>
            </div>
        </div>

        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}