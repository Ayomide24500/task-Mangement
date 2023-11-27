import Layout from "../components/Layout";
import HomeScreen from "../Pages/HomeScreen";
import { createBrowserRouter } from "react-router-dom";
import Sign_up from "../Auth/Sign_up";
import PrivateRoute from "./PrivateRoute";
import Sign_in from "../Auth/Sign_in";
import RegisterBroMo from "../Auth/register-Bromo";
import RegisterPreMo from "../Auth/register-premo";
import Pricing from "../Pages/Pricing";
import TaskManagementDashboard from "../Pages/dashboard";
import CodeInputBox from "../Auth/Uniqroute";
// import LandingPage from "../Pages/Hero";
// import Header from "../components/Header";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/signup",
    element: <Sign_up />,
  },
  {
    path: "/signin",
    element: <Sign_in />,
  },
  {
    path: "/codeinpt",
    element: <CodeInputBox />,
  },
  {
    path: "/BromosignUp",
    element: <RegisterBroMo />,
  },
  {
    path: "/PremosignUp",
    element: <RegisterPreMo />,
  },
  {
    path: "/dashboard",
    element: <TaskManagementDashboard />,
  },
]);
