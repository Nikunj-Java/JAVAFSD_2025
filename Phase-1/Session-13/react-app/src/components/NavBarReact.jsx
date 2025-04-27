import Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function NavBarReact() {

    return (
        <Navbar expand="lg" className='bg-body-tertiary'>

            <Container>

                <Navbar.Brand href='/home'>My Shopping Website</Navbar.Brand>
                <Navbar.Toggle area-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/fetch">Users</Link>
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/form">Form</Link>
                        <Link className='nav-link' to="/props">props</Link>
                        <Link className='nav-link' to="/context">useContext</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

)


}

export default NavBarReact;