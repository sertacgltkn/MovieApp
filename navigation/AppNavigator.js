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
            backgroundColor: "#CC7E85", // Header'ın arka plan rengi
          },
          headerTitleStyle: {
            color: "white", // Başlık rengi
            fontSize: 24, // Başlık boyutu
            textTransform:"uppercase"

          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upcoming" component={UpcomingScreen} />
        <Stack.Screen name="Popular" component={PopularScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="ActressScreen" component={ActressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
