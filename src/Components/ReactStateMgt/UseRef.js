import React, { useEffect, useRef, useState } from "react";


function UseRef() {
    const idRef = useRef(1)
    const [ cars, setCars ] = useState([
        { id:idRef.current++, car: "toyota" },
        { id:idRef.current++, car: "tesla" }
    ])
    const inputRef = useRef(null)
    

    useEffect(() => {
        inputRef.current.focus()
    }
    , [])

    const onAddCar = () => {
        setCars([
            ...cars, 
            {   id: idRef.current++,
                car: inputRef.current.value }
            ])
        inputRef.current.value = ""
    }

    return (
        <div>
            <h3>UseRef</h3>
            <div>
                {cars.map((car, index) => (
                    <div key={index}>{car.id}-{car.car}</div>
                ) )}
            </div>
            <input type="text" ref={inputRef} />
            <button onClick={onAddCar}>Add Car</button>
            
        </div>
    )
}

export default UseRef