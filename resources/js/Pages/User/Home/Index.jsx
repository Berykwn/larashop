import Carousel from "@/Components/Fragments/Carousel";
import JacketIcon from "@/Components/Icons/Categories/Jacket";
import ShortPantsIcon from "@/Components/Icons/Categories/ShortPants";
import TshirtIcon from "@/Components/Icons/Categories/Tshirt";
import UserLayout from "@/Layouts/UserLayout";
import CategoryProduct from "./Partials/CategoryProduct";

const Home = ({ auth }) => {
    const data = [
        { src: "bg1.png", alt: "background1" },
        { src: "bg2.png", alt: "background2" },
        { src: "bg3.png", alt: "background3" },
    ];
    return (
        <UserLayout auth={auth}>
            <div className="py-4 max-w-screen-xl">
                <CategoryProduct />
            </div>
            <Carousel data={data} />
        </UserLayout>
    );
};

export default Home;
