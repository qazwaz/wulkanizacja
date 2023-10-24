import React from 'react'
import './nav.css'
import LOGO from '../../assets/logo.png'
import HERO from '../../assets/hero.jpg'
import PAWEL from '../../assets/pawel.jpg'

function Nav() {
    return (
        <>
            <img src={HERO} alt="" />
            <img src={PAWEL} alt="" className='pawel'/>
            <div className='nav'>
                <a href="/" className='logo'>
                    <img src={LOGO} alt="logo" />
                </a>
                <ul className='nav-list'>
                    <li>O firmie</li>
                    <li>Oferta</li>
                    <li>Galeria</li>
                    <li>Opinie</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </>
    )
}

export default Nav