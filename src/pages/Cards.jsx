import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cards.css";
import CardItem from "/src/components/CardItem";
import Navbar from "/src/components/Navbar";

function Cards() { //CAMBIA PAGINA
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina con tutte le cards con link a sottopagina</h1>
            <div className= "grid-container">
                {cities.map((city) => (
                    <Link to = {`/cards/${city.id}`} key = {city.id}>
                        <CardItem
                        key = {city.id}
                        isVisited = {city.isVisited}
                        title = {city.title}
                        imgUrl = {city.imgUrl}>
                        {city.children}</CardItem>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Cards;