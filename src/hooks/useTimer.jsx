import { useEffect } from "react";

function useTimer () {
    useEffect( () => {
        const intervalID = setInterval (() => {
                 const randomNumber = Math.floor(Math.random() * 100);
                 console.log(randomNumber);
        }, 1000)
   
        return () => {
            clearInterval(intervalID);
        }
    }, [])
}
export default useTimer;