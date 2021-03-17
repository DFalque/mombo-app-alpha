import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//COMPONENTES
//UI
import ActionButton from '../ActionButton';

const HotelCard = () => {
  return (
    <View style={{margin: 10, marginBottom: 50}}>
      <View style={styles.containerHeader}>
        <Ionicons name="bed-outline" size={24} color="#D81159" />
        <Text style={styles.header}>Hotel</Text>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.containerCardTitle}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'green',
            }}>
            <Image
              style={{
                width: 65,
                height: 65,
                borderRadius: 100,
                //backgroundColor: 'blue',
                //background: 'url("../../assets/img/alaska.png")',
                margin: 0,
              }}
              source={require('../../assets/img/alaska.png')}
            />
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.tittle}>Hotel Imperial</Text>
              <Text style={styles.tittle}>Oporto</Text>
            </View>
          </View>
          <Text style={styles.tittle}>80€</Text>
        </View>

        <View style={styles.containerCardDescription}>
          <View style={styles.containerIcons}>
            <Ionicons name="airplane-outline" size={25} color="#000" />
            <Ionicons name="car-outline" size={25} color="#000" />
            <Ionicons name="restaurant-outline" size={25} color="#000" />
            <Ionicons name="sunny-outline" size={25} color="#000" />
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

export default HotelCard;

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
    height: 250,
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
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //  backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  containerCardDescription: {
    width: '100%',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
    marginStart: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  text: {fontSize: 12, color: '#000', marginEnd: 10, marginBottom: 10},
  containerIcons: {
    width: '80%',
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
