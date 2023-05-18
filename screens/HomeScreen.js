import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import fetchMovies from "../api/fetchMovies";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesData = await fetchMovies(); // API'den veya veri kaynağından 40 film almak için güncelleme yapılmalı
      const extendedMoviesData = [...moviesData, ...moviesData]; // Mevcut filmlerin kopyalarını alarak listeyi çoğaltma
      setMovies(extendedMoviesData);
      setFilteredMovies(extendedMoviesData);
    };

    fetchMovieData();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [searchQuery]);

  const filterMovies = () => {
    if (searchQuery === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }

    setShowNotFound(searchQuery !== "" && filteredMovies.length === 0);
  };

  const handleMoviePress = (movie) => {
    navigation.navigate("MovieDetails", { movie, navigation }); // navigation prop'unu MovieDetailsScreen'e aktar
  };

  const renderMovieItem = ({ item, index }) => (
    <Animatable.View
      animation="fadeIn"
      delay={index * 200}
      style={styles.movieContainer}
    >
      <TouchableOpacity onPress={() => handleMoviePress(item)}>
        <Animatable.Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.movieImage}
          animation="zoomIn"
          duration={500}
        />
        <Animatable.Text
          style={styles.movieTitle}
          animation="slideInRight"
          duration={500}
        >
          {item.title}
        </Animatable.Text>
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Film Ara"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {showNotFound && <Text style={styles.notFoundText}>Movie not found</Text>}
      <FlatList
        data={filteredMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          !showNotFound && (
            <Text style={styles.notFoundText}>Movie not found</Text>
          )
        }
      />
    </View>
  );
};



export default HomeScreen;
