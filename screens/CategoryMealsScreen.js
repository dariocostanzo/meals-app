import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId'); //get params send from CategoriesScreen.js

  const displayedMeals = MEALS.filter(
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
