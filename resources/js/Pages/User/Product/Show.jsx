import CartPlusIcon from "@/Components/Icons/CartPlus";
import LoveIcon from "@/Components/Icons/Love";
import MinusIcon from "@/Components/Icons/Minus";
import PlusIcon from "@/Components/Icons/Plus";
import usePriceFormated from "@/Hooks/usePriceFormated";
import UserLayout from "@/Layouts/UserLayout";
import React, { useState } from "react";

const Show = ({ auth, products }) => {
    const formattedPrice = usePriceFormated(products.price);
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 0 ? prevQuantity - 1 : 0
        );
    };
    return (
        <UserLayout auth={auth} title="Show Product" page="products">
            <section className="lg:py-8 overflow-hidden bg-white font-poppins">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div className="sticky top-0 z-50 overflow-hidden">
                                <div
                                    className="relative"
                                    style={{ height: "450px" }}
                                >
                                    <img
                                        src={products.thumbnail}
                                        alt={products.name}
                                        className="object-contain w-full h-full "
                                    />
                                </div>
                                <div className="flex-wrap gap-2 hidden md:flex ">
                                    <div className="w-1/2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-yellow-100 hover:border-yellow-300 "
                                        >
                                            <img
                                                src={products.thumbnail}
                                                alt={products.name}
                                                className="object-cover w-full lg:h-32"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-1/2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-yellow-100 hover:border-yellow-300 "
                                        >
                                            <img
                                                src={products.thumbnail}
                                                alt={products.name}
                                                className="object-cover w-full lg:h-32"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="pb-6 mb-8 border-b border-gray-200">
                                    <span className="text-lg font-medium text-rose-500">
                                        {products.tag}
                                    </span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold md:text-4xl">
                                        {products.name}
                                    </h2>
                                    <div class="flex flex-wrap items-center mb-6">
                                        <ul class="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <a
                                            class="mb-4 text-xs underline dark:hover:text-gray-300 lg:mb-0"
                                            href="#"
                                        >
                                            Be the first to review the product
                                        </a>
                                    </div>
                                    <p className="max-w-md text-sm text-gray-700">
                                        {products.description}
                                    </p>
                                    <p className="max-w-md mb-8 text-gray-700">
                                        {products.content}
                                    </p>

                                    <p className="inline-block text-2xl font-semibold text-gray-700 ">
                                        <span>{formattedPrice}</span>
                                        <span className="ml-2 text-base font-normal text-gray-500 line-through">
                                            {formattedPrice}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center ">
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <div className="w-28">
                                            <form className="max-w-xs mx-auto">
                                                <div className="relative flex items-center max-w-[8rem]">
                                                    <button
                                                        type="button"
                                                        id="decrement-button"
                                                        onClick={
                                                            handleDecrement
                                                        }
                                                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                                    >
                                                        <MinusIcon
                                                            className="w-3 h-3 text-gray-900"
                                                            fill="none"
                                                        />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id="quantity-input"
                                                        data-input-counter
                                                        value={quantity}
                                                        readOnly
                                                        aria-describedby="helper-text-explanation"
                                                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 placeholder-gray-400"
                                                        placeholder="999"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        id="increment-button"
                                                        onClick={
                                                            handleIncrement
                                                        }
                                                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                                    >
                                                        <PlusIcon
                                                            className="w-3 h-3 text-gray-900"
                                                            fill="none"
                                                        />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <button className="w-full h-10 p-2 mr-4 bg-red-500 text-gray-50 hover:bg-red-600 ">
                                            Buy Now
                                        </button>
                                    </div>
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-white hover:bg-gray-100 hover:border-gray-200">
                                            <CartPlusIcon
                                                width="22"
                                                height="22"
                                                fill="gray"
                                            />
                                        </button>
                                    </div>
                                    <div className="mb-4 lg:mb-0">
                                        <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-white hover:bg-gray-100 hover:border-gray-200">
                                            <LoveIcon
                                                width="22"
                                                height="22"
                                                fill="gray"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Show;
