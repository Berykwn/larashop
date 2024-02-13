import React from "react";
import LoveIcon from "../Icons/Love";
import { Link } from "@inertiajs/react";

const ProductCard = ({ data }) => {
    function formatToRupiah(price) {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        });
        return formatter.format(price);
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow max-w-xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative">
                <img
                    className="w-full"
                    src={data.thumbnail}
                    alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-400 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    {data.tag}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <h3 className="text-lg font-medium mb-2">{data.name}</h3>
                    <span>
                        <LoveIcon className="w-5 mt-0.5" />
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-2">{data.description}</p>
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
                        {formatToRupiah(data.price)}
                    </span>
                    {/* <Link className="text-xs font-meidum bg-white hover:bg-slate-400 hover:text-white border border-slate-300 text-slate-700 rounded p-2">
                        Detail
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
