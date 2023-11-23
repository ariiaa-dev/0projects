"use client"
import React, { useEffect, useState } from 'react' 
import Link from 'next/link';
import Image from 'next/image';
import dynamic from "next/dynamic";

const Switcher = dynamic(() => import('../components/switcher'))
const BackButton = dynamic(() => import('../components/backButton'))

export default function Comingsoon(){

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }, []);
    
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();
    useEffect(() => {
        
        // The data/time we want to countdown to
        var eventCountDown = new Date("December 25, 2023 16:37:52").getTime();
  
        // Run myfunc every second
        var myfunc = setInterval(function () {
  
          var now = new Date().getTime();
          var timeleft = eventCountDown - now;
  
          // Calculating the days, hours, minutes and seconds left
           setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
           setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
           setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
           setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000))
  
  
          // Display the message when countdown is over
          if (timeleft < 0) {
            clearInterval(myfunc);
          }
        }, 1000);
    }, []);

    return(
   <>
    <section className="relative  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/utility.jpg')"}}>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1">
                <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                    <div className="text-center">
                        <Link href="/"><Image src='/images/logo-icon-64.png' width={72} height={64} placeholder='blur' blurDataURL='/images/logo-icon-64.png' className="mx-auto" alt=""/></Link>
                    </div>
                    <div className="title-heading text-center my-auto">
                        <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    
                        <div id="countdown">
                            <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                                <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{days}<p className='count-head'>Days</p></li>
                                <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
                                <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
                                <li  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
                                <li className="h1"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Switcher/>
    <BackButton/>
   </>
    )
}