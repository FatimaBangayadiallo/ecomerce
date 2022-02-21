import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const Flat = ({ item }) => {
  return (
    <View style={styles.containerParent}>
      {/* <Text>hello gys</Text> */}
      {/* --------------------------container Image */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
      {/* ----------------container name */}
      <View style={styles.starRa}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        {/* <AirbnbRating ratingCount={4} count={item.rating} size={10} /> */}
        <Rating
          count={item.rating}
          ratingCount={5}
          imageSize={20}
          style={{ paddingHorizontal: 20 }}
        />
        <Text style={{ fontSize: 20, color: "blue" }}>{item.price}</Text>
      </View>
    </View>
  );
};
export default Flat;
const styles = StyleSheet.create({
  containerParent: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginTop: 12,
    marginLeft: 10,
  },
  starRa: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
