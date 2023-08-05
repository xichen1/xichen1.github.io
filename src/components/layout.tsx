import NavBar from "./NavBar";
import React from "react";
import ThemeContextWrapper from "@src/components/ThemeContextWrapper";

const Layout = ({pageTitle, children}: { pageTitle: string, children: React.ReactNode }) => {
    return (
        <ThemeContextWrapper>
            <div className="">
                <NavBar/>
                <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">{children}</main>
            </div>
        </ThemeContextWrapper>
    );
};

export default Layout;