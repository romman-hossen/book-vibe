import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookData = ({ books }) => {
  // console.log(books);
  return (
    <Link to={`/bookDetails/${books.bookId}`} className="card bg-base-100 p-5 shadow-[0_0_5px_rgba(107,114,128,0.3)]  ">
      <figure className="bg-base-200 py-8 rounded-2xl overflow-hidden">
        <img src={books.image} alt={books.bookName} className="w-34 h-40 shadow-lg shadow-black/40 hover:scale-105 hover:rotate-0 transition-all duration-300" />
      </figure>
      <div className="space-y-5">
        <div className="flex gap-2 pt-6">
        {books.tags.map((tag,ind) => (
            <div tag = {tag} key={ind} className="badge bg-green-50 text-green-500 font-medium ">
            {/* <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div> */}
             {tag}
          </div>
        ))}
        </div>
        <h2 className="card-title text-2xl font-bold playfair">{books.bookName}</h2>
        <p className="font-medium">
           By : {books.author}
        </p>
        <div className="border-b border-b-gray-300 border-dashed"></div>
        
        <div className="flex flex-1 items-center justify-between ">
          {/* <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> */}
          <span>{books.category}</span>
          <span className="flex gap-1 items-center">{books.rating} <FaRegStar className="text-xl"/> </span>
        </div>
      </div>
    </Link>
  );
};

export default BookData;
