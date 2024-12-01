import React  from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProfilePage } from "./components/ProfilePage";
import { ProfilesPage } from "./components/ProfilesPage";
import { NotFoundPage } from "./components/NotFoundPage";

const router = createBrowserRouter([{
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/profiles',
    element: <ProfilesPage/>,
    children: [
      {
        path: '/profiles/:id',
        element: <ProfilePage/>
      }
    ]
  },
]);

function App() { 
  
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App;