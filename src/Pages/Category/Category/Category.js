import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../Shared/CourseSummary/CourseSummary';

const Category = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            {
                allcourse.map(course => <CourseSummary
                    key={course._id}
                    course={course}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Category;