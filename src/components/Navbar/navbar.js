import React from "react";
import "./navbar.scss";
import { Navbar, Container, Nav} from 'react-bootstrap';

export const Navigationbar = () => {
    return(
            <Navbar bg="custom" variant="dark" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">SỐ HÓA VĂN BẢN <Navbar.Text className="text-muted"> version 0.1</Navbar.Text></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Nav>
                        <Navbar.Collapse id="responsive-navbar-nav" bsPrefix="navbar-collapse">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/document" bsPrefix="nav-link__custom">Tạo văn bản</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/dashboard" bsPrefix="nav-link__custom">Quản lý</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/" bsPrefix="nav-link__custom">Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export const Navigationbar_LoginPage = () => {
    return(
        <Navbar bg="custom" variant="dark" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">SỐ HÓA VĂN BẢN <Navbar.Text className="text-muted"> version 0.1</Navbar.Text></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Nav>
                    <Nav.Link  href="/" bsPrefix="nav-link__custom">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};