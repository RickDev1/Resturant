import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NabBar from "../Pages/Shared/Nabbar/NabBar";

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;