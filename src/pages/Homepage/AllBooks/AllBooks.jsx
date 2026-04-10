import React, { use } from 'react';
import BookData from './BookData';

const booksPromise = fetch("/booksData.json").then((res) => res.json());
// console.log(booksPromise)
const AllBooks = () => {
    const booksData = use(booksPromise)
    // console.log(booksData)
    return (
        <div className='container mx-auto'>
            <h2 className='playfair text-4xl font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-3 md:pl-0 mt-9 mb-28'>
                {booksData.map((books,ind) =>{return <BookData key={ind} books={books}></BookData>})}
            </div>
            
        </div>
    );
};

export default AllBooks;