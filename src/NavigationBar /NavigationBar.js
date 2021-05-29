import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavigationBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="assets/logo.jpeg"
              href="/"
              width="87"
              height="75"
              className="d-inline-block align-top"
              alt="logo"
              style={{ paddingLeft: '15px' }}
            />
            {'  '}
            <h3 style={{ fontFamily: 'serif', fontSize: 25 }}>Tabete Fit</h3>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ fontFamily: 'serif', fontSize: 30 }}
        >
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            <LinkContainer to="/fitness">
              <Nav.Link>Fitness</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scheduler">
              <Nav.Link>Scheduler</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/restaurant">
              <Nav.Link>Restaurant</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <img src="assets/login.jpeg" width="75" height="90" alt="..." />
            <NavDropdown
              id="collasible-nav-dropdown"
              style={{ paddingRight: '60px' }}
            >
              <NavDropdown.Item href="/myaccount">Myaccount</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://authappe40cacab-e40cacab-dev.auth.ap-northeast-1.amazoncognito.com/login?client_id=66fpse4mi1tu87sq6lk[…]ct_uri=https://tabetefitto.web.app/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
