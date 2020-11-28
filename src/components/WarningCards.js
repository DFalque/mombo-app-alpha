import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WarningCards = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.header}> {item.title} </Text>
        <Icon name={item.icon} size={26} color="#FF007F" />
      </View>
      <Text style={styles.body}>{item.body} </Text>
    </View>
  );
};

export default WarningCards;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 250,
    height: 300,
    margin: 10,
    backgroundColor: '#fff',
    // backgroundColor: 'black',
    shadowColor: '#fff',
    shadowRadius: 20,
    shadowOpacity: 0.2,
    shadowOffset: {x: 5, y: -5},
    elevation: 8,
    overflow: 'hidden',

    //boxShadow: 'inset',
    // overflow: 'visible',
    //zIndex: 999,
    //marginTop: 10000,
  },
  containerHeader: {
    marginStart: 10,
    marginEnd: 10,
    marginTop: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {width: 100, fontSize: 20, fontWeight: 'bold'},
  containerBody: {},
  body: {
    marginStart: 10,
    marginEnd: 10,
    textAlign: 'justify',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
});
