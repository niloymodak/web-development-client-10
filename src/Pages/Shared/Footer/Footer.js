import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
    return (
        <div className='d-flex justify-content-center bg-dark mt-5'>
            <div>
                <h5 className='mt-4 text-white-50 text-center'>Follow Us On</h5>
                <div className='d-flex'>
                    <ListGroup className='me-2'>
                        <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className='me-2'>
                        <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className='me-2'>
                        <ListGroup.Item className='mb-2'> <FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className='me-2'>
                        <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default Footer;