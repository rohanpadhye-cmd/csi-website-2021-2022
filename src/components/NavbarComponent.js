import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../darkMode/GlobalStylesComponent';
import { lightTheme, darkTheme } from '../darkMode/Theme';
import { useDarkMode } from '../darkMode/useDarkMode';
import Toggle from '../darkMode/Toggler';
import logo from '../assets/csi_logo.png';
import { motion } from 'framer-motion';

const NavbarComponent = () => {

    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Navbar expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <motion.img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CSI-VESIT Logo"
                            animate={{ scale: [0, 0.5, 0.8, 1.3], rotate: [0, 360] }}
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/home">
                            <Nav.Link className="ml-3 mr-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="ml-3 mr-3">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/council">
                            <Nav.Link className="ml-3 mr-3">Council</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/work'>
                            <Nav.Link className="ml-3 mr-3">Our Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="ml-3 mr-3">Get In Touch</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                </Navbar.Collapse>
            </Navbar>
        </ThemeProvider>
    );
}

export default NavbarComponent;