import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopListItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', margin: 20}}>
      <Image
        style={{width: 100, height: 100, marginTop: 10, borderRadius: 25}}
        source={item.image}
      />
      <View style={{marginStart: 10, marginTop: 5, width: '65%'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
            marginStart: 10,
          }}>
          {item.title}{' '}
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'justify',
            color: '#000',
            marginStart: 10,
          }}>
          {item.city}{' '}
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => alert('Do Something')}
            style={{
              width: 40,
              backgroundColor: '#F2F2F2',
              alignItems: 'center',
              marginBottom: 5,
              padding: 5,
              borderRadius: 40,
            }}>
            <Text style={[styles.categoryListText, {color: '#D81159'}]}>
              Ver
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="bulb-outline" size={14} color="#FF007F" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              marginEnd: 10,
              marginStart: 3,
            }}>
            Top #{item.id}
          </Text>

          <Ionicons name="star-outline" size={14} color="#FF007F" />
          <Text style={{fontSize: 14, color: '#000', marginStart: 3}}>
            {item.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopListItem;

const styles = StyleSheet.create({
  categoryListText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
