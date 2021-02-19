import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Theme';
import { useDarkMode } from './useDarkMode';
import Toggle from './Toggler';
import logo from '../csi_logo.png';

const NavbarComponent = () => {

    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />
    return (
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles />
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CSI-VESIT Logo"
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
                        <NavDropdown className="ml-3 mr-3" title="Our Work" id="basic-nav-dropdown">
                            <LinkContainer to='/work'>
                                <NavDropdown.Item>Intuitive Workshops</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to='/work'>
                                <NavDropdown.Item>Spectacular Events</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to='/work'>
                                <NavDropdown.Item>Amazing Collabs</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/contact">
                            <Nav.Link className="ml-3 mr-3">Get In Touch</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                </Navbar.Collapse>
            </Navbar>
            </>
        </ThemeProvider>
    );
}
 
export default NavbarComponent;