import { useRoutes } from "react-router-dom";
import AppLayout from "../layout/common/AppLayout";
import Home from "../pages/Home";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <AppLayout />,
            children: [{ path: "/", element: <Home /> }],
        },
    ]);
};

export default Router;
