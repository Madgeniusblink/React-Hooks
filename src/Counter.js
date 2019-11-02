import React, { useReducer} from 'react'


const initialState = { count: 0 }

const reducer = (state, action) => {

    switch (action.type) {
        case 'add':
            return {
                count: state.count + action.value
            }
        case 'minus':
            return {
                count: state.count - 1
            }
        case 'reset':
            return {
                count: initialState.count
            }
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, action] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => action({type: 'add', value: 10})}>+</button>
            <button onClick={() => action({type: 'minus'})}>-</button>
            <button onClick={() => action({type: 'reset'})}>reset</button>
        </div>
    )
}

export default Counter
