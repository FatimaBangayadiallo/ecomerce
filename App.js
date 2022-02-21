import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import Flat from "./Flatlist";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function App() {
  const habits = [
    {
      image: require("./assets/premier.jpg"),
      name: "new robe from us",
      price: "$110",
    },
    {
      image: require("./assets/deux.jpg"),
      name: "willet look",
      price: "100$",
    },
    {
      image: require("./assets/ze.jpg"),
      name: "nenen look",
      price: "100$",
    },
    {
      image: require("./assets/deux.jpg"),
      name: "bory look",
      price: "100$",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />

      <View style={styles.premier}>
        <View style={styles.arrowCor}>
          <View
            style={{
              backgroundColor: "#EFEFEF",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </View>
          <View
            style={{
              backgroundColor: "#EFEFEF",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <SimpleLineIcons name="basket" size={24} color="black" />
          </View>
        </View>
        {/* ---------------------------text view */}
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Women Items
          </Text>
        </View>
        {/* -------------------------------input view */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#EFEFEF",
            // margin: 16,
            padding: 16,
            borderRadius: 50,
            marginTop: 30,
          }}
        >
          <TextInput style={{}} placeholder="Search jacket" />
          <Text style={{ fontWeight: "bold", color: "blue" }}>Filter</Text>
        </View>
      </View>
      <View style={styles.deuxieme}>
        <FlatList
          data={habits}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => <Flat item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 30,
  },
  premier: {
    flex: 30,
    // backgroundColor: "yellow",
  },
  deuxieme: {
    // backgroundColor: "blue",
    flex: 70,
  },
  arrowCor: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
