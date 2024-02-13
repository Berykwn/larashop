import UserLayout from "@/Layouts/UserLayout";
import React from "react";
import CategoryProduct from "../Home/Partials/CategoryProduct";
import ProductCard from "@/Components/Fragments/ProductCard";
import Paginator from "@/Components/Fragments/Paginator";

const Index = ({ auth, category, products }) => {
    return (
        <UserLayout auth={auth} title="Beranda" page="products">
            <CategoryProduct data={category} />

            <section className="mt-1">
                <h5 className="font-medium text-lg">All products</h5>
                {products.data.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-y-8 mt-4">
                        {products.data.map((item, index) => (
                            <ProductCard key={index} data={item} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-4 p-4 mb-4 text-sm w-full lg:w-3/4 text-red-800 rounded-lg bg-red-50 ">
                        <span className="font-medium">Product not found!</span>{" "}
                        Change a few things up and try submitting again.
                    </div>
                )}

                <div className="my-6">
                    <Paginator data={products} />
                </div>
            </section>
        </UserLayout>
    );
};

export default Index;
