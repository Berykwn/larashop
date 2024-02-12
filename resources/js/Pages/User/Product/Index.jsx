import UserLayout from "@/Layouts/UserLayout";
import React from "react";
import CategoryProduct from "../Home/Partials/CategoryProduct";

const Index = ({ auth, category, products }) => {
    return (
        <UserLayout auth={auth} title="Beranda">
            <CategoryProduct data={category} />
            <h5 className="font-medium text-2xl my-3">All products</h5>
        </UserLayout>
    );
};

export default Index;
