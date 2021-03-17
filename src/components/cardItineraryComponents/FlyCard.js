import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//COMPONENTES
//UI
import ActionButton from '../ActionButton';

const FlyCard = () => {
  return (
    <View style={{margin: 10, marginBottom: 50}}>
      <View style={styles.containerHeader}>
        <Ionicons name="airplane-outline" size={24} color="#D81159" />
        <Text style={styles.header}>Vuelo - Ida</Text>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.containerCardTitle}>
          <Text style={styles.tittle}>Aeropuerto de Madrid-Barajas</Text>
          <Text style={styles.tittle}>300€</Text>
        </View>
        <View style={styles.containerCardDescription}>
          <Text style={styles.text}>• Vuelo Internacional</Text>
          <Text style={styles.text}>• 2 Adultos</Text>
          <Text style={styles.text}>• 2 Niños</Text>
          <Text style={styles.text}>• 1 Escala</Text>
        </View>
        <View style={styles.containerCardFooter}>
          <View>
            <ActionButton />
          </View>
          <Text style={{color: '#000', alignSelf: 'flex-start'}}>12:00</Text>
        </View>
      </View>
    </View>
  );
};

export default FlyCard;

const styles = StyleSheet.create({
  containerHeader: {
    marginStart: 25,
    marginBottom: 10,
    //paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  containerCard: {
    height: 190,
    margin: 5,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowRadius: 25,
    shadowOpacity: 0.2,
    shadowOffset: {x: 5, y: -5},
    elevation: 5,
    overflow: 'hidden',
    padding: 5,
    justifyContent: 'space-between',
  },
  containerCardTitle: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //  backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  containerCardDescription: {
    width: '70%',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'green',
    flexWrap: 'wrap',
  },
  containerCardFooter: {
    // backgroundColor: 'red',
    flex: 2,
    paddingBottom: 5,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 15,
    marginStart: 15,
  },
  tittle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  text: {fontSize: 12, color: '#000', marginEnd: 10, marginBottom: 10},
});
