import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function File() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <View style={styles.containerIconTop}>
        <View style={styles.antContainer}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.icon1}
          />
        </View>
        <View style={styles.ant2Container}>
          <AntDesign
            name="shoppingcart"
            size={28}
            color="black"
            style={{ color: "blue" }}
          />
        </View>
      </View>
      {/* image and the icon view */}
      <View style={styles.containerImageIcon}>
        <Image source={require("./assets/ze.jpg")} style={styles.robe} />
        <View style={styles.coeurContainer}>
          <EvilIcons name="heart" size={24} color="blue" style={styles.coeur} />
        </View>
      </View>
      {/* -------------------------------------------- */}
      <View style={styles.phrase}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Shopping Bag</Text>
      </View>
      {/* --------------------------------------------- */}
      <View style={styles.containerReview}>
        <View>
          <Text style={{ fontSize: 20 }}>Review :</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 6 }}>
          <FontAwesome
            name="star"
            size={24}
            color="gold"
            style={{ marginRight: 10 }}
          />
          <FontAwesome
            name="star"
            size={24}
            color="gold"
            style={{ marginRight: 10 }}
          />
          <FontAwesome
            name="star"
            size={24}
            color="gold"
            style={{ marginRight: 10 }}
          />
          <FontAwesome
            name="star"
            size={24}
            color="gold"
            style={{ marginRight: 10 }}
          />
          <FontAwesome
            name="star"
            size={24}
            color="gray"
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      {/* --------------------------------------------- */}
      <View
        style={{
          backgroundColor: "blue",
          width: 150,
          height: 10,
          marginLeft: 20,
          borderRadius: 15,
        }}
      ></View>
      {/* ------------------------------------------------- */}
      <View style={styles.containerText}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          It is a long established fact that a reader will be distracted by a
          readable content of a page.
        </Text>
      </View>
      {/* ------------------------------------------------------- */}
      <View
        style={{
          backgroundColor: "#EFEFEF",
          height: 30,
          flex: 0.09,
          justifyContent: "center",
          width: 300,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#efefef",
        }}
      >
        <Text>Material : 91% polyester, 9% elastane</Text>
      </View>
      {/* ------------------------------------------- */}
      <View style={styles.XsCo}>
        <View>
          <Text
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            XS
          </Text>
        </View>
        <View>
          <Text
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            S
          </Text>
        </View>
        <View>
          <Text
            style={{
              backgroundColor: "blue",
              paddingHorizontal: 15,
              paddingVertical: 10,
              color: "white",
            }}
          >
            M
          </Text>
        </View>
        <View>
          <Text
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            L
          </Text>
        </View>
        <View>
          <Text
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            XL
          </Text>
        </View>
      </View>
      {/* ---------------------------------- */}
      <View
        style={{
          backgroundColor: "blue",
          flex: 0.1,
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "white" }}>Total Amount</Text>
          <Text style={{ color: "white" }}>$110</Text>
        </View>
        <View
          style={{
            marginLeft: 170,
            borderWidth: 1,
            width: 100,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            borderColor: "blue",
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20 }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 30,
  },
  containerIconTop: {
    // backgroundColor: "red",
    flexDirection: "row",
    flex: 0.06,
    alignSelf: "center",
  },
  antContainer: {
    // alignSelf: "flex-end",
    // marginLeft: 30,
    marginRight: 225,
    backgroundColor: "#D1D1D1",
    width: 40,
    height: 40,
    borderRadius: 20,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ant2Container: {
    // marginLeft: 300,
    backgroundColor: "#D1D1D1",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,

    // borderColor: "gray",
    // paddingHorizontal: 20,
    // paddingVertical: 5,
    // textAlign: "center",
  },
  containerImageIcon: {
    // backgroundColor: "green",
    flex: 0.5,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    position: "relative",
    // marginBottom: 2,
  },
  robe: {
    width: "85%",
    // height: "140%",
    height: "115%",
    backgroundColor: "#EFEFEF",
    // borderWidth: 1,
    borderRadius: 20,
    // marginHorizontal: 30,
    // textAlign: "center",
    marginLeft: 25,
  },
  coeurContainer: {
    position: "absolute",
    // top: 80,
    // left: 340,
    top: 30,
    left: 300,
    backgroundColor: "#D1D1D1",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    // textAlign: "center",
    paddingTop: 5,
    borderRadius: 25,
    // borderWidth: 1,
    // borderColor: "",
  },
  phrase: {
    // backgroundColor: "yellow",
    flex: 0.05,
    marginTop: 70,
    marginLeft: 20,
  },
  containerReview: {
    flexDirection: "row",
    // backgroundColor: "red",
    marginTop: 10,
    flex: 0.07,
    marginLeft: 20,
  },
  containerText: {
    // backgroundColor: "red",
    flex: 0.07,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  XsCo: {
    // backgroundColor: "#ccc",
    flex: 0.1,
    flexDirection: "row",
    marginTop: 5,
    // justifyContent: "space-between",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
