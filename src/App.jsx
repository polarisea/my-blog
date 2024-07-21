import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";

const router = createBrowserRouter([{}]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
