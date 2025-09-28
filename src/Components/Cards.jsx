import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    const [likedCourses, setLikedCourses] = useState([]);
    

  
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {(!props.courses || props.courses.length === 0) && (
    <h1 className="text-3xl text-white font-bold">No Data Found</h1>
  )}
               
               {Array.isArray(props.courses) && props.courses.length > 0 ? (
  props.courses.map((course) => (
    <Card 
      key={course.publishedAt} 
      course={course} 
      likedCourses={likedCourses} 
      setLikedCourses={setLikedCourses} 
    />
  ))
) : null}
        </div>
    );
};

export default Cards;
