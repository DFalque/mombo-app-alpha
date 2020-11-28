import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-search"
        onPress={() => alert('searech')}
        size={25}
        color={'#D81159'}
        style={styles.icon}
      />
      <TextInput
        placeholder="¿Cuál será tu próxima aventura?"
        placeholderTextColor="#000"
        color="#000"
        autoCapitalize="none"
        fontSize={12}
        fontWeight="bold"
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 10,
  },
  icon: {alignSelf: 'center', marginEnd: 10},
  textInput: {
    flex: 1,
    padding: 0,
    opacity: 0.5,
    lineHeight: 15,
    fontStyle: 'normal',
    fontFamily: 'MontSerrat',
  },
});
