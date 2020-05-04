// To manage my meals reducer state updating logic/
// That's the file where to write the logic for marking a meal as a favorite and for managing our filters.
// A reducer in React is just a function.

/* This `mealsReducer` function will receive two arguments:
1. state - the current state snapshot on which you can build up on and derive a new state,
because a reducer in the end will have to return a new state which is then taken by Redux and
stored in its store. So you get the current the old state here.
2. action - you get the action because the reducer function is executed by Redux whenever a new action
is dispatched and therefore we get access to the action, so that we can find out 
if we need to act and what we need to do.
*/

// 4. Import dummy data
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

// 2. When we first execute our app, we also want to set up an initial state which is used initially, so
// which initializes our state when this app launches. It holds a simple js object.
// 3. Will store a list of meals, filteredMeals and favoriteMeals, 3 types of meal arrays
const initialState = {
  // 5. Initialize:
  // meals: with MEALS dummy-data array
  // filteredMeals: is also initialized with MEALS as when the app starts we have no filters
  // favoriteMeals: is an empty array as we don't have favoriteMeals when the app starts
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

// 6. In this function we assign our `initialState` as a default value for the state argument, which means that
// when this reducer function runs and state is undefined - which is the case when Redux executes our reducer for
// the very first time - we will get started with that `initialState`, so that will then automatically load our
// initial state, because when Redux gets started and starts up, there will be one initial action dispatched, which is used
// to run through the reducer once and that will then load our initial state.
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => (meal.id = action.mealId)
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    default:
      return state;
  }

  // 1. In this function you need to return a new state
  return state;
};

// 7. export and import/set up the redux stor in app.js to create a store
// import { createStore, combineReducers } from 'redux';
// also import mealsReducer and point at the store folder
// import mealsReducer from './store/reducers/meals';
// Create a store
// const store = createStore();
// if you have more than one reducer need to merge the single reducers into one root reducer
// combineReducers takes an object where we map our single reducers to keys.
/*
const rootReducer = combineReducers({
  meals: mealsReducer,
});

Merges mealsReducer into this rootReducer and will later be able to work with the state managed by the meals reducer
so with `initialState`, with the help of this `meals` property, will be able to access this state.
We just need to pass `rootReducer` to createStore 
`const store = createStore(rootReducer);`
which gives us a store and which need to be provided to our application
 and for that we need that other package Provider from react-redux `import { Provider } from 'react-redux';`
We then wrap provider around our root app component in the end ( MealsNavigator )

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );

Provider takes the store prop and as a value we pass our store.

*/

// 8. Import MEALS in the file where we are importing MEALS from dummy-data (i.e CategoryMealsScreen)

export default mealsReducer;
