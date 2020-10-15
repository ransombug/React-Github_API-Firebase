import React from 'react'
import {Container} from 'reactstrap'

import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
    return (
        // <Container
        //  fluid  tag="footer" 
        //  className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
        // >
        //     GitHub Search App with FireBase
        // </Container>

    <footer id="fot" className="fixed-bottom bg-info p-3">
        <AiFillFacebook className="m-1"></AiFillFacebook>
        <AiFillInstagram className="m-1"></AiFillInstagram>
        <AiFillLinkedin className="m-1"></AiFillLinkedin>
        <AiFillTwitterCircle className="m-1"></AiFillTwitterCircle>
        <p>COPYRIGHT 2020. ALL RIGHTS RESERVED.</p>
        <p>Design And Developed By <em>Yuvraj Arondekar</em></p>
  </footer> 

    )
}
