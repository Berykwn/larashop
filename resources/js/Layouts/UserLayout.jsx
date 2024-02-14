import { memo, lazy, Suspense } from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Fragments/Footer";

const Navbar = lazy(() => import("@/Components/Fragments/Navbar"));

const UserLayout = memo(({ children, auth, title, page }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Head title={title} />

            <Navbar auth={auth} page={page} />

            <main className="lg:px-24 px-5">{children}</main>

            <Footer />
        </Suspense>
    );
});

export default UserLayout;
