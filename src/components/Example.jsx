import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "/src/redux/counterSlice";

function Example () {

    const count = useSelector ((state) => state.counter.value);
    const dispatch = useDispatch();

        return (
            <div>
                <p>Conteggio: {count}</p>
                <button
                    aria-label="increment value"
                    onClick={() => dispatch(increment())}>
                    Incrementa +
                </button>
                <button
                    aria-label="decrement value"
                    onClick={() => dispatch(decrement())}>
                    Decrementa -
                </button>
            </div>
        )

}

export default Example;