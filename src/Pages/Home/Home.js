import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HTML from '../../assests/images/HTML.webp'
import CSS from '../../assests/images/CSS.png'
import BOOTSTRAP from '../../assests/images/BOOTSTRAP.jpg'
import TAILWIND from '../../assests/images/TAILWIND.jpg'
import JAVA from '../../assests/images/JAVA.png'
import REACT from '../../assests/images/REACT.png'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/course-categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data));
    // }, [])

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
            {/* <div className='mt-5'>
                <h3 className='text-center'>All Course</h3>
                <div className='mt-3 d-flex justify-content-between' >
                    {
                        categories.map(category => <p key={category.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/category/${category.id}`}> {category.name}</Link>
                        </p>)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Home;