import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }}
      ></Button>

      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
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
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff'
    },
    headerTintColor: Platform.OS === !'android' ? Colors.primaryColor : '#fff'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
