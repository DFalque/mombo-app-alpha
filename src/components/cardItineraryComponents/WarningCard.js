import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WarningCard = () => {
  return (
    <View style={{margin: 10, marginBottom: 50}}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            style={styles.icon}
            name="warning-outline"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Un coche de la empresas de transporte le esperará en la recepción.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WarningCard;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: '#FFFA83',
    margin: 5,
    borderRadius: 25,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  text: {marginStart: 5, marginEnd: 5},
  containerIcon: {
    width: '15%',
    justifyContent: 'flex-start',
    //  alignItems: 'flex-start',
  },
  containerText: {width: '80%'},
  icon: {alignSelf: 'center'},
});
