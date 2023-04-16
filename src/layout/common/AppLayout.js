import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
    return (
        <Fragment>
            <h1>MAIN LAYOUT</h1>
            <header>
                <Header />
            </header>
            <div className="content">
                <Outlet />
            </div>
        </Fragment>
    );
}

export default AppLayout;
