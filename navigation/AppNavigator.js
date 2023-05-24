import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UpcomingScreen from "../screens/UpcomingScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import ActressScreen from "../screens/ActressScreen";
import PopularScreen from "../screens/PopularScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
    headerShown: false}} />
        <Stack.Screen name="Upcoming" component={UpcomingScreen} />
        <Stack.Screen name="Popular" component={PopularScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="ActressScreen" component={ActressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
