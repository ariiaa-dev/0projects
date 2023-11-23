"use client"
import React,{useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const SmallFooter = dynamic(()=>import('../componets/Footer/smallFooter'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const FoodSlider = dynamic(()=>import('../componets/foodSlider'));

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft,MdOutlineCalendarMonth} from "react-icons/md"
import {AiOutlineClockCircle} from "react-icons/ai"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const settings = {
    container: '.tiny-six-item',
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
            items: 6
        },

        992: {
            items: 4
        },

        767: {
            items: 3
        },

        320: {
            items: 1
        },
    },
}

export default function FoodBlog(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const services2 = [
        {
            iamge: "/images/food/blog/m1.jpg",
            title: 'Eggs',
            description: 'Spicy Cauliflower Burgers and Salad Recipe',
            imageList: "/images/food/1.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m6.jpg",
            title: 'Rice and Tomatos',
            description: 'Awesome Cake with Cream Cheese Frosting',
            imageList: "/images/food/2.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m3.jpg",
            title: 'Chiken',
            description: 'Make Asian-Style Recipe ( Video and Gallery )',
            imageList:"/images/food/3.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m4.jpg",
            title: 'Noodles',
            description: 'Chocolate Mint Dessert Brownies Recipe',
            imageList: "/images/food/4.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m5.jpg",
            title: 'Pizzas',
            imageList:"/images/food/5.jpg",
            description: 'Healthy Homemade Pizza with a glass of wine',
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m2.jpg",
            title: 'Breads',
            description: 'Strawberry, Kiwi and Spinach Salad Recipe',
            imageList:"/images/food/6.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m1.jpg",
            title: 'Eggs',
            description: 'Spicy Cauliflower Burgers and Salad Recipe',
            imageList: "/images/food/1.jpg",
            name: 'Calvin Carlo'
        },
        {
            iamge: "/images/food/blog/m6.jpg",
            title: 'Rice and Tomatos',
            description: 'Awesome Cake with Cream Cheese Frosting',
            imageList: "/images/food/2.jpg",
            name: 'Calvin Carlo'
        },

    ]
    const FoodImage = [
        {
            image:"/images/food/blog/f1.jpg",
            title:"Food"
        },
        {
            image:"/images/food/blog/f2.jpg",
            title:"Healthy"
        },
        {
            image:"/images/food/blog/f3.jpg",
            title:"Dinner"
        },
        {
            image:"/images/food/blog/f4.jpg",
            title:"Holiday"
        },
        {
            image:"/images/food/blog/f5.jpg",
            title:"Coffee"
        },
    ]
    const blogData = [
        {
            image:"/images/food/blog/1.jpg",
            tag:"Salad",
            title:"Giant Multi-Stuffed Soft Pretzel",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/5.jpg",
            tag:"Breakfast",
            title:"Romantic Breakfast for Two",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/f1.jpg",
            tag:"Breads",
            title:"Macchiato Pumpkin Soup",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/m1.jpg",
            tag:"Chef",
            title:"Braised Pork Belly Adobo By Chef Leah Cohen",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/2.jpg",
            tag:"Breads",
            title:"Cinnamon Buns for Two",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/6.jpg",
            tag:"Cooker",
            title:"Slow Cooker Coconut Curry",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/m2.jpg",
            tag:"Birthday",
            title:"Perfect for a Birthday Party",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/f2.jpg",
            tag:"Eat",
            title:"5 Recipes Almost Too Cute To Eat",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/2.jpg",
            tag:"Vegetarian",
            title:"Vegetarian Breakfast for You",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/m3.jpg",
            tag:"Breads",
            title:"Meal Prep Breakfast For The Week",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/7.jpg",
            tag:"Cheese",
            title:"Lactose Free Homemade Cheese",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/f3.jpg",
            tag:"Salad",
            title:"Mint-Pomegranate Salad",
            date:"14th July 2022",
        },
        {
            image:"/images/food/blog/f4.jpg",
            tag:"Apple",
            title:"Tiny Apple Pies with Cinnamon",
            date:"14th July 2022",
        },
    ]
    return(
        <>
        <Navbar/>

        <section className="relative mt-[74px]">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="tiny-six-item">
                        <TinySlider settings={settings}>
                            {services2.map((item, index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="group relative overflow-hidden">
                                            <Image src={item.iamge} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                                            <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                                <div className="text-center">
                                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.title}</Link>
                                                    <Link href="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">{item.description}</Link>

                                                    <div className="flex items-center justify-center mt-4">
                                                        <Image src={item.imageList} width={40} height={40} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                        <Link href="#" className="font-medium text-white block ms-2">{item.name}</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                    {FoodImage.map((item,index)=>{
                        return(
                            <div key={index} className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <Link href="/#!" className="text-white font-semibold text-xl mb-0">{item.title}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200:4}} >
                    <Masonry>
                        {blogData.map((item,index)=>{
                            return(
                                <div className="picture-item p-2 pb-5" key={index}>
                                    <div className="group relative">
                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                            <div className="absolute top-0 start-0 pt-3 ps-3">
                                                <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.tag}</Link>
                                            </div>
                                        </div>
            
                                        <div className="p-3">
                                            <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
            
                                            <ul className="list-none space-x-1 flex items-center justify-between mt-2">
                                                <li>
                                                    <span className="text-slate-400 flex items-center"><MdOutlineCalendarMonth className='me-2'/> {item.date}</span>
                                                </li>
            
                                                <li className="">
                                                    <Link href="/#!" className="text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link> <span className="text-slate-400">22</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                </li>
                                <li>
                                    <Link href="/#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trending Posts</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-8 gap-4">
                    <div className="group relative overflow-hidden rounded-md">
                        <Image src="/images/food/blog/8.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                        <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                            <div className="text-center">
                                <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Eggs</Link>
                                <Link href="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">Spicy Cauliflower Burgers and Salad Recipe</Link>

                                <div className="flex items-center justify-center mt-4">
                                    <Image src="/images/food/1.jpg" width={40} height={40} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                    <Link href="#" className="font-medium text-white block ms-2">Calvin Carlo</Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Change Your Strategy: Find a Business Consultant</Link>

                                    <span className="text-slate-400 flex items-center me-2 mt-3"><MdOutlineCalendarMonth/> 14th July 2022</span>
                                </div>
                            </div>

                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/5.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Creamy Garlic Parmesan Chicken Salad</Link>

                                    <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth /> 14th July 2022</span>
                                </div>
                            </div>

                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/4.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Bourbon Street Rib-Eye Steak With Cheese</Link>

                                    <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth/> 14th July 2022</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/3 text-center">
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We will send you the best of our blog just once a weekly.</p>

                        <div className="mt-8">
                            <div className="text-center subcribe-form">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                            
        <FoodSlider/>
        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}