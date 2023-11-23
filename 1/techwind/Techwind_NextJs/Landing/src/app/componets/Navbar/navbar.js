"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as Icon from 'react-feather';

export default function Navbar({ navClass, navJustify }) {
    const [isMenu, setisMenu] = useState(false);
    const[navbarTop, setNavbarTop] = useState(false); 

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    
    useEffect(() => {
        if (typeof window !== "undefined"){
            window.addEventListener("scroll", windowScroll);
        }
        activateMenu();
        window.scrollTo(0, 0)
        
    }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }
            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');

                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }

    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

     
    return (
        < >
            <nav id="topnav" className={`${navbarTop ? "nav-sticky" : ""} ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ? 'bg-white dark:bg-slate-900' : ''} defaultscroll font-nunito`}>
                <div className="container relative">
                    {
                        navClass === "nav-light" ?
                            <Link href="/" className="logo" >
                                <span className="inline-block dark:hidden">
                                    <Image src="/images/logo-dark.png" className="l-dark" height={24} width={138} alt="" />
                                    <Image src="/images/logo-light.png" className="l-light" height={24} width={138} alt="" />
                                </span>
                                <Image src="/images/logo-light.png" height={24} width={138} className="hidden dark:inline-block" alt="" />
                            </Link>
                            :
                            <Link href="/" className="logo" >
                                <Image src="/images/logo-dark.png" height={24} width={138}  className="inline-block dark:hidden" alt="" />
                                <Image src="/images/logo-light.png" height={24} width={138}  className="hidden dark:inline-block" alt="" />
                            </Link>
                    }

                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {
                        navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >
                                <li className="inline mb-0">
                                    <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="h-4 w-4" /></Link>
                                </li>

                                <li className="inline ps-1 mb-0">
                                    <Link href="https://1.envato.market/techwind-next" target="_blank" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4" /></Link>
                                </li>
                                
                            </ul>
                            :
                            <ul className="buy-button list-none space-x-1 mb-0">
                            <li className="inline mb-0">
                                <Link href="#">
                                    <span className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="h-4 w-4" /></span></span>
                                    <span className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Icon.Settings className="h-4 w-4" /></span></span>
                                </Link>
                            </li>
                    
                            <li className="inline ps-1 mb-0">
                                <Link href="#">
                                    <div className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4" /></span></div>
                                    <div className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Icon.ShoppingCart className="h-4 w-4" /></span></div>
                                </Link>
                            </li>
                        </ul>
                    }
                
                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                            <li><Link href="/" className="sub-menu-item">Home</Link></li>

                            <li className="has-submenu parent-parent-menu-item">
                                <Link href="#" >Landings</Link><span className="menu-arrow"></span>

                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li><Link href="/index-saas" className="sub-menu-item">Saas</Link></li>
                                            <li><Link href="/index-classic-saas" className="sub-menu-item">Classic Saas </Link></li>
                                            <li><Link href="/index-modern-saas" className="sub-menu-item">Modern Saas </Link></li>
                                            <li><Link href="/index-apps" className="sub-menu-item">Application</Link></li>
                                            <li><Link href="/index-classic-app" className="sub-menu-item">Classic App </Link></li>
                                            <li><Link href="/index-ai" className="sub-menu-item">AI Tools <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                            <li><Link href="/index-smartwatch" className="sub-menu-item">Smartwatch</Link></li>
                                            <li><Link href="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                                            <li><Link href="/index-seo" className="sub-menu-item">SEO Agency </Link></li>
                                            <li><Link href="/index-software" className="sub-menu-item">Software </Link></li>
                                            <li><Link href="/index-payment" className="sub-menu-item">Payments</Link></li>
                                            <li><Link href="/index-charity" className="sub-menu-item">Charity </Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li><Link href="/index-it-solution" className="sub-menu-item">IT Solution</Link></li>
                                            <li><Link href="/index-it-solution-two" className="sub-menu-item">It Solution Two </Link></li>
                                            <li><Link href="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                                            <li><Link href="/index-restaurent" className="sub-menu-item">Restaurent</Link></li>
                                            <li><Link href="/index-hosting" className="sub-menu-item">Hosting</Link></li>
                                            <li><Link href="/index-nft" className="sub-menu-item">NFT Marketplace </Link></li>
                                            <li><Link href="/index-hotel" className="sub-menu-item">Hotel & Resort</Link></li>
                                            <li><Link href="/index-travel" className="sub-menu-item">Travels <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                            <li><Link href="/index-cafe" className="sub-menu-item">Cafe <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                            <li><Link href="/index-gym" className="sub-menu-item">Gym <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                            <li><Link href="/index-yoga" className="sub-menu-item">Yoga </Link></li>
                                            <li><Link href="/index-spa" className="sub-menu-item">Spa & Salon </Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li><Link href="/index-job" className="sub-menu-item">Job</Link></li>
                                            <li><Link href="/index-startup" className="sub-menu-item">Startup</Link></li>
                                            <li><Link href="/index-business" className="sub-menu-item">Business</Link></li>
                                            <li><Link href="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                                            <li><Link href="/index-corporate-two" className="sub-menu-item">Corporate Two </Link></li>
                                            <li><Link href="/index-real-estate" className="sub-menu-item">Real Estate</Link></li>
                                            <li><Link href="/index-consulting" className="sub-menu-item">Consulting </Link></li>
                                            <li><Link href="/index-insurance" className="sub-menu-item">Insurance </Link></li>
                                            <li><Link href="/index-construction" className="sub-menu-item">Construction </Link></li>
                                            <li><Link href="/index-law" className="sub-menu-item">Law Firm </Link></li>
                                            <li><Link href="/index-video" className="sub-menu-item">Video </Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li><Link href="/index-personal" className="sub-menu-item">Personal</Link></li>
                                            <li><Link href="/index-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                            <li><Link href="/index-photography" className="sub-menu-item">Photography <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                            <li><Link href="/index-studio" className="sub-menu-item">Studio</Link></li>
                                            <li><Link href="/index-coworking" className="sub-menu-item">Co-Woriking</Link></li>
                                            <li><Link href="/index-course" className="sub-menu-item">Online Courses </Link></li>
                                            <li><Link href="/index-event" className="sub-menu-item">Event / Conference </Link></li>
                                            <li><Link href="/index-podcast" className="sub-menu-item">Podcasts <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                            <li><Link href="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                                            <li><Link href="/index-phone-number" className="sub-menu-item">Phone Number</Link></li>
                                            <li><Link href="/index-forums" className="sub-menu-item">Forums </Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li><Link href="/index-shop" className="sub-menu-item">Shop / eCommerce  </Link></li>
                                            <li><Link href="/index-crypto" className="sub-menu-item">Cryptocurrency  <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                            <li><Link href="/index-landing-one" className="sub-menu-item">Landing One</Link></li>
                                            <li><Link href="/index-landing-two" className="sub-menu-item">Landing Two</Link></li>
                                            <li><Link href="/index-landing-three" className="sub-menu-item">Landing Three</Link></li>
                                            <li><Link href="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                                            <li><Link href="/index-service" className="sub-menu-item">Service Provider</Link></li>
                                            <li><Link href="/index-food-blog" className="sub-menu-item">Food Blog </Link></li>
                                            <li><Link href="/index-blog" className="sub-menu-item">Blog </Link></li>
                                            <li><Link href="/index-furniture" className="sub-menu-item">Furniture </Link></li>
                                            <li><Link href="/index-landing-five" className="sub-menu-item">Landing Five <span className="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Onepage</span></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-parent-menu-item">
                                <Link href="#!">Pages</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Company </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                            <li><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                            <li><Link href="/page-team" className="sub-menu-item"> Team</Link></li>
                                            <li><Link href="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                            <li><Link href="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Accounts</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/user-profile" className="sub-menu-item">User Profile</Link></li>
                                            <li><Link href="/user-billing" className="sub-menu-item">Billing</Link></li>
                                            <li><Link href="/user-payment" className="sub-menu-item">Payment</Link></li>
                                            <li><Link href="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                            <li><Link href="/user-social" className="sub-menu-item">Social</Link></li>
                                            <li><Link href="/user-notification" className="sub-menu-item">Notification</Link></li>
                                            <li><Link href="/user-setting" className="sub-menu-item">Setting</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Real Estate</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/property-listing" className="sub-menu-item">Listing</Link></li>
                                            <li><Link href="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Courses </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/course-listing" className="sub-menu-item">Course Listing</Link></li>
                                            <li><Link href="/course-detail" className="sub-menu-item">Course Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#">  NFT Market </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                        <li><Link href="/nft-auction" className="sub-menu-item">Auction</Link></li>
                                        <li><Link href="/nft-collection" className="sub-menu-item">Collections</Link></li>
                                        <li className="has-submenu child-menu-item"><Link href="#"> Creator  </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link href="/nft-creators" className="sub-menu-item"> Creators</Link></li>
                                                <li><Link href="/nft-creator-profile" className="sub-menu-item"> Creator Profile </Link></li>
                                                <li><Link href="/nft-creator-profile-edit" className="sub-menu-item"> Profile Edit </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/nft-wallet" className="sub-menu-item">Wallet</Link></li>
                                        <li><Link href="/nft-create-item" className="sub-menu-item">Create NFT</Link></li>
                                        <li><Link href="/nft-detail" className="sub-menu-item">Single NFT</Link></li>
                                    </ul>
                                </li>
                                    <li><Link href="/food-recipe" className="sub-menu-item">Food Recipe </Link></li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> eCommerce </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/shop-grid" className="sub-menu-item">Product Grid</Link></li>
                                            <li><Link href="/shop-grid-two" className="sub-menu-item">Product Grid Two</Link></li>
                                            <li><Link href="/shop-item-detail" className="sub-menu-item">Product Detail</Link></li>
                                            <li><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                            <li><Link href="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                            <li><Link href="/shop-account" className="sub-menu-item">My Account</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Photography </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/photography-about" className="sub-menu-item">About Us</Link></li>
                                            <li><Link href="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Job / Careers </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/page-job-grid" className="sub-menu-item">All Jobs</Link></li>
                                            <li><Link href="/page-job-detail" className="sub-menu-item">Job Detail</Link></li>
                                            <li><Link href="/page-job-apply" className="sub-menu-item">Job Apply</Link></li>
                                            <li><Link href="/page-job-post" className="sub-menu-item">Job Post </Link></li>
                                            <li><Link href="/page-job-career" className="sub-menu-item">Job Career </Link></li>
                                            <li><Link href="/page-job-candidates" className="sub-menu-item">Job Candidates</Link></li>
                                            <li><Link href="/page-job-candidate-detail" className="sub-menu-item">Candidate Detail</Link></li>
                                            <li><Link href="/page-job-companies" className="sub-menu-item">All Companies</Link></li>
                                            <li><Link href="/page-job-company-detail" className="sub-menu-item">Company Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Forums </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/forums-topic" className="sub-menu-item">Forum Topic</Link></li>
                                            <li><Link href="/forums-comments" className="sub-menu-item">Forum Comments</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/helpcenter" className="sub-menu-item">Overview</Link></li>
                                            <li><Link href="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                            <li><Link href="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                            <li><Link href="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Blog </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/blog" className="sub-menu-item">Blogs</Link></li>
                                            <li><Link href="/blog-sidebar" className="sub-menu-item">Blogs & Sidebar</Link></li>
                                            <li><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                            <li className="has-submenu child-menu-item"><Link href="#"> Blog Posts </Link><span className="submenu-arrow"></span>
                                                <ul className="submenu">
                                                    <li><Link href="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                                    <li><Link href="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                                    <li><Link href="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                                    <li><Link href="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                                    <li><Link href="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                                    <li><Link href="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                                    <li><Link href="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                                    <li><Link href="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Email Template</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                            <li><Link href="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                                            <li><Link href="/email-alert" className="sub-menu-item">Alert</Link></li>
                                            <li><Link href="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                            <li><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                            <li><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                            <li><Link href="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Utility </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                            <li><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Special</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                            <li><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                            <li><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                            <li><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Contact </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="/contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                                            <li><Link href="/contact-one" className="sub-menu-item">Contact One</Link></li>
                                            <li><Link href="/contact-two" className="sub-menu-item">Contact Two</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link href="#"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="preventDefault()" className="sub-menu-item">Level 1.0</Link></li>
                                            <li className="has-submenu child-menu-item"><Link href="/#"> Level 2.0 </Link><span className="submenu-arrow"></span>
                                                <ul className="submenu">
                                                    <li><Link href="preventDefault()" className="sub-menu-item">Level 2.1</Link></li>
                                                    <li><Link href="preventDefault()" className="sub-menu-item">Level 2.2</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-parent-menu-item">
                                <Link href="#">Portfolio</Link><span className="menu-arrow"></span>
                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Modern Portfolio</li>
                                            <li><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                            <li><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                            <li><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                            <li><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                            <li><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Classic Portfolio</li>
                                            <li><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                            <li><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                            <li><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                            <li><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                            <li><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Creative Portfolio</li>
                                            <li><Link href="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                            <li><Link href="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                            <li><Link href="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                            <li><Link href="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                            <li><Link href="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Masonry Portfolio</li>
                                            <li><Link href="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                            <li><Link href="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                            <li><Link href="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                            <li><Link href="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                            <li><Link href="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Portfolio Detail</li>
                                            <li><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                            <li><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                            <li><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                            <li><Link href="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-menu-item">
                                <Link href="#">Docs</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link href="/ui-components" className="sub-menu-item">Components <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                    <li><Link href="/documentation" className="sub-menu-item">Documentation</Link></li>
                                    <li><Link href="/changelog" className="sub-menu-item">Changelog</Link></li>
                                </ul>
                            </li>

                            <li><Link href="/contact-one" className="sub-menu-item">Contact</Link></li>
                        </ul>
                    </div>
                </div >
            </nav >
        </>
    )
}
