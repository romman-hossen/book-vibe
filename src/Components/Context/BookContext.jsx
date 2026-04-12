import React, { createContext, useState } from 'react';


export const BooksContext = createContext();

const BookContext = ({children}) => {

const [storeBook ,setStoreBook] = useState([]);

  const handleMarkAsRead = (details) => {
    // console.log(details)
    const isExistBook = storeBook.find((book) => book.bookId === details.bookId);
    // console.log(isExistBook)
    if(isExistBook){
      alert("This book is already Exist")
    }
    else{
      setStoreBook([...storeBook,details])
      alert(`${details.bookName} is added byy booklist`)
    }
  }
   const data ={
        storeBook,
        setStoreBook,
        handleMarkAsRead
    }
    return (
       <BooksContext.Provider value={data}>
        {children}
       </BooksContext.Provider>
    );
};

export default BookContext;