import { useRoutes } from "react-router-dom";
import AppLayout from "../layout/common/AppLayout";
import Home from "../pages/Home";
import ListTodoPage from "../pages/ListTodoPage";
import LoginPage from "../pages/LoginPage";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/create", element: <ListTodoPage /> },
                { path: "/list", element: <ListTodoPage /> },
                { path: "/login", element: <LoginPage /> },
            ],
        },
    ]);
};

export default Router;
