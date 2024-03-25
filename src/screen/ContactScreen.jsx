import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const ContactScreen = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div style={{marginTop:"100px", textAlign:"center"}}>
            <div>
                <h1>GET IN TOUCH WITH US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
                <div>
                <i class="fa-solid fa-house" style={{fontSize:"40px"}}></i>
                </div>
                <div>
                    <h3>Our Location</h3>
                    <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
                
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
                <div>
                <i class="fa-solid fa-phone-volume" style={{fontSize:"40px"}}></i>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>(+62)81 414 257 9980</p>
                </div>
                
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
                <div>
                <i class="fa-solid fa-envelope" style={{fontSize:"40px"}}></i>
                </div>
                <div>
                    <h3>Email Address</h3>
                    <p>info@yourdomain.com</p>
                </div>
                
            </div>
        </div>

        <Footer></Footer>
      
    </div>
  )
}

export default ContactScreen
