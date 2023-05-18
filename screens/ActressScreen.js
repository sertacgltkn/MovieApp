import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import config from "../config";
import { styles } from "../styles";

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
        <Text>Loading cast...</Text>
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

export default ActressScreen;
