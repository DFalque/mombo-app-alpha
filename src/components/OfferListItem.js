import React from "react";
import {View, Text, Image, ImageBackground, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActionButton from "./ActionButton";

const imagen = require("../assets/img/cancum.png");

const OfferListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 30}}
        style={styles.img}
        source={imagen}>
        <View style={styles.imgHeaderContainer}>
          {item.id === 1 ? (
            <Ionicons name="heart" size={25} color="#FF007F" />
          ) : (
            <Ionicons name="heart-outline" size={25} color="#fff" />
          )}
          <Text style={styles.imgHeaderText}>7 Dias</Text>
        </View>
        <View style={styles.imgFooterContainer}>
          <Image
            style={styles.imgFooterAgency}
            source={require("../assets/img/lm.png")}
          />
          <Text style={styles.imgFooterText}>Last Minute</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{item.title} </Text>
        <Text style={styles.place}>{item.destination} </Text>

        <View style={styles.containerIcons}>
          <Ionicons name="airplane-outline" size={25} color="#000" />
          <Ionicons name="car-outline" size={25} color="#000" />
          <Ionicons name="restaurant-outline" size={25} color="#000" />
          <Ionicons name="sunny-outline" size={25} color="#000" />
        </View>

        <View style={styles.containerPrice}>
          <Text>desde</Text>
          <Text style={styles.price}>2000€</Text>
          <ActionButton />
        </View>
      </View>
    </View>
  );
};

export default OfferListItem;

const styles = StyleSheet.create({
  container: {flexDirection: "row", margin: 5, width: 350},
  img: {width: 170, height: 220, marginTop: 10},
  imgHeaderContainer: {
    marginTop: 20,
    width: 140,
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  imgFooterContainer: {
    margin: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgHeaderText: {color: "#fff"},
  imgFooterText: {color: "#fff", marginTop: 10, marginStart: 10},
  imgFooterAgency: {height: 30, width: 30, marginTop: 10, borderRadius: 50},
  containerDescription: {
    marginStart: 10,
    marginTop: 5,
    width: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
    marginStart: 10,
  },
  place: {fontSize: 14, textAlign: "justify", color: "#000", marginStart: 10},
  containerIcons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerPrice: {marginTop: 20, alignItems: "center"},
  price: {fontSize: 25, fontWeight: "bold"},
});
