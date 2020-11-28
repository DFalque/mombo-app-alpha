import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

const CardListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 30}}
        style={styles.img}
        source={item.image}>
        <Text style={styles.title}>{item.title}</Text>
        {styles.text ? (
          <Text style={styles.text}>{item.address}</Text>
        ) : (
          <Text>hola</Text>
        )}
      </ImageBackground>
    </View>
  );
};

export default CardListItem;

const styles = StyleSheet.create({
  container: {maxWidth: 300, flexDirection: 'row', margin: 5},
  img: {width: 160, height: 175, justifyContent: 'center'},
  title: {textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#fff'},
  text: {textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: '#fff'},
});
