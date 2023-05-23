import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  StyleSheet
} from "react-native";
import { fetchTopRatedMovies } from "../api/fetchMovies";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
//import { styles } from "../styles";


const TopRatedScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesData = await fetchTopRatedMovies(); // Update to fetch 40 movies from API or data source
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
};

export default TopRatedScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CC7E85",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
    padding: 5,
    color: "#fff",
  },
  poster: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 18,
    marginTop: 16,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
  },
  releaseDate: {
    fontSize: 16,
    padding: 15,
    margin: 15,
    textAlign: "center",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#FFC947",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchContainer: {
    backgroundColor: "#CC7E85",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 300,
  },
  searchInput: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  notFoundContainer: {
    backgroundColor: "#CC7E85",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 300,
  },
  movieContainer: {
    backgroundColor: "#CC7E85",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  movieImage: {
    width: 150,
    height: 200,
    alignSelf: "center",
    borderRadius: 18,
    marginTop: 16,
  },
  movieTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
    color: "#fff",
  },
});
