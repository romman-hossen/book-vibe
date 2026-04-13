import React, { useContext } from "react";
import { BooksContext } from "../../Components/Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "../../Components/ListedBooks/ReadBook";
import WishListBook from "../../Components/ListedBooks/WishListBook";

const Books = () => {
  const { readListBook, wishListBook } = useContext(BooksContext);
  //   console.log(readListBook);
  return (
    <div className="container mx-auto ">
      <h2
        className="text-3xl font-bold py-9 bg-black/5
     text-center rounded-2xl my-9"
      >
        Books
      </h2>
      <div className="flex justify-center mb-8">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <ReadBook />
        </TabPanel>
        <TabPanel>
          <WishListBook />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
