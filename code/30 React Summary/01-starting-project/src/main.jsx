import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {action as postAdd} from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: '/create-post', element: <NewPost />, action: postAdd }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
