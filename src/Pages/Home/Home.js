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
            </div>
            <div className='mt-3 d-flex justify-content-center'>
                <Link to='/course'><Button>Get premium access</Button></Link>
            </div>
        </div>
    );
};

export default Home;