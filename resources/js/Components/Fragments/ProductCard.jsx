import React, { useState } from "react";
import LoveIcon from "../Icons/Love";
import { Link } from "@inertiajs/react";
import Spinner from "../Elements/Spinner";
import usePriceFormated from "@/Hooks/usePriceFormated";

const ProductCard = ({ data }) => {
    const formattedPrice = usePriceFormated(data.price);

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Link href={route('user.product.show')} data={{ id: data.id }} className="">
            <div className="bg-white rounded-lg overflow-hidden shadow max-w-xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl hover:shadow-md">
                <div className="relative">
                    <img
                        className="w-full"
                        src={data.thumbnail}
                        style={{ display: isLoading ? "none" : "block" }}
                        onLoad={handleImageLoad}
                        alt="Product Image"
                    />
                    {isLoading && (
                        <div className="mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Spinner />
                        </div>
                    )}
                    <div className="absolute top-0 right-0 bg-red-400 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                        {data.tag}
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium mb-2">
                            {data.name}
                        </h3>
                        <span>
                            <LoveIcon className="w-5 mt-0.5" />
                        </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-2">
                        {data.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {data.categories && data.categories.length ? (
                            data.categories.map((item, index) => (
                                <span
                                    key={index}
                                    className="bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full"
                                >
                                    {item.name}
                                </span>
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-md">
                            {formattedPrice}
                        </span>
                        {/* <Link className="text-xs font-meidum bg-white hover:bg-slate-400 hover:text-white border border-slate-300 text-slate-700 rounded p-2">
                        Detail
                    </Link> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
