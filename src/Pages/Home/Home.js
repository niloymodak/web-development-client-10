import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HTML from '../../assests/images/HTML.webp'
import CSS from '../../assests/images/CSS.png'
import BOOTSTRAP from '../../assests/images/BOOTSTRAP.jpg'
import TAILWIND from '../../assests/images/TAILWIND.jpg'
import JAVA from '../../assests/images/JAVA.png'
import REACT from '../../assests/images/REACT.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        <div>
            <div>
                <Carousel className='w-75 mx-5'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={HTML}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CSS}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BOOTSTRAP}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={TAILWIND}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={JAVA}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REACT}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br />
                <br />
                <p className=''>
                    Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
                    Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding.[2] Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills.
                </p>
            </div>
            <div className='mt-3 d-flex justify-content-center'>
                <Link to='/course'><Button>Get premium access</Button></Link>
            </div>
        </div>
    );
};

export default Home;