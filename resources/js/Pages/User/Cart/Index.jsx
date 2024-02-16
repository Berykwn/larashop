import Breadcrumb from "@/Components/Elements/Breadcrumb";
import DangerButton from "@/Components/Elements/Button/DangerButton";
import Modal from "@/Components/Fragments/Modal";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const Index = ({ auth, cart, amount, flash }) => {
    const [openingModal, setOpeningModal] = useState(false);

    const openModal = () => {
        setOpeningModal(true);
    };

    const closeModal = () => {
        setOpeningModal(false);
    };

    const [formValues, setFormValues] = useState({
        address: "",
        note: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("address", formValues.address);
        formData.append("note", formValues.note);
        formData.append("amount", amount);

        router.post("/order/create", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <UserLayout auth={auth} title="Cart" page="cart">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb data={["Beranda", "Cart", "My cart"]} />
                    <h5 className="font-semibold text-xl mt-2">My Cart</h5>

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
                                                <DangerButton
                                                    onClick={() => {
                                                        router.delete(
                                                            `/cart/remove/${item.id}`
                                                        );
                                                    }}
                                                >
                                                    Remove
                                                </DangerButton>
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
                                    {usePriceFormated(amount)}
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
                            <Link
                                href={route("user.products")}
                                className="w-auto h-10 p-2 bg-gray-500 text-gray-50 hover:bg-gray-600"
                            >
                                Go Back
                            </Link>
                            <button
                                onClick={openModal}
                                disabled={cart.length < 1}
                                className="w-auto h-10 p-2 bg-yellow-500 text-gray-50 hover:bg-yellow-600"
                            >
                                Checkout
                            </button>
                            
                            <Modal show={openingModal} onClose={closeModal}>
                                <div className="p-8">
                                    <h5 className="font-semibold text-lg">
                                        Order Information
                                    </h5>
                                    <span className="text-xs">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Itaque, cupiditate.
                                    </span>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                placeholder={auth.user.name}
                                                disabled
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="address"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Address
                                            </label>

                                            <textarea
                                                id="address"
                                                name="address"
                                                value={formValues.address}
                                                onChange={handleChange}
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Input your address..."
                                            ></textarea>
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="note"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Notes
                                            </label>
                                            <textarea
                                                id="note"
                                                name="note"
                                                value={formValues.note}
                                                onChange={handleChange}
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="notes..."
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-end mt-4 gap-1">
                                            <button
                                                onClick={closeModal}
                                                className="w-auto h-10 p-2 rounded bg-gray-500 text-gray-50 hover:bg-gray-600"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="w-auto h-10 p-2 rounded bg-yellow-500 text-gray-50 hover:bg-yellow-600"
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Index;
