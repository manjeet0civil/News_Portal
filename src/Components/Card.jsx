import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Card = (props) => {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    console.log("Cards ke andaer")

    function clickHandler() {
        // Logic
        if (likedCourses.includes(props.course.publishedAt)) {
            // pahle se liked 
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.publishedAt));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.publishedAt]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.publishedAt]);
            }
            toast.success("Liked Successfully");
        }
    }

//      const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(props.course.url); // internal route like "/courses/123"
//   }

    return (
        

        <NavLink to={props.course.url} className="block" >
        
        <div className='bg-bgDark bg-opacity-80 w-[300px] h-[400px] rounded-md overflow-hidden ' 
             >
            <div className='relative '>
                <img src={props.course.urlToImage} alt="Course Image" className='' />

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={(e) => {
            e.preventDefault();   
            e.stopPropagation();  
            clickHandler();       
          }}>
                        {
                            !likedCourses.includes(props.course.publishedAt) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>



            <div className='p-4'>
                <p className='text-white text-lg underline font-semibold leading-6'>{props.course.title}</p>
                <p className='mt-2 text-white'>
                    {props.course.description?.length > 100
    ? props.course.description.substring(0, 100) + "..."
    : props.course.description || "No description available"
                    }

                </p>

                <div className='mt-4 text-white flex justify-between items-center'>
                    <p>
                    {props.course.publishedAt}
                </p>
                

                </div>
                
            </div>

        </div>
        </NavLink>
        
    )
}

export default Card