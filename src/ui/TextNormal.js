import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextNormal = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default TextNormal;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'justify',
    color: '#000',
  },
});
