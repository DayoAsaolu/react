import React from "react";
import { useState } from "react";

function FruitList() {
    const [ list, setList ] = useState(["apple", "bananna", "cantaloupe", "date" ])
    const [ fruit, setFruit ] = useState()

    const addFruit = () => {
        setList([ ...list, fruit])
        setFruit("")
    }
    return (
        <div>
            <ul>
                { list.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <input
            type="text"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            />
            <button onClick={ addFruit }>AddFruit</button>

        </div>
    )
}

function Counter() {
    const [ count, setCount ] = useState(10)

    const addOne = () => {
        setCount(count+1)
    }
    
    return (
        <div>
            <button onClick={ addOne }>count = {count}</button>
        </div>
    )

}

function LearnUseState() {

    return (
    <div>
        <Counter/>
    </div>
    )
}

export default LearnUseState