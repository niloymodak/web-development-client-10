import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-5'>
            <h3 className='text-center'>All Course</h3>
            <div className='text-center'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link style={{ textDecoration: 'none' }} className='' to={`/category/${category.id}`}> {category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Course;