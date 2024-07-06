import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;