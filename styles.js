import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
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

  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  movieContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  movieImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  notFoundText: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 20,
  },
  castContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  castImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  castName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  castCharacter: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  castListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
