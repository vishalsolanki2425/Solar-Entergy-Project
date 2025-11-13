import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/logo.png";
import "./header.css";

function Header() {
    return (
        <>
            <div className="container header">
                {['md'].map((expand) => (
                    <Navbar key={expand} expand={expand}>
                        <Container className='position-absolute header-wrapper'>
                            <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src={logo} alt="" />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="navigationTabs justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About Us</Nav.Link>
                                        <Nav.Link href="/service">Services</Nav.Link>
                                        <Nav.Link href="/ourProjects">Our Projects</Nav.Link>
                                        <Nav.Link href="/blog">Blog</Nav.Link>
                                        <Nav.Link href="/contact" className='bTn'>contact Us</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </>
    );
}

export default Header;


