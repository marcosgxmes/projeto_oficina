import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Sugestao } from "./pages/sugestao";
import { Agradecimento } from "./pages/agradecimento";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sugestao/:id",
        element: <Sugestao />,
      },
      {
        path: "/agradecimento",
        element: <Agradecimento />,
      },
    ],
  },
  
]);

export { router };
