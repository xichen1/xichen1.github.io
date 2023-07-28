import {ReactNode} from "react";
import NavBar from "./NavBar";
import React from "react";
import ThemeContextWrapper from "@src/components/ThemeContextWrapper";

// const inter = Inter({subsets: ["latin"]});
const Layout = ({pageTitle, children}: { pageTitle: string, children: React.ReactNode }) => {
    return (
        <ThemeContextWrapper>
            <div className={`bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full 
            selection:bg-gray-50`}>
                <NavBar/>
                <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
        </ThemeContextWrapper>
    );
};

export default Layout;