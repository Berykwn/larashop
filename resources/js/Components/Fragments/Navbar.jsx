import React, { lazy, useState } from "react";
import { Link } from "@inertiajs/react";

import Dropdown from "@/Components/Fragments/Dropdown";
import ResponsiveNavLink from "@/Components/Elements/ResponsiveNavLink";

const ApplicationLogo = lazy(() => import("@/Components/Elements/ApplicationLogo"));
const SearchIcon = lazy(() => import("@/Components/Icons/Search"));
const ShoppingCartIcon = lazy(() => import("@/Components/Icons/ShoppingCart"));
const TransactionReportIcon = lazy(() =>
    import("@/Components/Icons/TransactionReport")
);
const ArrowDownIcon = lazy(() => import("@/Components/Icons/ArrowDown"));
const LoveIcon = lazy(() => import("@/Components/Icons/Love"));

const Navbar = ({ auth, page }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const toggleNavigationDropdown = () => {
        setShowingNavigationDropdown((prevState) => !prevState);
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-screen-xl grid grid-cols-5 items-center justify-between mx-auto lg:p-0 p-2">
                <Link href="/" className="col-span-1">
                    <div className="flex flex-col items-center text-center my-2">
                        <ApplicationLogo className="w-12 h-12 fill-current text-gray-500" />
                        <span className="-mt-1 text-xs font-semibold">
                            Lara<span className="text-red-400">shop.</span>
                        </span>
                    </div>
                </Link>

                <div className="col-span-3 flex items-center justify-center">
                    <form className="lg:w-full md:w-4/5 w-3/4">
                        <div className="relative">
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Product..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 lg:px-4 lg:py-2 lg:bottom-1 px-2 py-1 bottom-2 bg-stone-600 hover:bg-stone-500 font-medium rounded-lg"
                            >
                                <SearchIcon className="w-5 h-5" fill="white" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 flex justify-end">
                    <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
                        {!auth.user ? (
                            <li className="lg:relative flex gap-2">
                                <div className="hidden sm:flex sm:items-center sm:ms-6">
                                    <div className="ms-3 relative">
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("login")}
                                                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 transition ease-in-out duration-150"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 transition ease-in-out duration-150"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li className="lg:relative flex gap-2">
                                <div className="hidden sm:flex sm:items-center sm:ms-6">
                                    <LoveIcon
                                        className="w-6 mr-2"
                                        fill="#57534e"
                                    />
                                    <ShoppingCartIcon
                                        className="w-6 mr-2"
                                        fill="#57534e"
                                    />
                                    <TransactionReportIcon
                                        className="w-6"
                                        fill="#57534e"
                                    />
                                    <div className="ms-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {auth.user.name}
                                                        <ArrowDownIcon
                                                            className="ms-2 -me-0.5 h-4 w-4"
                                                            fill="currentColor"
                                                        />
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            </li>
                        )}
                        <li className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={toggleNavigationDropdown}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {showingNavigationDropdown && (
                <div className="block sm:hidden shadow-xl">
                    <div className="pt-2 pb-3 space-y-1">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user ? (
                                    <>
                                        <div className="flex justify-center gap-2">
                                            <span className="lg:text-md text-sm font-medium text-slate-600 mt-0.5">
                                                {auth.user.name}
                                            </span>
                                            <div className="font-medium text-sm text-gray-500">
                                                {auth.user.email}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center gap-2">
                                            <Link
                                                href={route("login")}
                                                className="lg:text-md text-sm font-medium text-slate-600 mt-0.5"
                                            >
                                                Login
                                            </Link>
                                            {" | "}
                                            <Link
                                                href={route("register")}
                                                className="lg:text-md text-sm font-medium text-slate-600 mt-0.5"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {auth.user && (
                        <div className="pb-1 border-t border-gray-200">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <NavLink page={page} />
        </nav>
    );
};

const NavLink = ({ page }) => {
    return (
        <div className="flex justify-center">
            <div className="text-sm font-medium text-center text-gray-500">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <Link
                            href={route("user.home")}
                            className={`inline-block p-4 hover:text-gray-600 hover:border-gray-300 ${
                                page === "home"
                                    ? "text-red-600 border-b-2 border-red-300"
                                    : "border-b-2 border-transparent"
                            }`}
                            aria-current="page"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href={route("user.products")}
                            className={`inline-block p-4 hover:text-gray-600 hover:border-gray-300 ${
                                page === "products"
                                    ? "text-red-600 border-b-2 border-red-300"
                                    : "border-b-2 border-transparent"
                            }`}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                        >
                            About
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
