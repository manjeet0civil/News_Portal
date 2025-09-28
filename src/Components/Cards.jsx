import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    

  
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            { props.courses.length === 0 && <h1 className="text-3xl text-white font-bold">No Data Found</h1>}
               
               { props.courses.map((course) => {
                    return <Card course={course} key={course.publishedAt} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }
        </div>
    );
};

export default Cards;
