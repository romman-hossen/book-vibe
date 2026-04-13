import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../Context/BookContext';
import BookData from '../../pages/Homepage/AllBooks/BookData';

const WishListBook = ({sortingType}) => {
  const { wishListBook} = useContext(BooksContext);
    // console.log(readListBook)
     const [filteredWishListBook,setFilteredWishListBook] = useState(wishListBook);
        useEffect(() =>{
            if(sortingType){
                if(sortingType === 'pages'){
                    const sortedData = [...wishListBook].sort((a,b) =>a.totalPages - b.totalPages);
                    // console.logA(sortedData)
                    setFilteredWishListBook(sortedData);
                }
                else if(sortingType === 'Rating'){
                    const sortedData = [...wishListBook].sort((a,b) =>b.rating - a.rating);
                    setFilteredWishListBook(sortedData)
                    // console.log("data")
                }
            } 
           
        },[sortingType,wishListBook])
    if(filteredWishListBook.length === 0){
        return(
            <div className='h-[50vh] bg-black/5 flex items-center justify-center rounded-2xl mt-10 '>
                    <h3 className='text-4xl font-extrabold '>No wishList data found !!</h3>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            {
                filteredWishListBook.map((books,ind) => 
                    <BookData key={ind} books={books}/>
                )
            }
            
        </div>
    );
};
export default WishListBook;