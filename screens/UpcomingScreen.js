import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import { fetchUpcomingMovies } from "../api/fetchMovies";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { LinearGradient } from 'expo-linear-gradient';


const UpcomingScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesData = await fetchUpcomingMovies(); // Update to fetch 40 movies from API or data source
      const extendedMoviesData = [...moviesData]; // Duplicate the existing movies to increase the list
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
    navigation.navigate("MovieDetails", { movie, navigation }); // Pass navigation prop to MovieDetailsScreen
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
    <ScrollView>
    <LinearGradient
      colors={["#A43131", "#CC7E85"]} // İstenilen renklerin dizisini burada belirleyin
      start={[0, 1]} // Lineargradient'in başlangıç noktasını ayarlayın
      end={[1, 0]} // Lineargradient'in bitiş noktasını ayarlayın
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
        <StatusBar backgroundColor="#CC7E85" barStyle="light-content" />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search movies..."
            placeholderTextColor="#fff"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        {showNotFound && (
          <Animatable.View animation="fadeIn" style={styles.notFoundContainer}>
            <Text style={styles.notFoundText}>No movies found</Text>
          </Animatable.View>
        )}
        <FlatList
          data={filteredMovies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      {/* </View> */}
    </LinearGradient>
    </ScrollView>
  );
};

export default UpcomingScreen;
