import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";

const DiscoverListItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <ImageBackground
        imageStyle={{borderRadius: 20, alignSelf: "center"}}
        style={styles.img}
        source={item.image}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>EXPLORAR</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DiscoverListItem;

const styles = StyleSheet.create({
  container: {alignItems: "center"},
  img: {
    marginTop: 30,
    marginStart: 10,
    width: "98%",
    height: 350,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#fff",
    //width: 100,
    borderRadius: 40,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,

    alignSelf: "center",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
  },
});
