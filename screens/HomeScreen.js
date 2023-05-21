import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import PopularScreen from "./PopularScreen";
import UpcomingScreen from "./UpcomingScreen";
import NowPlayingScreen from "./NowPlayingScreen";
import TopRatedScreen from "./TopRatedScreen";

function HomeScreen() {
  const [activeScreen, setActiveScreen] = useState("upcoming");

  const handleClick = (screen) => {
    setActiveScreen(screen);
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Button
          onPress={() => handleClick("upcoming")}
          title="Upcoming"
          color={activeScreen === "upcoming" ? "blue" : "gray"}
        />
        <Button
          onPress={() => handleClick("popular")}
          title="Popular"
          color={activeScreen === "popular" ? "blue" : "gray"}
        />
        <Button
          onPress={() => handleClick("nowplaying")}
          title="Now Playing"
          color={activeScreen === "nowplaying" ? "blue" : "gray"}
        />
        <Button
          onPress={() => handleClick("toprated")}
          title="Top Rated"
          color={activeScreen === "toprated" ? "blue" : "gray"}
        />
      </View>

      {activeScreen === "upcoming" ? (
        <UpcomingScreen />
      ) : activeScreen === "popular" ? (
        <PopularScreen />
      ) : activeScreen === "nowplaying" ? (
        <NowPlayingScreen />
      ) : (
        <TopRatedScreen />
      )}
    </View>
  );
}

export default HomeScreen;
