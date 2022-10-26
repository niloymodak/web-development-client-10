import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaStar } from "react-icons/fa";

const CourseSummary = ({ course }) => {
    const { title, teacher, details, image_url, rating, total_class } = course;
    console.log(course);
    return (
        <div>
            <Card className="mb-5">
                <Card.Header>
                    <div className='d-flex '>
                        <Image
                            roundedCircle
                            className='me-3'
                            src={teacher?.img}
                            style={{ height: '50px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'>Course Teacher: {teacher?.name}</p>
                            <p>Class Starting: {teacher?.starting_date}</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} style={{ height: 300, width: 300 }} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between mb-5">
                    <div>
                        Total Class: {total_class}
                    </div>
                    <div className='d-flex'>
                        <FaStar className='mt-1'></FaStar>
                        <span className='ms-1 mb-1'>{rating.rating}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default CourseSummary;