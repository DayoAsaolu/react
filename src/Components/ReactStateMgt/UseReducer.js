import { useReducer } from "react";

function FruitReducer(){
    const [ state, dispatch ] = useReducer( (state, action) => {
        switch(action.type) {
            case "SET_FRUIT":
                return { ...state, fruit: action.payload }
            case "ADD_FRUIT":
                return { ...state, fruits: [ ...state.fruits, state.fruit ], fruit: "" }
                
            }
        }, {
            fruits: [],
            fruit: ""
        })
        return (
            <div>
                <div>
                    {state.fruits.map((fruit, index) => (
                        <div key={index}> {fruit}</div>
                    ))}
                </div>
                <input
                    type="text"
                    value={state.fruit}
                    onChange={e => dispatch({ type: "SET_FRUIT", payload: e.target.value})}
                />

                <button
                    onClick={ () => dispatch({ type: "ADD_FRUIT" })}>ADD_FRUIT
                </button>
            </div>
        )
}

function UserForm() {

    const [ state, dispatch ] = useReducer( (state, action) => ({
        ...state,
        ...action
    }), {
        first: "",
        last: ""
    })

    return (
        
        <div>
            <div> {state.first} - {state.last}</div>
            <input type="text" value={state.first}
            onChange={ (e) => dispatch({ first: e.target.value})}
            />
            <input type="text" value={state.last}
            onChange={ (e) => dispatch({ last: e.target.value})}
            />

        </div>
    )
}
const LearnUseReducer = () => {
    return (
        <div>
            <h1>Reducer</h1>
            <UserForm/>
            <FruitReducer/>
        </div>
        
    )
}

export default LearnUseReducer