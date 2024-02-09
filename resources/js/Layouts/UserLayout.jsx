import Navbar from "@/Components/Fragments/Navbar";
import React from "react";

export default function UserLayout({ children, auth }) {
    return (
        <React.Fragment>
            <Navbar auth={auth} />

            <main className="lg:px-24 px-5">{children}</main>
        </React.Fragment>
    );
}
