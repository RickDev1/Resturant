import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hook/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>|Menu|</title>

            </Helmet>

            <Cover img={menuImg} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTitle subheading="Don't Miss" heading="today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory items={dessert} title={'desserts'} img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;