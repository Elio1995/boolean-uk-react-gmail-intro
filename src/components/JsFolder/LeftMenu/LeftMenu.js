import ActiveItem from "./ActiveItem";
import Item from "./Item";
import ItemToggle from "./ItemToggle";

function LeftMenu() {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <ActiveItem />
                <Item />
                <ItemToggle />
            </ul>
        </nav>
    )
}


export default LeftMenu;