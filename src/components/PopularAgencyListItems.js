import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const PopularAgencyListItems = ({navigation, item}) => {
  console.log('componente cargado');
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      delayPressIn={0}
      onPress={() => navigation.navigate('Agencia')}>
      <Text style={styles.header}>{item.title} </Text>
      <Text style={styles.body}>{item.body} </Text>
      <Image style={styles.img} source={item.image} />
    </TouchableOpacity>
  );
};

export default PopularAgencyListItems;

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    margin: 5,
    marginEnd: 15,
    marginTop: 15,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 17,
    color: '#000',
    marginStart: 10,
    marginBottom: 5,
  },
  body: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'justify',
    color: '#000',
    marginStart: 10,
    marginBottom: 10,
  },
  img: {
    marginStart: 5,
    width: '98%',
    height: 250,
    borderRadius: 30,
  },
});
