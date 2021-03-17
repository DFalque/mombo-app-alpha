import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//COMPONENTES
//UI
import ActionButton from '../ActionButton';

const TransportCard = () => {
  return (
    <View style={{margin: 10, marginBottom: 50}}>
      <View style={styles.containerHeader}>
        <Ionicons name="car-outline" size={24} color="#D81159" />
        <Text style={styles.header}>Transporte</Text>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.containerCardTitle}>
          <Text style={styles.tittle}>Transporte al Aeropuerto</Text>
          <Text style={styles.tittle}>80€</Text>
        </View>
        <View style={styles.containerCardDescription}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>• Desde:</Text>
            <Text style={styles.text}>Hotel los Escudos</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>• Hasta</Text>
            <Text style={styles.text}>Aeropuerto de Oporto</Text>
          </View>
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

export default TransportCard;

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
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'green',
    //flexWrap: 'wrap',
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
