import useTimer from "../hooks/useTimer";
import Navbar from "/src/components/Navbar";

function Contatti() {
    useTimer();

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina contatti</h1>
        </>
    )
}

export default Contatti;