import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      {
        index: true,
        lazy: () => import("./pages/admin/authPage"),
      },
      {
        path: "dashboard",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            lazy: () => import("./pages/admin/dashboard/overviewPage"),
          },
          {
            path: "posts",
            lazy: () => import("./pages/admin/dashboard/postsPage"),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
