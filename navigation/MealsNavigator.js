import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
// takes one argument which is an object where we configure the different screens
const MealsNavigator = createStackNavigator({
  // stack pattern
  // PropertyName: Pointer at the react component to load as a screen for this screen
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});
// wrap the main navigator with createAppContainer and pass Meals navigator as argument
export default createAppContainer(MealsNavigator);
