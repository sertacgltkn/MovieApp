import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    padding:5,
    color:'#fff'
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
    padding:9,
    margin:5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor:"#fff",
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
    margin: 18,
    padding:25,
    fontSize: 26,
    fontWeight: "bold",
    color:'#fff'
  },
  notFoundText: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 20,
  },
  castContainer: {
    alignItems: "center",
  },
  castImage: {
    padding:130,
    margin:2,
    borderRadius: 8,
  },
  castName: {
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  castCharacter: {
    margin: 8,
    fontSize: 16,
    color: "#fff",
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
