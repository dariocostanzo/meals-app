import React from 'react';
// Import `useSelector` to select a slice of our globally managed state and use it in this component
// using the hook will allow us to use in a functional component
// Another approach by importing the `connect` function and wrap the export with that

import { useSelector } from 'react-redux';
// Remove MEALS and replaced with data from the store
// import { CATEGORIES, MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId'); //get params send from CategoriesScreen.js
  // You can use MEALS with the help  of useSelector, to derive our displayedMeals, I will create a new const
  // and useSelector() will retrieve me data out of the state and return it.
  // useSelector takes a function that will be executed for us by React Redux.
  // This function will get the state as an argument, and it then is able to return any data we want
  // from that globale store, from the global state
  /* How to retrieve data from the state? (state => state) on the right state is automatically returned 
To get access to something from the state we need to go back to the place where we create the store(i),
there I pass in a rootReducer which is created by combining all reducers(ii). There we have the `meals` key which 
gives us the slice of our state which is managed by this reducer `mealsReducer` and identifier.
We can now use this identifier (meals) to get hold of that part of our state (mealsReducer), for which this reducer
is responsible.
So in the and, a state that will look like this `initialState` (from meals.js).

  const rootReducer = combineReducers({ (ii)
  meals: mealsReducer
});

const store = createStore(rootReducer); (i)
  */
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  // replace MEALS.filter with availableMeals.filter
  // const displayedMeals = MEALS.filter(
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
// using navigationOption as a function for dynamic content
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  // to find the selectedCategory by having a look at CATEGORIES with "find"
  // which takes a function which it executes on every element in the array, so on every category
  // and give us the item where this function returns true.
  // If the ID for the category we're looking at matches the cat ID we're retrieving from our params.
  // This give us the selected category.
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
