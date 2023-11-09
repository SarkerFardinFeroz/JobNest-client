import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddAJob from "../pages/AddAJob/AddAJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import JobDetails from "../pages/JobDetailsPage/JobDetails";
import JobUpdate from "../pages/JobUpdate/JobUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivetRoute>
            <AppliedJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-nest-server-ten.vercel.app/job-details/${params.id}`),
      },
      {
        path: "/add-job",
        element: (
          <PrivetRoute>
            <AddAJob />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivetRoute>
            <JobUpdate />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-nest-server-ten.vercel.app/job-details/${params.id}`),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivetRoute>
            <MyJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
