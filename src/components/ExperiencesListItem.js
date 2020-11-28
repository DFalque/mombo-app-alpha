import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const ExperiencesListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={styles.imageBackground}
        source={item.image}>
        <View style={styles.containerText}>
          <Text style={styles.header}>{item.title}</Text>
          <View>
            <Text style={styles.body}>{item.text}</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>VER MÁS</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ExperiencesListItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  imageBackground: {width: '98%', height: 470},
  containerText: {position: 'absolute', bottom: 10},
  header: {
    marginStart: 10,
    paddingStart: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  body: {
    fontSize: 16,
    lineHeight: 25,
    padding: 10,
    color: '#fff',
    margin: 10,
    textAlign: 'justify',
  },
  button: {
    marginBottom: 30,
    backgroundColor: '#D81159',
    width: 100,
    borderRadius: 40,
    padding: 10,
    alignSelf: 'center',
  },
  buttonText: {color: '#fff', textAlign: 'center'},
});
