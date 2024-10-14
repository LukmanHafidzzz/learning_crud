// import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Index() {
    const location = useLocation();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            {
                                location.pathname !== '/' ? (
                                    <Link className="">
                                        <FaRegUserCircle className="fs-2" />
                                    </Link>
                                ) : (
                                    <Link className="text-decoration-none" to={'/signin'}>
                                        Sign in
                                    </Link>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
