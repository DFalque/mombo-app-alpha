import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonBottom = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="add-circle-outline" size={26} color="#ffffff" />
      <Text
        style={{margin: 5, color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
        Agregar Evento
      </Text>
    </View>
  );
};

export default ButtonBottom;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D81159',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 0,
  },
});
