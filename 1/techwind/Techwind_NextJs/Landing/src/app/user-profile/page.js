"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const AccountTab = dynamic(()=>import('../componets/accountTab'));

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import * as Icon from 'react-feather';
import {FiCamera} from "react-icons/fi"

export default function UsersProfile(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const userProfile = [
      {
        image:"/images/portfolio/1.jpg",
      },
      {
        image: "/images/portfolio/2.jpg",
      },
      {
        image: "/images/portfolio/3.jpg",
      },
      {
        image: "/images/portfolio/4.jpg",
      },
      {
        image: "/images/portfolio/5.jpg",
      },
      {
        image: "/images/portfolio/6.jpg",
      }
    ];
    const images = ["/images/portfolio/1.jpg", "/images/portfolio/2.jpg", "/images/portfolio/3.jpg", "/images/portfolio/4.jpg", "/images/portfolio/5.jpg","/images/portfolio/6.jpg",]
      
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
    const experienceData = [
        {image:"/images/client/circle-logo.png", title:"Senior Web Developer", time:"3 Years Experience", name:"CircleCi", location:"@London, UK"},
        {image:"/images/client/facebook-logo-2019.png", title:"Web Designer", time:"2 Years Experience", name:"Facebook", location:"@Washington D.C, USA"},
        {image:"/images/client/spotify.png", title:"UI Designer", time:"2 Years Experience", name:"Spotify", location:"@Perth, Australia"},
      ]
    return(
        <>
        <Navbar navClass="nav-light"/>
        <section className="relative lg:pb-24 pb-16">
            <div className="container-fluid relative">
            <div className="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
                <div className="relative shrink-0">
                <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:'auto'}} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                <div className="absolute inset-0 bg-black/70"></div>
                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                </div>
            </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
            <div className="md:flex">
                <div className="lg:w-1/4 md:w-1/3 md:px-3">
                <div className="relative md:-mt-48 -mt-32">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="profile-pic text-center mb-5">
                        <input id="pro-img" name="profile-image" type="file" className="hidden" />
                        <div>
                        <div className="relative h-28 w-28 mx-auto">
                            <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                        </div>

                        <div className="mt-4">
                            <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                            <p className="text-slate-400">jennyhot@hotmail.com</p>
                        </div>
                        </div>
                    </div>
                    <AccountTab/>
                    </div>
                </div>
                </div>

                <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
                    <h5 className="text-xl font-semibold">Jenny Jimenez</h5>

                    <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] pt-6">
                    <div>
                    <h5 className="text-xl font-semibold">Personal Details :</h5>
                    <div className="mt-6">
                        <div className="flex items-center">
                        <Icon.Mail className="fea icon-ex-md text-slate-400 me-3"></Icon.Mail>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Email :</h6>
                            <Link href="#" className="text-slate-400">jennyhot@hotmail.com</Link>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.Bookmark className="fea icon-ex-md text-slate-400 me-3"></Icon.Bookmark>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Skills :</h6>
                            <Link href="#" className="text-slate-400">html</Link>, <Link href="#" className="text-slate-400">css</Link>, <Link href="#" className="text-slate-400">js</Link>, <Link href="#" className="text-slate-400">mysql</Link>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.Italic className="fea icon-ex-md text-slate-400 me-3"></Icon.Italic>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Language :</h6>
                            <Link href="#" className="text-slate-400">English</Link>, <Link href="#" className="text-slate-400">Japanese</Link>, <Link href ="#" className="text-slate-400">Chinese</Link>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.Globe className="fea icon-ex-md text-slate-400 me-3"></Icon.Globe>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Website :</h6>
                            <Link href="#" className="text-slate-400">www.kristajoseph.com</Link>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.Gift className="fea icon-ex-md text-slate-400 me-3"></Icon.Gift>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Birthday :</h6>
                            <p className="text-slate-400 mb-0">2nd March, 1996</p>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.MapPin className="fea icon-ex-md text-slate-400 me-3"></Icon.MapPin>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Location :</h6>
                            <Link href="#" className="text-slate-400">Beijing, China</Link>
                        </div>
                        </div>
                        <div className="flex items-center mt-3">
                        <Icon.Phone className="fea icon-ex-md text-slate-400 me-3"></Icon.Phone>
                        <div className="flex-1">
                            <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Cell No :</h6>
                            <Link href="#" className="text-slate-400">(+12) 1254-56-4896</Link>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="mt-[30px] lg:mt-0">
                    <h5 className="text-xl font-semibold">Experience :</h5>
                    {experienceData.map((item,index)=>{
                        return(
                        <div key={index} className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                            <Image src={item.image} width={64} height={64} className="h-16 w-16 p-4 bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md" alt="" />
                            <div className="flex-1 content ms-4">
                            <h4 className="text-lg text-medium">{item.title}</h4>
                            <p className="text-slate-400 mb-0">{item.time}</p>
                            <p className="text-slate-400 mb-0"><Link href="#" className="text-indigo-600">{item.name}</Link> {item.location}</p>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>

                <h5 className="text-xl font-semibold mt-[30px]">Portfolio :</h5>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">


                    {
                    userProfile.map((data,index) => {
                        return (
                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500" key={index}>
                            <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                            <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>

                            <div className="content transition-all duration-500">
                            <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 transition-all duration-500">
                                <Link href="#" onClick={() => handleImageClick(index)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="w-4 h-4"/></Link>
                            </div>

                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 transition-all duration-500">
                                <Link href="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                <p className="text-slate-400 mb-0">Abstract</p>
                            </div>
                            </div>
                        </div>
                        )
                    })
                    }
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
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}