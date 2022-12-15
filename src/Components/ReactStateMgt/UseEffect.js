import React from "react";
import { useEffect, useState } from "react";

// import x from "./cars.json"

function StopWatch() {
    const [ time, setTime ] = useState(0)

    useEffect( () =>
        { const interval = setInterval( () => {
            setTime((t) => {
                return t+1
            }
            )
        }, 1000);
        return () => clearInterval(interval)
        }, [])

    return (
        <div>
            time: {time}
        </div>
    )
}


function UseEffect() {
    const [ cars, setCars ] = useState([])

    useEffect( () => {
    fetch("./cars.json")
        .then((response) => response.json())
        .then((data) => setCars(data))
    } , [])
    
    const [ selectedCar, setSelectedCar ]  = useState(null)
    const [ selectedCarDetails, setSelectedCarDetails ] = useState(null)


    const onSelectedCarChange = ( car ) => {
        fetch(`/${car}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedCarDetails(data))
    }

    return (
        <div>
            <h3>UseEffect</h3>
            { cars.map((car, index) => (
                <button key={index} onClick={() => onSelectedCarChange(car)}>{car}</button>
            ))}

            <div>{selectedCar}</div>
            <div>{JSON.stringify(selectedCarDetails)}</div>
            {/* <StopWatch/> */}

        </div>
    )
}

export default UseEffect