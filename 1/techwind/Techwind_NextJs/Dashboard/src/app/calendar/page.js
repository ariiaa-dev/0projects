"use client"
import React,{useEffect, useState}  from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import {MdKeyboardArrowRight} from 'react-icons/md'

export default function Calendar(){
    const[toggle, setToggle] = useState(true)

    
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }, []);

    const events = [{date:'2023-09-16T13:00:00', title:'Business Lunch'}];

    return(

    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Calendar</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Calendar</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-2">
                    <div className="xl:col-span-2 lg:col-span-4">
                        <div id="external-events">
                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <span className="h6 font-semibold">All Events</span>
                            
                                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                    <div className="fc-event-main py-1 px-2">Metting</div>
                                </div>
                                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                    <div className="fc-event-main py-1 px-2">Operations</div>
                                </div>
                                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                    <div className="fc-event-main py-1 px-2">Lunch</div>
                                </div>
                                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                    <div className="fc-event-main py-1 px-2">Conference</div>
                                </div>
                                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                    <div className="fc-event-main py-1 px-2">Business Metting</div>
                                </div>
                            
                                <div className="mt-2">
                                    <div className="flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="drop-remove"/>
                                        <label className="form-checkbox-label text-slate-400" htmlFor="drop-remove">Remove after drop</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-10 lg:col-span-8">
                        <div id="calendar-container" className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin]}
                                events={events}
                                headerToolbar = {
                                    {
                                        left:'prev,next today addEventButton',
                                        center:'title',
                                        right :'dayGridMonth,dayGridWeek,dayGridDay'  
                                    }
                                }
                             customButtons={
                                {
                                    addEventButton : {
                                        text:'Add Event',
                                        click : function (){
                                            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                                        }
                                    }
                                }
                             }
                            />
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