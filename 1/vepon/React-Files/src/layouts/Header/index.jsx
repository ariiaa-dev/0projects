import {useEffect} from 'react'
import { NavLink } from "react-router-dom";

import Logo from '../../data/data-layout/Header/data-Header.js';

import dropdownHome from '../../data/data-layout/Header/data-dropdownhome.json';
import dataNav from '../../data/data-layout/Header/data-Nav.json';

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

const Header = ({Title , ClassNav=""}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

    return (
      <>
        <Preloader Title={Title} />
        <nav className={ClassNav} id="banner">
          <div className="container">
            <a className="navbar-brand" href="#"><span><img src={Logo} alt="logo" /></span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
                  <div className="dropdown-menu">
                    {dropdownHome && dropdownHome.map((item , key) => (
                      <NavLink className="dropdown-item" key={key} to={item.path}>{item.nameLink}</NavLink>
                    ))}
                  </div>
                </li>
                {dataNav && dataNav.map((item , key) => (
                  <li className="nav-item" key={key}>
                    <NavLink className="nav-link" to={item.path}>{item.nameLink}</NavLink>  
                  </li>
                ))}
                <li className="lh-55px"><a href="#" className="btn login-btn ml-50">Login!</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Header;