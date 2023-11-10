
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hook/UseMenu";


const PopulerMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })


    // }, [])
    return (
        <div>
            <section className="mb-12">
                <SectionTitle heading="Form our menu" subheading="Popular Items"></SectionTitle>

                <div className="grid md:grid-cols-2 gap-4">
                    {
                        popular.map(item => <MenuItem key={item._id}
                            item={item}></MenuItem>)
                    }
                </div>
                <button className="btn btn-outline border-0 border-b-4 btn-warning">View full menu</button>
            </section>

        </div>
    );
};

export default PopulerMenu;