import Banner from "../components/Banner";
import BeAPart from "../components/BeAPart";
import BrandCard from "../components/BrandCard";
import Brands from "../components/Brands";
import TechNews from "../components/TechNews";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <BrandCard></BrandCard>
            <TechNews></TechNews>
            <BeAPart></BeAPart>
        </div>
    );
};

export default Home;