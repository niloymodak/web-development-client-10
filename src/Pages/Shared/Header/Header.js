import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/images/Logo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className='rounded-circle' style={{ width: 50, marginRight: 5, }} src={Logo} alt="" />
                    <Navbar.Brand><Link style={{ textDecoration: 'none' }} className='text-white' to={'/'}>Web Development</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link style={{ textDecoration: 'none' }} className='me-3 text-white-50' to={'/'}>Home</Link>
                            <Link style={{ textDecoration: 'none' }} className='me-3 text-white-50' to={'/course'}>Courses</Link>
                            <Link style={{ textDecoration: 'none' }} className='me-3 text-white-50' to={'/blog'}>Blog</Link>
                            <Link style={{ textDecoration: 'none' }} className='me-3 text-white-50' to={'*'}>FAQ</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <BootstrapSwitchButton checked={true} onstyle="light" offstyle="dark" />
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button className='me-2 ms-2' onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link style={{ textDecoration: 'none' }} className='ms-3 me-3 text-white-50' to={'/login'}>Login</Link>
                                            <Link style={{ textDecoration: 'none' }} className='me-3 text-white-50' to={'/register'}>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL} >
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;