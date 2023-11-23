"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {MdKeyboardArrowRight} from 'react-icons/md'
import * as Icon from 'react-feather'

export default function Team() {

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  let [toggle, setToggle] = useState(true)

  let clientData = [
    {
        image:'/images/client/01.jpg',
        name:'Jack John',
        title:'Designer'
    },
    {
        image:'/images/client/02.jpg',
        name:'Krista John',
        title:'Designer'
    },
    {
        image:'/images/client/03.jpg',
        name:'Roger Jackson',
        title:'Designer'
    },
    {
        image:'/images/client/04.jpg',
        name:'Johnny English',
        title:'Designer'
    },
    {
        image:'/images/client/05.jpg',
        name:'Jack John',
        title:'Designer'
    },
    {
        image:'/images/client/06.jpg',
        name:'Krista John',
        title:'Designer'
    },
    {
        image:'/images/client/07.jpg',
        name:'Roger Jackson',
        title:'Designer'
    },
    {
        image:'/images/client/08.jpg',
        name:'Johnny English',
        title:'Designer'
    },
    {
        image:'/images/client/09.jpg',
        name:'Jack John',
        title:'Designer'
    },
    {
        image:'/images/client/10.jpg',
        name:'Krista John',
        title:'Designer'
    },
    {
        image:'/images/client/11.jpg',
        name:'Roger Jackson',
        title:'Designer'
    },
    {
        image:'/images/client/12.jpg',
        name:'Johnny English',
        title:'Designer'
    },

]
  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Team Members</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Team</li>
                    </ul>
                </div>

                <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {clientData.map((item,index) => {
                        return(
                            <div className="group text-center" key={index}>
                                <div className="relative inline-block mx-auto max-h-[208px] max-w-[208px] rounded-full overflow-hidden shadow dark:shadow-gray-700">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={item.image} style={{width:'100%', height:'auto'}} className="" alt=""/>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black max-h-[208px] max-w-[208px] rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="h-4 w-4"/></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="h-4 w-4"/></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="h-4 w-4"/></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link href="" className="text-lg font-semibold hover:text-indigo-600 duration-500">{item.name}</Link>
                                    <p className="text-slate-400">{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
      </main>
    </div>
  )
}
