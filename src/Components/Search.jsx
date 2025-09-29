import React, { useState } from 'react'

function Search(props) {
    const [searchValue, setSearchValue] = useState("");
    let setCategory = props.setCategory;

    function handler(e) {
        setSearchValue(e.target.value);
    }

    function handleSearch() {
        if (searchValue.trim()) {
            setCategory(searchValue.trim());
        } else {
            alert("Please Enter search Value");
        }
    }

    return (
        <div className='flex w-full mx-auto gap-3 items-center ml-3'>
            <div className='w-full max-w-[1200px]'>
                <input 
                    type="text" 
                    placeholder='Search...' 
                    className='border border-gray-400 rounded-md p-2 w-full'
                    value={searchValue}
                    onChange={handler}
                />
            </div>
            <div>
                <button 
                    className='bg-blue-500 text-white px-6 py-2 rounded-md  hover:bg-blue-600 transition-colors duration-200 hover:cursor-pointer'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search
