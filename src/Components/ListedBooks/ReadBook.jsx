import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../Context/BookContext';
import BookData from '../../pages/Homepage/AllBooks/BookData';

const ReadBook = ({sortingType}) => {
    const {readListBook} = useContext(BooksContext);
    
    const [filteredReadList,setFilteredReadList] = useState(readListBook)
    useEffect(() =>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...readListBook].sort((a,b) =>a.totalPages - b.totalPages);
                // console.logA(sortedData)
                setFilteredReadList(sortedData);
            }
            else if(sortingType === 'Rating'){
                const sortedData = [...readListBook].sort((a,b) =>b.rating - a.rating);
                setFilteredReadList(sortedData)
                // console.log("data")
            }
        } 
       
    },[sortingType,readListBook])
    
    // console.log(readListBook)
    if(filteredReadList.length === 0){
        return(
            <div className='h-[50vh] bg-black/5 flex items-center justify-center rounded-2xl mt-10 '>
                    <h3 className='text-4xl font-extrabold '>No readList data found !!</h3>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            {
                filteredReadList.map((books,ind) => 
                    <BookData key={ind} books={books}/>
                )
            }
            
        </div>
    );
};

export default ReadBook;