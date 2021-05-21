
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/**
* @author
* @function NavigationBar
**/

const NavigationBar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src="assets/logo.jpeg"
                            href="/home"
                            width="87"
                            height="75"
                            className="d-inline-block align-top"
                            alt="dummy-logo"
                            style={{ paddingLeft: '15px' }}
                        />{'  '}
                        <h3 style={{ fontFamily: 'serif', fontSize: 25 }}>Tabete Fit</h3>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ fontFamily: 'serif', fontSize: 30 }}>
                    <Nav className="mr-auto" activeKey={window.location.pathname}>
                        <LinkContainer to="/fitness">
                            <Nav.Link>Fitness</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/calendar">
                            <Nav.Link>Calendar</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <NavDropdown title="image" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;