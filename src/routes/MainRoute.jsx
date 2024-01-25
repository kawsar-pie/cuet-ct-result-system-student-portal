import Layout from '../components/Layout';
import Login from '../pages/Login/Login';
import ErrorPage from '../components/ErrorPage/ErrorPage'
import UserProfile from '../components/UserProfile/UserProfile';
import EnrolledSemesters from '../pages/EnrolledSemesters.jsx/EnrolledSemesters';
import Courses from '../pages/Courses';

const mainRouter = [
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "",
                element: <Login></Login>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/enrolled-semesters",
                element: <EnrolledSemesters></EnrolledSemesters>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
];


export default mainRouter;