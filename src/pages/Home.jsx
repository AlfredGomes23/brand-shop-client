import { Helmet } from "react-helmet-async";
import AuthorizedImporter from "../components/AuthorizedImporter";
import Banner from "../components/Banner";
import BeAPart from "../components/BeAPart";
import Brands from "../components/Brands";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Brands></Brands>
            <AuthorizedImporter></AuthorizedImporter>
            <BeAPart></BeAPart>
        </div>
    );
};

export default Home;