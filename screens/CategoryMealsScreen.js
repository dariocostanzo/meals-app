import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
// import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId'); //get params send from CategoriesScreen.js
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealsScreen;
