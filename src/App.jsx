import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About Us/About";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:slug",
          element: <BlogDetails />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
