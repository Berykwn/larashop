import Navbar from "@/Components/Fragments/Navbar";

const Home = ({ auth }) => {
    return (
        <>
            <Navbar auth={auth} />
        </>
    );
};

export default Home;
