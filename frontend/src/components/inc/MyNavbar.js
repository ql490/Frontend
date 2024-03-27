import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/MyNavbar.css'
import Logo from '../../assets/Image/Home-Logo.png'

export default class MyNavbar extends Component {
    render() {
        return (
            <div >
                <Navbar className=' justify-content-between' >
                    <Nav.Link href='#' className='navbar-logo'> <img src={Logo} /> </Nav.Link>
                    <Nav.Link href='#' className=''>kjlkjl</Nav.Link>
                </Navbar>

            </div>
        )
    }
}
