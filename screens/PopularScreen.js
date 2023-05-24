import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text,ScrollView,StatusBar,TextInput,FlatList,TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { fetchPopularMovies } from "../api/fetchMovies";
import * as Animatable from "react-native-animatable";


function PopularScreen() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesData = await fetchPopularMovies(); // Update to fetch 40 movies from API or data source
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
    <View style={styles.container}>
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
        keyExtractor={(item, index) =>
          item.id.toString() + (searchQuery ? "_searched" : "_not_searched")
        }
        numColumns={searchQuery !== "" ? 1 : 2}
      />
    </View>
  </ScrollView>
  );
}

export default PopularScreen;

