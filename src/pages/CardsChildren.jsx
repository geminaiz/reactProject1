import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./Cards.css";
import CardItem from "/src/components/CardItem";

function CardChildren(){ // RIMANE NELLA STESSA PAGINA
    const cities = useSelector((state) => state.cities.value);
    return(
        <>
            <h1>Pagina cardChildren</h1>
            <div className= "grid-container">
                {cities.map((city) => (
                    <Link to = {`/cards-children/${city.id}`} key = {city.id}>
                        <CardItem
                        key = {city.id}
                        isVisited = {city.isVisited}
                        title = {city.title}
                        imgUrl = {city.imgUrl}>
                        {city.children}</CardItem>
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    )

}

export default CardChildren;