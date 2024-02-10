import UserLayout from "@/Layouts/UserLayout";
import CategoryProduct from "./Partials/CategoryProduct";
import React, { useState } from "react";
import Spinner from "@/Components/Elements/Spinner";
import ProductCard from "@/Components/Fragments/ProductCard";

const Home = ({ auth, category }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <UserLayout auth={auth} title="Beranda">
            <CategoryProduct data={category} />

            <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Spinner />
                    </div>
                )}
                <img
                    src="image/bg1.png"
                    alt="bg1"
                    style={{ display: isLoading ? "none" : "block" }}
                    onLoad={handleImageLoad}
                />
            </div>

            <div className="mt-6">
                <h5 className="font-medium text-2xl">Recomendation products</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-y-8 mt-4">
                    <ProductCard />
                </div>
            </div>
        </UserLayout>
    );
};

export default Home;
