import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BooksContext = createContext();

const BookContext = ({ children }) => {
  const [readListBook, setReadListBook] = useState([]);
  const [wishListBook, setWishListBook] = useState([]);

  const handleMarkAsRead = (details) => {

    const isWishListBookExist = wishListBook.find((book) => book.bookId === details.bookId);

    if(isWishListBookExist){
        toast.error("This book is Already Exist in Wishlist")
        return;
    }
    // console.log(details)
    const isExistBook = readListBook.find(
      (book) => book.bookId === details.bookId,
    );
    // console.log(isExistBook)
    if (isExistBook) {
      toast.error("This book is already Exist");
    } else {
      setReadListBook([...readListBook, details]);
      toast.success(`${details.bookName} is added byy ReadList`);
    }
  };
   const handleAddToWishList = (details) => {

    const isReadListBookExist = readListBook.find((book) => book.bookId === details.bookId);

    if(isReadListBookExist){
        toast.error("This book is Already Exist in ReadList")
        return;
    }

    // console.log(details)
    const isExistBook = wishListBook.find((book) => book.bookId === details.bookId);
    // console.log(isExistBook)
    if(isExistBook){
       toast.error("This book is already Exist")
    }
    else{
      setWishListBook([...wishListBook,details])
      toast.success(`${details.bookName} is added byy WishList`)
    }
  }
  const data = {
    readListBook,
    setReadListBook,
    handleMarkAsRead,
    wishListBook, 
    setWishListBook,
    handleAddToWishList
  };
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BookContext;
