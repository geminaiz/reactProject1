import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "/src/components/Navbar";

function Card(){
    const {cardID} = useParams();
    console.log(cardID);

    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id  == cardID.toString()) // ho una sola città quindi posso prendere la posizione 0 nell'array
    );

    console.log(cities);

    return(
        <>
            <Navbar></Navbar>
            <h1>{cities[0].title}</h1>
            <div>
                {cities[0].isVisited && (
                    <span>Visitata</span>
                )}
                {!cities[0].isVisited && (
                    <span>Non visitata</span>
                )}
            </div>
            <img
                src={cities[0].imgUrl}
                alt=""
                height="300"
                width="350"></img>
        </>
    )
}

export default Card;