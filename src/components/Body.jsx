import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import GptSearch from "./GptSearch";


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    // {
    //   path: "/gpt",
    //   element: <GptSearch />,
    // },
    
  ]);

 

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;