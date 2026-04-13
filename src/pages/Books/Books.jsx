
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "../../Components/ListedBooks/ReadBook";
import WishListBook from "../../Components/ListedBooks/WishListBook";
import { useState } from "react";

const Books = () => {
  const [sortingType,setSortingType] = useState('')

  console.log(sortingType)
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
          <div tabIndex={0} role="button" className="btn m-1 bg-green-400 rounded-xl text-white">
            Short by ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setSortingType('pages')}>Pages</a>
            </li>
            <li>
              <a onClick={() => setSortingType('Rating')}>Rating</a>
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
          <ReadBook sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <WishListBook sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
