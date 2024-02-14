import UserLayout from "@/Layouts/UserLayout";
import React from "react";

const Index = ({ auth, cart }) => {
    console.log(cart);
    return (
        <UserLayout auth={auth} title="Cart" page="cart">

        </UserLayout>
    );
};

export default Index;
