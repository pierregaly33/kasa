import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Headers from "./Header";

const Layout = () => {
    return (
        <>
            <main className="content">
                <Headers />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
