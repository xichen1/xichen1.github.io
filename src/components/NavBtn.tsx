import React from "react";
import {useStaticQuery, graphql} from "gatsby";

interface NavBtnProps {
    name: string;
    link?: string;
}

const NavBtn = ({name, link}: NavBtnProps) => {
    const pdfFile = useStaticQuery(graphql`{
        pdf: file(name: {eq: "resume"}, extension: {eq: "pdf"}) {
            name
            publicURL
        }
    }`);

    const linkTo = link ? link : pdfFile.pdf.publicURL;
    return (
        <div className="pr-10">
            <a href={linkTo} target="_blank">{name}</a>
        </div>
    );
};

export default NavBtn;