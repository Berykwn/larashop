import Breadcrumb from "@/Components/Elements/Breadcrumb";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, cart }) => {
    console.log(cart);
    return (
        <UserLayout auth={auth} title="Cart" page="cart">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb data={["Beranda", "Cart", "My cart"]} />
                    <h5 className="font-semibold text-xl mt-2">My Cart</h5>

                    <div className="pt-4 relative overflow-x-auto rounded">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-b">
                            <thead className="text-sm text-gray-700 bg-white border-b">
                                <tr>
                                    <th scope="col" className="py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length ? (
                                    cart.map((item, index) => (
                                        <tr key={index} className="bg-white">
                                            <td className="py-4">
                                                <div className="max-w-md bg-white overflow-hidden md:max-w-2xl">
                                                    <div className="md:flex">
                                                        <div className="md:shrink-0">
                                                            <img
                                                                className="h-36 w-36 object-cover rounded md:h-full md:w-48"
                                                                src={`${item.product.thumbnail}`}
                                                                alt="Product"
                                                            />
                                                        </div>
                                                        <div className="lg:p-8 py-2">
                                                            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">
                                                                {
                                                                    item.product
                                                                        .name
                                                                }
                                                            </div>
                                                            <p className="text-slate-500">
                                                                {
                                                                    item.product
                                                                        .description
                                                                }
                                                            </p>
                                                            <Link
                                                                href="#"
                                                                className="block mt-4 text-xs leading-tight text-black underline"
                                                            >
                                                                Click here to
                                                                see detail
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                {item.quantity}{" "}
                                                <span className="text-xs font-semibold">
                                                    /pcs
                                                </span>
                                            </td>
                                            <td className="py-4 font-semibold text-gray-900 dark:text-white">
                                                {usePriceFormated(
                                                    item.product.price
                                                )}
                                            </td>
                                            <td className="py-4">
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                >
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center py-4 text-red-500"
                                        >
                                            No items in the cart
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end flex-col items-end py-4">
                        <div>
                            <h5 className="text-md font-medium text-gray-500">
                                Sub total:{" "}
                                <span className="text-lg font-semibold text-black">
                                    {usePriceFormated(100000)}
                                </span>{" "}
                            </h5>
                        </div>
                        <p className="text-xs text-gray-500">
                            You're saving {usePriceFormated(200)}{" "}
                        </p>
                        <p className="mt-4 text-xs text-gray-500 text-right">
                            Taxes & shipping calculated at checkout Customs{" "}
                            <br />
                            services & international tracking provided
                        </p>

                        <div className="flex justify-end py-3 gap-2">
                            {" "}
                            <Link className="w-auto h-10 p-2 bg-gray-500 text-gray-50 hover:bg-gray-600">
                                Go Back
                            </Link>
                            <button className="w-auto h-10 p-2 bg-red-500 text-gray-50 hover:bg-red-600">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Index;
