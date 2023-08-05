import Weather from "@src/components/Footer/Weather";
import * as React from "react";
import CopyRight from "@src/components/Footer/CopyRight";

const Footer = () => {
    return (
        <div className="flex flex-row pt-8 pb-14 ">
            <Weather/>
            <CopyRight/>
        </div>
    );
};

export default Footer;