import { useMemo, useState } from "react";


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

    return (
        <div>
            <div>Total: {total} </div>
            <div>countries: {places.join(" ,")}</div>
            <div>countries: {sortedPlaces.join(" ,")}</div>

        </div>
    )
}

function SortedPlaces({ list }){
    console.log("render sortPlaces");
    const sortedPlaces =  useMemo( 
        () => [...list].sort(), 
        [list] 
    )
    return (
        <div>
            {sortedPlaces.join()}
        </div>
    )
}
const UseCallback = () => {
    const [ places ] = useState([ "Dortmond", "Cameroon", "Burundi", "Asia"])
    const sortedPlaces =  useMemo( 
            () => [...places].sort(), 
            [places] 
        )

    return (
        <div>
            <SortedPlaces list={places}/>

        </div>
    )
}

function MemoCallback() {

    return (
        <div>
            <h3>UseCallback and UseMemo</h3>
            <UseCallback/>
        </div>
    )
}

export default MemoCallback