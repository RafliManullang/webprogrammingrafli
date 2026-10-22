import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//test
function AppNavigation(){
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Catatan Keuangan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/transaksi">Transaksi</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/badge">Badge</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cardstatusdemo">CardStatusDemo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/headerbanner">HeaderBanner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactionmanager">TransactionManager</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/karturingkasan">KartuRingkasan</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/layoutgrid">LayoutGrid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/walletsummary">WalletSummary</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default  AppNavigation;