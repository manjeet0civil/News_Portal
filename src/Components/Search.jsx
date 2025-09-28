import { type } from '@testing-library/user-event/dist/type'
import React from 'react'


function Search(props) {
    let setCategory = props.setCategory;
    let searchstring;
    function handler(e){
        e.preventDefault();
        searchstring=e.target.value;
        console.log(searchstring);
    }


  return (
    
        
       <div className='flex w-full mx-auto gap-3 items-center ml-3'>
        <div className='w-full max-w[1200px]'>
             <input type="text" placeholder='Search...' className='border border-gray-400 rounded-md p-2 w-full'
       value={props.query}
       onChange={(e) => handler(e)}
      />

        </div>

    <div>
       
            <button 
            className='bg-blue-500 text-white px-6 py-2 rounded-md  mt-6  hover:bg-blue-600 transition-colors duration-200 hover:cursor-pointer'
            onClick={()=>{
                searchstring?setCategory(searchstring):alert("Please Enter search Value");
            }}
            >Search</button>
            ;

        </div>


        
       
      
       
       </div>

      

    


   
  )
}

export default Search