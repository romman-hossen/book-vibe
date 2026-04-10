import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../Components/BookDetails/BookDetails";


export const router = createBrowserRouter([
  {
    path:"/",
    Component:MainLayout,
    children:[
      {index: true,
         Component:Homepage},
      {path:"/books",
        Component:Books},
      {
        path:"/bookDetails/:bookId",
        Component:BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
     errorElement:<ErrorPage />
  },
    


])