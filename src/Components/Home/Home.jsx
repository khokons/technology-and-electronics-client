import BrandCards from "../Card/BrandCards/BrandCards";
import Banner from "../Section/Banner/Banner";
import ExtraOne from "../Section/ExtraOne";
import ExtraTwo from "../Section/ExtraTwo";
import Footer from "../Section/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCards></BrandCards>
            <ExtraTwo></ExtraTwo>
            <ExtraOne></ExtraOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;