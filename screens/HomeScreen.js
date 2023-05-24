import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
        <LinearGradient
          colors={activeScreen === "upcoming" ? ["#7D4234", "red"] : ["gray", "gray"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{ borderRadius: 5 }}
        >
          <Button
            onPress={() => handleClick("upcoming")}
            title="Upcoming"
            color="transparent"
          />
        </LinearGradient>
        
        <LinearGradient
          colors={activeScreen === "popular" ? ["#7D4234", "red"] : ["gray", "gray"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{ borderRadius: 5 }}
        >
          <Button
            onPress={() => handleClick("popular")}
            title="Popular"
            color="transparent"
          />
        </LinearGradient>
        
        <LinearGradient
          colors={activeScreen === "nowplaying" ? ["#7D4234", "red"] : ["gray", "gray"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{ borderRadius: 5 }}
        >
          <Button
            onPress={() => handleClick("nowplaying")}
            title="Now Playing"
            color="transparent"
          />
        </LinearGradient>
        
        <LinearGradient
          colors={activeScreen === "toprated" ? ["#7D4234", "red"] : ["gray", "gray"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{ borderRadius: 5 }}
        >
          <Button
            onPress={() => handleClick("toprated")}
            title="Top Rated"
            color="transparent"
          />
        </LinearGradient>
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
