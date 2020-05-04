import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//1. Redux - Import useSelector
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {
  // import { MEALS } from '../data/dummy-data';
  // 2. get availableMeals with useSelector
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  // 3. We don't need to filter MEALS, we can just get them from availableMeals
  // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favourite',
    headerLeft: () => (
      //burger button
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
