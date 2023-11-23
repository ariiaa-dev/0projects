"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {MdKeyboardArrowRight} from 'react-icons/md'
import {FiArrowRight} from 'react-icons/fi'
import {IoIosArrowUp} from 'react-icons/io'

export default function Terms() {

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  let [toggle, setToggle] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0);

  const accordion = [
      {
          title:"How does it work ?",
          contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      },
      {
          title:"Do I need a designer to use Techwind ?",
          contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      },
      {
          title:"What do I need to do to start selling ?",
          contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      },
      {
          title:"What happens when I receive an order ?",
          contant:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      }
  ]

  const toggleAccordion = (index) => {
      if (activeIndex === index) {
          setActiveIndex(0);
      } else {
          setActiveIndex(index);
      }
  }

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
                <div className="layout-specing">
                    <div className="md:flex justify-between items-center">
                        <h5 className="text-lg font-semibold">Terms & Conditions</h5>

                        <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                            <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                            <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Terms</li>
                        </ul>
                    </div>

                    <div className="container relative mt-6">
                        <div className="md:flex justify-center">
                            <div className="lg:w-4/5 w-full">
                                <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <h5 className="text-lg font-semibold mb-4">Introduction :</h5>
                                    <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
        
                                    <h5 className="text-lg font-semibold mb-4 mt-6">User Agreements :</h5>
                                    <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have <b className="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-red-600">composed</b> in a pseudo-Latin language which more or less <b className="text-red-600">corresponds</b> to proper Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-red-600">advantage</b> of its Latin origin and the relative <b className="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers <b className="text-red-600">attention</b> from the layout.</p>
                                    <p className="text-slate-400 mt-3">There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-red-600">nonsensical</b> stories.</p>
                                    <p className="text-slate-400 mt-3">It seems that only <b className="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                    
                                    <h5 className="text-lg font-semibold mb-4 mt-6">Restrictions :</h5>
                                    <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                                    <ul className="list-none text-slate-400 mt-3">
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Create your own skin to match your brand</li>
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="flex mt-2 items-center"><FiArrowRight className="text-indigo-600 text-sm align-middle me-2"/>Create your own skin to match your brand</li>
                                    </ul>
        
                                    <h5 className="text-lg font-semibold mt-6">Users Question & Answer :</h5>
        
                                    <div className="mt-6">
                                        {accordion.map((item,index)=>{
                                            return(
                                                <div key={index} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 ">
                                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                        <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`}>
                                                            <span>{item.title}</span>
                                                            <IoIosArrowUp className={`w-4 h-4  shrink-0 ${activeIndex === index ? "rotate-380" : "rotate-180"}`}/>
                                                        </button>
                                                    </h2>
                                                    {activeIndex === index && (
                                                        <div>
                                                            <div className="p-5">
                                                                <p className="text-slate-400 dark:text-gray-400">{item.contant}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
        
                                    <div className="mt-6">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Accept</Link>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Decline</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        <Switcher/>
      </main>
    </div>
  )
}
