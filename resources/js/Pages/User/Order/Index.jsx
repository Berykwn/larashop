import Breadcrumb from "@/Components/Elements/Breadcrumb";
import SecondaryButton from "@/Components/Elements/Button/SecondaryButton";
import EyeIcon from "@/Components/Icons/Eye";
import PayIcon from "@/Components/Icons/Pay";
import useDateFormat from "@/Hooks/useDateFormated";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import { Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Index = ({ auth, order, flash }) => {
    const [token, setToken] = useState("");
    const [paymentId, setPaymentId] = useState(null);

    const process = async (id) => {
        try {
            const snapToken = order.find((item) => item.id === id)?.snap_token;

            if (snapToken) {
                setToken(snapToken);
                setPaymentId(id);
            } else {
                console.error("Snap token not found for ID:", id);
            }
        } catch (error) {
            console.error("Error processing transaction:", error);
        }
    };

    useEffect(() => {
        if (token && paymentId) {
            snap.pay(token, {
                onSuccess: () => {
                    router.post(`/order/payment/${paymentId}`);
                    setToken("");
                    setPaymentId(null);
                },
                onPending: (result) => {
                    localStorage.setItem("Pembayaran", JSON.stringify(result));
                    setToken("");
                    setPaymentId(null);
                },
                onError: (error) => {
                    console.log(error);
                    setToken("");
                    setPaymentId(null);
                },
                onClose: () => {
                    console.log("anda belum menyelesaikan pembayaran");
                    setToken("");
                    setPaymentId(null);
                },
            });
        }
    }, [token, paymentId]);

    useEffect(() => {
        const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransUrl;

        const midtransClientKey = "SB-Mid-client-6Heae5ZRd1Z5cl-Y";
        scriptTag.setAttribute("data-client-key", midtransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    return (
        <UserLayout auth={auth} title="Order" page="order">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb data={["Beranda", "Order", "My Order"]} />

                    <h5 className="font-semibold text-xl mt-2">My Order</h5>

                    {flash.message && (
                        <div className="my-3">
                            <div
                                className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
                                role="alert"
                            >
                                <p className="font-bold">
                                    Informational message
                                </p>
                                <p className="text-sm">{flash.message}</p>
                            </div>
                        </div>
                    )}

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
                                                {useDateFormat(item.created_at)}
                                            </td>
                                            <td className="py-4">
                                                {usePriceFormated(item.amount)}
                                            </td>
                                            <td className="py-4">
                                                {item.status === "pending" ? (
                                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded">
                                                        {item.status}
                                                    </span>
                                                ) : (
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded">
                                                        {item.status}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4">
                                                <SecondaryButton
                                                    onClick={() =>
                                                        process(item.id)
                                                    }
                                                    className="mr-2 lg:mb-0 mb-2"
                                                >
                                                    <PayIcon />
                                                    Pay
                                                </SecondaryButton>

                                                <Link
                                                    href={route(
                                                        "user.orders.show"
                                                    )}
                                                    data={{ id: item.id }}
                                                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 disabled:opacity-25 transition ease-in-out duration-150"
                                                >
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
