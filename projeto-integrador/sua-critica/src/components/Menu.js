import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import {Link,  useLocation} from 'react-router-dom'
import logomelhorada from '../images/logomelhorada.png';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;

  return (
    <div>
      <Navbar color="dark" dark expand="md" className='bg-black'>
      <Link to="/" className='navbar-brand' ><img src={logomelhorada} alt='Logo da Suacrítica' width="100px"/></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Início</Link>
            </NavItem>
            <NavItem>
              <Link to="/tendencias" className={location === '/tendencias' ? 'nav-link active' : 'nav-link'}>Tendências</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret>
                Filtro
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem dropdown-item href="#" >Filmes</DropdownItem>
                <DropdownItem dropdown-item href="#"  >Série</DropdownItem>
                <DropdownItem dropdown-item href="#"  >Anime</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/login" className={location === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;