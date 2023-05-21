import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import config from "../config";
import { styles } from "../styles";


const MovieDetailsScreen = ({ route, navigation }) => {
  const { movie } = route.params;
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [poster, setPoster] = useState("");

  const { API_KEY } = config;

  useEffect(() => {
    fetchMovieDetails(); // Film detaylarını çekmek için fonksiyonu çağırın
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      const rating = data.vote_average;
      const description = data.overview;
      const releaseDate = data.release_date;
      const poster = data.poster_path;
      setRating(rating);
      setDescription(description);
      setReleaseDate(releaseDate);
      setPoster(poster);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToActressScreen = () => {
    navigation.navigate("ActressScreen", { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200/${poster}` }}
        style={styles.poster}
      />
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text
        style={{
          margin: 15,
          padding: 15,
          fontSize: 16,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        {" "}
        <Text style={styles.description}>Description:</Text> {description}
      </Text>
      <Text style={styles.releaseDate}>Release Date: {releaseDate}</Text>
      <Button title="View Actress" onPress={navigateToActressScreen} />
    </View>
  );
};

export default MovieDetailsScreen;

