import { memo, lazy, Suspense } from "react";
import { Head } from "@inertiajs/react";

const Navbar = lazy(() => import("@/Components/Fragments/Navbar"));

const UserLayout = memo(({ children, auth, title }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Head title={title} />
            <Navbar auth={auth} />
            <main className="lg:px-24 px-5">{children}</main>
        </Suspense>
    );
});

export default UserLayout;
