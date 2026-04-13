import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BooksContext } from "../Context/BookContext";

const BookDetails = () => {

  const {handleMarkAsRead,handleAddToWishList} = useContext(BooksContext)
  const { bookId: paramBookId } = useParams();
  
  const bookDetails = useLoaderData();
  // console.log(bookDetails);
  const idDetails = bookDetails.find(
    (book) => book.bookId === Number(paramBookId),
  );
  console.log(idDetails);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = idDetails;



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 mt-12 container mx-auto">
      <figure className="flex justify-center items-center bg-black/5 rounded-2xl">
        <img className="h-120 w-100" src={image} alt={bookName} />
      </figure>
      <div className=" card-body space-y-4">
        <h2 className="card-title text-5xl font-bold playfair">{bookName}</h2>
        <p className="text-xl font-medium text-black/80">By : {author}</p>
        <div className="border-y py-5 border-gray-200 text-xl font-medium">
          {category}
        </div>
        <div className="text-black/70">
          <span className="font-bold text-black">Review : </span>
          <span>{review}</span>
        </div>
      
        <div className="flex items-center gap-3 pt-6">
          <h3 className="font-bold text-xl">Tag</h3>
          {tags.map((tag,ind) => (
            <div
              tag={tag}
              className="badge bg-green-50 text-green-500 font-medium py-3"
              key={ind}
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="space-y-3">
            <div className="flex justify-between
             items-center">
                <span className="text-black/70">Number of Pages:</span>
                <span className="font-bold">{totalPages}</span>
            </div>
            <div className="flex justify-between  items-center">
                <span className="text-black/70">Publisher:</span>
                <span className="font-bold">{publisher}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-black/70">Year of Publishing:</span>
                <span className="font-bold">{yearOfPublishing}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-black/70">Rating:</span>
                <span className="font-bold">{rating}</span>
            </div>
        </div>
        <div className="flex gap-4  ">
            <button onClick={() => handleMarkAsRead(idDetails)} className="btn btn-outline">Mark as Read</button>
            <button onClick={() => handleAddToWishList(idDetails)} className="btn  btn-accent">Add to Wishlist</button>
        </div>        
      </div>
    </div>
  );
};

export default BookDetails;
