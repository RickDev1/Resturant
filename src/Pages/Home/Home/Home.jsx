import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopulerMenu from "../Popularmenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mayer Dowa|Home|</title>

            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;