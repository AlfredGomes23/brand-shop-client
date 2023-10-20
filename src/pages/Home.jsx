import AuthorizedImporter from "../components/AuthorizedImporter";
import Banner from "../components/Banner";
import BeAPart from "../components/BeAPart";
import Brands from "../components/Brands";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <AuthorizedImporter></AuthorizedImporter>
            <BeAPart></BeAPart>
        </div>
    );
};

export default Home;