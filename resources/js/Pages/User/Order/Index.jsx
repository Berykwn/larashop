import Breadcrumb from "@/Components/Elements/Breadcrumb";
import SecondaryButton from "@/Components/Elements/Button/SecondaryButton";
import EyeIcon from "@/Components/Icons/Eye";
import PayIcon from "@/Components/Icons/Pay";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, order }) => {
    return (
        <UserLayout auth={auth} title="Order" page="order">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb data={["Beranda", "Order", "My Transaction"]} />
                    <h5 className="font-semibold text-xl mt-2">
                        My Transaction
                    </h5>

                    <div className="relative overflow-x-auto my-4">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-b">
                            <thead className="text-sm text-gray-700 bg-white border-b">
                                <tr>
                                    <th scope="col" className="py-3">
                                        Transaction
                                    </th>
                                    <th scope="col" className="py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="py-3">
                                        Amount
                                    </th>
                                    <th scope="col" className="py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.length ? (
                                    order.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b"
                                        >
                                            <td className="py-4">
                                                TransactionID-{item.id}
                                            </td>
                                            <td className="py-4">
                                                {item.created_at}
                                            </td>
                                            <td className="py-4">
                                                {usePriceFormated(item.amount)}
                                            </td>
                                            <td className="py-4">
                                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <SecondaryButton className="mr-2 lg:mb-0 mb-2">
                                                    <PayIcon />
                                                    Pay
                                                </SecondaryButton>
                                                <Link className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 disabled:opacity-25 transition ease-in-out duration-150">
                                                    <EyeIcon />
                                                    Detail
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center py-4 text-red-500"
                                        >
                                            No data in the table
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Index;
