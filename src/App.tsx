import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Router/Home";
import { Login } from "./component/Router/Login";
import Registration from "./component/Router/Registration";
import Root from "./component/Router/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
      { path: "registration", element: <Registration /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
