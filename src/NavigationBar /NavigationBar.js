
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/**
* @author
* @function NavigationBar
**/

const NavigationBar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="dummy-logo"
                        />{'  '}
                        Tabete Fit
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
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