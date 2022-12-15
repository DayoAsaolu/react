import React from "react";
import { useMemo, useState, useCallback } from "react";


const UseMemo = () => {
    const [ numbers ] = useState([10, 20, 30])
    const total = useMemo( 
        () =>  numbers.reduce( (acc, number) => acc+number,0),
        [numbers]
    )

    const [ places ] = useState([ "Dortmond", "Cameroon", "Burundi", "Asia"])
    const sortedPlaces =  useMemo( 
            () => [...places].sort(), 
            [places] 
        )
    
    const [count1, setCount1 ] = useState(0)
    const [count2, setCount2 ] = useState(0)
    
    const countTotal = useMemo( () => count1+count2 , [ count1, count2])

    return (
        <div>
            <h1>UseMemo</h1>
            {/* <div>Total: {total} </div> */}
            <div>countries: {places.join(" ,")}</div>
            <div>countries: {sortedPlaces.join(" ,")}</div>
            <button onClick={() => setCount1(count1 +1)}>count1:{count1}</button>
            <button onClick={() => setCount2(count2 +1)}>count2:{count2}</button>
            <div>count Total: {countTotal}</div>


        </div>
    )
}

function SortedPlaces({ list, sortFunc }){
    console.log("render sortPlaces");
    const sortedPlaces =  useMemo( 
        () => [...list].sort(sortFunc), 
        [list] 
    )
    return (
        <div>
            sorted: {sortedPlaces.join()}
        </div>
    )
}
const UseCallback = () => {
    const [ places ] = useState([ "Dortmond", "Cameroon", "Burundi", "Asia"])

    const sortFunc = useCallback((a,b) => a.localeCompare(b), []);

    return (
        <div>
            <h1>UseCallback</h1>
            <div> raw: {places.join(" ,")}</div>
            <SortedPlaces list={places} sortFunc={sortFunc}/>

        </div>
    )
}

function MemoCallback() {

    return (
        <div>
            
            <UseCallback/>
        </div>
    )
}

export default MemoCallback