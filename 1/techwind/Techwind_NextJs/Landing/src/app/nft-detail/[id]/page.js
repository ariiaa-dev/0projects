"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const NftNavbar = dynamic(()=>import('../../componets/Navbar/nftNavbar'));
const Footer = dynamic(()=>import('../../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../../componets/switcher'));

import { nftProdectData } from '../../Data/data'

export default function NftDetails(props){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);

    const NftData = nftProdectData.find((nftDetails)=>nftDetails?.id === parseInt(props?.params?.id || 0));

    const [showModal, setShowModel] = useState(false)
    const [buyNow, setBuyNow] = useState(false)
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    return(
        <>
        <NftNavbar/>
        <section className="relative table w-full md:pb-24 pb-16 mt-28">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-6 md:col-span-5">
                        <div className="sticky top-20">
                            <Image src={NftData?.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-6 md:col-span-7">
                        <div className="">
                            <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">Wolf with Skull <span className="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br /> Illustration</span> T-shirt Tattoo </h5>

                            <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
                                <div>
                                    <h6 className="text-lg font-semibold">Current Bid:</h6>
                                    <h6 className="text-2xl font-semibold mt-2">4.85 ETH</h6>
                                    <h6 className="text-slate-400 mt-2">$450.48USD</h6>
                                </div>

                                <div>
                                    <h6 className="text-lg font-semibold">Auction Ending In:</h6>
                                    <span id="auction-item-1" className="text-2xl font-semibold mt-2"></span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="#"  onClick={()=>setShowModel(!showModal)}  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2"><i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</Link>
                                <Link href="#"  onClick={()=>setBuyNow(!buyNow)}  data-modal-toggle="NftBuynow" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-cart fs-5 me-2"></i> Buy Now</Link>
                            </div>

                            <div className="grid grid-cols-1 mt-8">
                                <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                    <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Details</button>
                                    </li>
                                    <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Bids</button>
                                    </li>
                                    <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Activity</button>
                                    </li>
                                </ul>

                                <div id="StarterContent" className="mt-6">
                                    {isOpenTab === 0 ? 
                                        <div>
                                            <div className="grid grid-cols-1">
                                                <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I am inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                                                <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                                                <h6 className="text-xl font-semibold">Owner</h6>

                                                <div className="flex items-center mt-3">
                                                    <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                                    <div className="ms-3">
                                                        <h6 className="text-lg font-semibold"><Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {isOpenTab === 1 ? 
                                        <div>
                                            <div className="grid grid-cols-1">
                                                <div className="flex items-center">
                                                    <div className="relative">
                                                        <Image width={64} height={64} src="/images/client/01.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                    </div>

                                                    <div className="ms-3">
                                                        <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</Link></h6>
                                                        <span className="text-slate-400">6 hours ago</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center mt-4">
                                                    <div className="relative">
                                                        <Image width={64} height={64} src="/images/client/02.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                    </div>

                                                    <div className="ms-3">
                                                        <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</Link></h6>
                                                        <span className="text-slate-400">6 hours ago</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center mt-4">
                                                    <div className="relative">
                                                        <Image width={64} height={64} src="/images/client/03.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                    </div>

                                                    <div className="ms-3">
                                                        <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                                        <span className="text-slate-400">6 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {isOpenTab === 2 ?
                                        <div>
                                            <div className="grid grid-cols-1">
                                                <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                                                    <div className="flex items-center">
                                                        <div className="relative">
                                                            <Image width={80} height={80} src="/images/nft/items/1.jpg" className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />

                                                            <div className="absolute top-0 start-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                                                <i className="mdi mdi-account-check mdi-18px text-green-600"></i>
                                                            </div>
                                                        </div>

                                                        <span className="content ms-3">
                                                            <Link href="/" className="hover:text-indigo-600 text-lg block">Digital Art Collection</Link>
                                                            <span className="text-slate-400 block mt-1">Started Following <Link href="/" className="link font-semibold">@Panda</Link></span>

                                                            <span className="text-slate-400 block mt-1">1 hours ago</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Auction Items</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {nftProdectData.slice(0,4).map((item,index)=>{
                            return(
                                <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                                    <div className="relative">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                                        <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
        
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                            <Link href={`/nft-detail/${item.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</Link>
                                        </div>
                                    </div>
        
                                    <div className="p-6 relative">
                                        <Link href={`/nft-detail/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
        
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center">
                                                <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                                                <span className="block font-semibold text-indigo-600">{item.amount}</span>
                                            </div>
        
                                            <div>
                                                <i className="mdi mdi-heart text-red-600"></i> <span className="text-slate-400">{item.like}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                        })}  
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}