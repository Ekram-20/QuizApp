import { useRef, useState } from "react";


export const useTimer = (maxTime: number) => {

    const [time, setTime] = useState(maxTime);
    const interval = useRef<NodeJS.Timeout>()


    const startTimer = () => {
        setTime(maxTime);

        // make function that decrease every 1s
        interval.current = setInterval(() => {
            setTime((t) => t - 1)
        }, 1000); 
    };

    const stopTimer = () => {
        clearInterval(interval.current)
    }

    return {time, startTimer, stopTimer};
}