import React, { useState, useEffect, useRef, createContext, useReducer, useMemo, useDebugValue } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput'
import Counter from './Counter'

export const UserContext = createContext();


const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('')
  const ref = useRef('');
  const redClassName = 'fake-class';

  const reverseWord = word => {
    console.log('function called')
    return word.split("").reverse().join("")
  }

  const title = 'Level Up Dishes'

  const TitleReversed = useMemo(() => reverseWord(title), [title])

  

  return (
    <UserContext.Provider
      value={{
        user: true,
        name: 'Cristian'
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add(redClassName)}>Level Up Dishes</h1>
        <h1>{TitleReversed}</h1>
        <Toggle />
        <form 
          onSubmit={(e) => {
            e.preventDefault();
        }}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} />
          <button>Submit</button>
        </form>
        <Counter />
      </div>
    </UserContext.Provider>
  );
};


// // Custom Hook
// const useTitleInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   useEffect(() => {
//     document.title = value

//   })
//   return [value, setValue]
// }


export default App;