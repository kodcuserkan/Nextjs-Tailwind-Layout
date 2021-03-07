import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
        <div className="relative">
            <Navbar />
                <div className="h-auto pt-16 pb-96 min-h-screen">
                    {children}
                </div>
            <Footer />
        </div>
    );
};

export default Layout;
