import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from './ActionButton';

const AgencyListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={{borderRadius: 30}}
          style={styles.img}
          source={item.image}>
          <View style={styles.containerImgHeader}>
            <Ionicons name="heart" size={25} color="#FF007F" />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.title}>{item.title} </Text>
        <Text style={styles.city}>{item.city} </Text>
        <Text style={styles.description}>{item.body} </Text>
        <View
          style={{
            marginTop: 10,
            marginBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="star-outline" size={12} color="#FF007F" />
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              marginEnd: 10,
              marginStart: 3,
            }}>
            {item.rating}
          </Text>

          <Ionicons name="location-outline" size={12} color="#FF007F" />
          <Text style={{fontSize: 12, color: '#000', marginStart: 3}}>
            {item.km}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <ActionButton />
        </View>
      </View>
    </View>
  );
};

export default AgencyListItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 20},
  containerImg: {
    backgroundColor: '#fff',
    width: '45%',
    height: 200,
  },
  img: {
    //backgroundColor: '#fff',
    flex: 1,
    borderRadius: 30,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowRadius: 20,
    shadowOpacity: 0.2,
    shadowOffset: {x: 5, y: -5},
    elevation: 5,
    // overflow: 'hidden',
    margin: 0,
  },
  containerImgHeader: {
    marginTop: 15,
    marginStart: 15,
    width: 140,
    position: 'absolute',
  },
  containerDescription: {marginStart: 10, marginTop: 8, width: '55%'},
  title: {fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 2},
  city: {fontSize: 12, color: '#000'},
  description: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 18,
    marginTop: 5,
    textAlign: 'left',
    color: '#000',
  },
});
