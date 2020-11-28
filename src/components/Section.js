import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegularBotton from './RegularBotton';

const Section = ({title, text, boton}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {boton ? <RegularBotton text={text} /> : null}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 29,
  },
});
