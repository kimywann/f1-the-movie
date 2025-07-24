import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import Home from "./pages/home/Home";
import Intro from "./pages/Intro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

export default router;
