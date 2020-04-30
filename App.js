import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens(); // to make the app a bit more efficient

//import fonts
const fetchFonts = () => {
  return Font.loadAsync({
    //return a promis to fetchFonts function because we can use it with AppLoading component
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  //manage state with useState and call useState set to fals
  const [fontLoaded, setFontLoaded] = useState(false);
  //if the font has not loaded return AppLoading component instead of normal content
  if (!fontLoaded) {
    return (
      <AppLoading
        //add and point startAsync property to fetchFonts function
        startAsync={fetchFonts}
        // and once the fonts have been fetched the function we passed to onFinish will be called and set to true
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MealsNavigator />;
}
