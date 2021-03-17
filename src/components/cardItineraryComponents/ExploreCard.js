import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//COMPONENTES
//UI
import ActionButton from '../ActionButton';

const ExploreCard = () => {
  return (
    <View style={{margin: 10, marginBottom: 50}}>
      <View style={styles.containerHeader}>
        <Ionicons name="compass-outline" size={24} color="#D81159" />
        <Text style={styles.header}>Explora Oporto</Text>
      </View>
      <View style={styles.containerImg}>
        <ImageBackground
          imageStyle={{
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: '#fff',
            resizeMode: 'cover',
          }}
          style={styles.img}
          source={require('../../assets/img/descub.png')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>EXPLORAR</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  containerHeader: {
    marginStart: 25,
    marginBottom: 10,
    //paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  containerImg: {
    width: '98%',
    height: 250,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: 'red',
  },
  img: {
    width: '100%',
    height: '100%',
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOpacity: 0.2,
    shadowOffset: {x: 5, y: -5},
    elevation: 20,
    overflow: 'hidden',
    alignSelf: 'center',

    justifyContent: 'center',
  },

  header: {
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 15,
    marginStart: 15,
  },

  button: {
    backgroundColor: '#fff',
    //width: 100,
    borderRadius: 40,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,

    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
  },
});
