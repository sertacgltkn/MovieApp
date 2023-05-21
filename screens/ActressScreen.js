import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";
import config from "../config";


const ActressScreen = ({ route }) => {
  const { movie } = route.params;
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { API_KEY } = config;

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchCast = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`
      );
      const data = await response.json();
      const cast = data.cast;
      setCast(cast);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const renderCastItem = ({ item }) => (
    <View style={styles.castContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200/${item.profile_path}` }}
        style={styles.castImage}
      />
      <Text style={styles.castName}>{item.name}</Text>
      <Text style={styles.castCharacter}>{item.character}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <FlatList
        data={cast}
        renderItem={renderCastItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.castListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  castContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  castImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  castName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  castCharacter: {
    fontSize: 14,
    color: "#888888",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActressScreen;
