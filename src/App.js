import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput'
import Counter from './Counter'
import useAbortableFetch from 'use-abortable-fetch'
import { useSpring, animated } from 'react-spring'

export const UserContext = createContext();

const data = [
  {
    "name": "Coconut Chicken Curry",
    "desc": "A ramen noodle soup with chicken and green apple.",
    "ingredients": [
      "Coconut Milk",
      "Chicken",
      "Curry Paste",
      "Green Apple",
      "Ramen"
    ]
  },
  {
    "name": "Thai Lettuce Wraps",
    "desc": "Beef or Turkey lettuce wraps.",
    "ingredients": [
      "Lime",
      "Ground Turkey",
      "Ground Beef",
      "Butter Lettuce",
      "Fish Sauce"
    ]
  }
]

// useEffect is for componentDidMount / update/ unMount 
// Create a useFetch Hook ?

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('')
  const ref = useRef('');
  const redClassName = 'fake-class';
  const reverseWord = word => {
    return word.split("").reverse().join("")
  }

  // 3rd party HOOK
  // const { data, loading } = useAbortableFetch(
  //   `https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`
  // )
  // if(!data) return null;

  const title = 'Level Up Dishes'
  const TitleReversed = useMemo(() => reverseWord(title), [title])


  const [dishes, setDishes] = useState([]);


  // const fetchDishes = async () => {
  //   console.log('ran');
  //   const res = await fetch(
  //     'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  //   );
  //   const data = await res.json();
  //   setDishes(data);
  // };

  useEffect(() => {
    setDishes(data);

  }, [])

  const props = useSpring({opacity: 1, from: { opacity: 0}})


  return (
    <UserContext.Provider
      value={{
        user: true,
        name: 'Cristian'
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <animated.h1 style={props} onClick={() => ref.current.classList.add(redClassName)}>Level Up Dishes</animated.h1>
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
        {dishes.map(dish => (   
          <article  className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span key={ingredient}>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
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