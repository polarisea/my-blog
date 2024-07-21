import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      {
        index: true,
        lazy: () => import("./pages/admin/authPage"),
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
