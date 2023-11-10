import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subheading="check it out!"
                heading="Fetured Items"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Oct 21,2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit earum minus ipsa explicabo tenetur, iure ullam rerum quia quidem laborum ducimus temporibus quaerat distinctio? Numquam vero laboriosam odit excepturi nisi ducimus dolorem nihil! Minima quod in deleniti reiciendis libero iusto. Perspiciatis ullam repudiandae minima itaque asperiores nulla libero sequi earum.</p>
                    <button className="btn btn-outline border-0 border-b-4 btn-warning">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;