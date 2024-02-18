import Breadcrumb from "@/Components/Elements/Breadcrumb";
import useDateFormat from "@/Hooks/useDateFormated";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

const Show = ({ auth, order, orderItem }) => {
    console.log(order);
    return (
        <UserLayout auth={auth} title="Detail Order" page="order">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb data={["Beranda", "Order", "My Order"]} />

                    <h5 className="font-semibold text-xl mt-2">Detail Order</h5>

                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                            {orderItem.length ? (
                                orderItem.map((item, index) => (
                                    <div className="max-w-lg mt-4">
                                        <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                                            <div className="relative w-32 h-32 flex-shrink-0">
                                                <img
                                                    className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                                                    loading="lazy"
                                                    src={`${item.product.thumbnail}`}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2 py-2">
                                                <p className="text-xl font-bold">
                                                    {item.product.name}
                                                </p>

                                                <p className="text-gray-500 text-xs">
                                                    {item.product.description}
                                                </p>

                                                <p className="text-gray-500 text-xs">
                                                    {usePriceFormated(
                                                        item.product.price
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-3">
                            <div className="p-4 shadow rounded">
                                <h5 className="font-semibold text-lg">
                                    Order Information
                                </h5>
                                <span className="text-xs">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Itaque, cupiditate.
                                </span>
                                <ul>
                                    <li className="flex gap-2 items-center justify-between py-3 border-b border-gray-300">
                                        <div className="flex items-center">
                                            <span className="text-gray-800 font-semibold">
                                                Address
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm text-right mt-5">
                                            {order.address}
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-center justify-between py-3 border-b border-gray-300">
                                        <div className="flex items-center">
                                            <span className="text-gray-800 font-semibold">
                                                Notes
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm text-right mt-5">
                                            {order.note}
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-center justify-between py-3 border-b border-gray-300">
                                        <div className="flex items-center">
                                            <span className="text-gray-800 font-semibold">
                                                Order date
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm text-right mt-5">
                                            {useDateFormat(order.created_at)}
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-center justify-between py-3 border-b border-gray-300">
                                        <div className="flex items-center">
                                            <span className="text-gray-800 font-semibold">
                                                Status
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm font-bold text-right mt-5">
                                            {usePriceFormated(order.amount)}
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-center justify-between py-3 border-b border-gray-300">
                                        <div className="flex items-center">
                                            <span className="text-gray-800 font-semibold">
                                                Amount
                                            </span>
                                        </div>
                                        {order.status === "pending" ? (
                                            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded">
                                                {order.status}
                                            </span>
                                        ) : (
                                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded">
                                                {order.status}
                                            </span>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Show;
