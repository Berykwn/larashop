import { Link } from "@inertiajs/react";
import React from "react";

const Paginator = React.memo(({ data }) => {
    const { from, to, total, prev_page_url, next_page_url } = data;

    return (
        <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-semibold text-gray-900">{from}</span> to{" "}
                <span className="font-semibold text-gray-900">{to}</span> of{" "}
                <span className="font-semibold text-gray-900">{total}</span>{" "}
                Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <Link
                    href={prev_page_url}
                    className="flex items-center justify-center px-3 h-8 text-sm bg-white hover:bg-gray-200 rounded-s border border-gray-300"
                >
                    Prev
                </Link>
                <Link
                    href={next_page_url}
                    className="flex items-center justify-center px-3 h-8 text-sm bg-white hover:bg-gray-200 rounded-e border border-gray-300"
                >
                    Next
                </Link>
            </div>
        </div>
    );
});

export default Paginator;
