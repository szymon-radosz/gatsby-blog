import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./../styles/global.scss";

const Layout = ({ children }) => {
    return (
        <div class="site">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
