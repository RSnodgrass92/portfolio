import {Navbar,Nav,Button} from 'react-bootstrap'
import React from 'react'
import {FaFilePdf,FaGithub} from "react-icons/fa"
import {RiMessage2Line} from "react-icons/ri";

export function NavBar(props)
{
    return(

         <>
              <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
                <Navbar.Brand>Ryan Snodgrass</Navbar.Brand>
                <Navbar.Brand className="d-none d-xl-block">Web Developer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                  </Nav>
                  <Nav>
                  <Nav.Link href="#contactinfo"><Button className="nav-btn" id="contact-btn" >Contact Me <RiMessage2Line/></Button></Nav.Link>
                  <Nav.Link href="https://github.com/RSnodgrass92" target="_blank"><Button className="nav-btn" id="git-btn" >View GitHub <FaGithub /></Button>
                  </Nav.Link>
                  <Nav.Link href="https://drive.google.com/file/d/1lYq8X1UXLQTuQtrV8NHmml-zmbaL0nAy/view?usp=sharing" target="_blank"><Button className="nav-btn" id="resume-btn" >View Resume <FaFilePdf /></Button></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
        </>
    )
}