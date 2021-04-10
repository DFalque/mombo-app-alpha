import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const NewsListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />

      <View style={styles.containerText}>
        <View style={styles.containerTextHeader}>
          <Text style={styles.header}>{item.title} </Text>
        </View>
        <View style={styles.containerTextBody}>
          <Text style={styles.body}>{item.body} </Text>
        </View>
        <View style={styles.containerFooter}>
          <Icon name={item.icon} style={styles.icon} size={12} color="#000" />
          <Text style={styles.footer}>{item.tag}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({
  container: {
    maxWidth: 230,
    height: 350,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    margin: 10,
    //borderWidth:0.4, borderColor:'#D3D3D3'
    shadowColor: "#fff",
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {x: 5, y: -5},
    elevation: 10,
    overflow: "hidden",
    //backgroundColor: 'pink',
  },
  containerImg: {width: "100%"},
  image: {
    //maxWidth: 230,
    width: "100%",
    height: "50%",
    flex: 1,
    //borderRadius: 30,
    //backgroundColor: '#FFFFFF',
    margin: 0,
    //borderWidth:0.4, borderColor:'#D3D3D3'
    //shadowColor: '#fff',
    //shadowRadius: 10,
    //shadowOpacity: 0.2,
    //shadowOffset: {x: 5, y: -5},
    elevation: 5,
    overflow: "hidden",
    //backgroundColor: 'pink',
  },
  containerText: {
    //backgroundColor: 'red',
    height: "50%",
    flex: 1,
  },
  containerTextHeader: {
    //backgroundColor: 'red',
    flex: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
  },
  containerTextBody: {
    // backgroundColor: 'yellow',
    flex: 2,
  },
  body: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    marginStart: 10,
    marginEnd: 5,
    lineHeight: 14.63,
  },
  containerFooter: {
    // justifyContent: 'space-between',
    //backgroundColor: 'blue',
    flexDirection: "row",
    marginStart: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {alignSelf: "center"},
  footer: {fontSize: 11, fontWeight: "bold", marginStart: 5},
});
