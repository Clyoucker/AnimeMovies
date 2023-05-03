import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { useEffect } from 'react';

import Home from './assets/pages/Home';
import Anime from './assets/pages/Anime';

export default function App(){
  const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
  const routers = createBrowserRouter([
    {path:"/",element: <Home />,},
    {path:"/Anime/:id",element: <Anime />,},
  ]);

  useEffect(()=>{
    const page = document.querySelector(".page");
    page?.setAttribute("data-theme",String(theme));
  },[theme])


  return <RouterProvider router={routers} />;
}