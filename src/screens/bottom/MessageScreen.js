import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageScreen = ({navigation}) => {
  const [message, setMessage] = useState([
    {
      title: 'Viajes Deza',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/vd.png'),
      body: 'Hola qué tal como podria...',
      id: 0,
    },
    {
      title: 'Last Minute',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/lm.png'),
      body: 'Hola qué tal como podria...',
      id: 1,
    },
    {
      title: 'Dream CC',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/dcc.png'),
      body: 'Hola qué tal como podria...',
      id: 2,
    },
    {
      title: 'Jorge Aristegui',
      type: 'Particular',
      status: 'read',
      time: '4d',
      image: require('../../assets/img/joses.png'),
      body: 'Hola qué tal como podria...',
      id: 3,
    },
    {
      title: 'Melissa Zuñiga',
      type: 'Particular',
      status: 'read',
      time: '5d',
      image: require('../../assets/img/melisa.png'),
      body: 'Hola qué tal como podria...',
      id: 4,
    },
    {
      title: 'Viajes Deza',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/vd.png'),
      body: 'Hola qué tal como podria...',
      id: 5,
    },
    {
      title: 'Last Minute',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/lm.png'),
      body: 'Hola qué tal como podria...',
      id: 6,
    },
  ]);

  const messageListItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={{flexDirection: 'row', margin: 10}}>
        <View style={{width: '20%'}}>
          <Image
            style={{width: 80, height: 80, borderRadius: 100}}
            source={item.image}
          />
        </View>

        <View style={{marginStart: 10, width: '70%'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 10,
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
            {item.type}{' '}
          </Text>
          <Text
            style={[
              {
                marginTop: 5,
                fontSize: 14,
                textAlign: 'justify',
                color: '#000',
                marginStart: 10,
              },
              item.status === 'unread' ? {fontWeight: 'bold'} : null,
            ]}>
            {item.body} <Text> .{item.time}</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {item.status === 'unread' ? (
            <Ionicons name="ellipse" size={14} color="#FF007F" />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View
        style={{
          marginStart: 15,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
          Mensajes
        </Text>
        <TouchableOpacity
          style={{
            alignContent: 'center',
            padding: 5,
            borderRadius: 100,
            backgroundColor: 'rgba(216, 17, 89, 0.15)',
            margin: 5,
          }}>
          <Ionicons
            name="add-outline"
            size={34}
            color="#D81159"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <FlatList
            data={message}
            renderItem={({item}) => {
              return messageListItem(item);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageScreen;
