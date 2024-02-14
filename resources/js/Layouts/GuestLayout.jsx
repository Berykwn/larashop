import ApplicationLogo from "@/Components/Elements/ApplicationLogo";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center pt-6 sm:pt-0">
            <div className="flex flex-col items-center text-center mb-3">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                <span className="-mt-1 text-xs font-semibold">
                    Lara<span className="text-red-400">shop.</span>
                </span>
            </div>

            <main>{children}</main>
        </div>
    );
}
