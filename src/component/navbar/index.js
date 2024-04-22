import React, { useState } from 'react'
import { FaReact, FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import { HiX } from "react-icons/hi"
import './style.scss'

function Navbar() {

    const [togglenav, setTogglenav] = useState(false)

    const data = [
        {
            label: "HOME",
            to: "/"
        },
        {
            label: "ABOUT ME",
            to: "/about"
        },
        {
            label: "SKILLS",
            to: "/skills"
        },
        {
            label: "RESUME",
            to: "/resume"
        },
        {
            label: "PORTFOLIO",
            to: "/portfolio"
        },
        {
            label: "CONTACT",
            to: "/contact"
        },
    ]
  return (
    <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container_logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${togglenav ? 'active' : ''}`}>
                    {
                        data.map((item, index) => (
                            <li key={index} className='navbar__container__menu__item'>
                                <Link to={item.to} className='navbar__container__menu__item__links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='toggle_icon' onClick={() => setTogglenav(!togglenav)}>
                    {
                        togglenav ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
  )
}

export default Navbar
