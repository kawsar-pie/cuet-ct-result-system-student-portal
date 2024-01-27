import ErrorPage from "../components/ErrorPage/ErrorPage";
import Layout from "../components/Layout";
import UserProfile from "../components/UserProfile/UserProfile";
import Courses from "../pages/Courses";
import EnrolledSemesters from "../pages/EnrolledSemesters.jsx/EnrolledSemesters";
import Login from "../pages/Login/Login";

const mainRouter = [
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/enrolled-semesters",
        element: <EnrolledSemesters></EnrolledSemesters>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
];

export default mainRouter;
