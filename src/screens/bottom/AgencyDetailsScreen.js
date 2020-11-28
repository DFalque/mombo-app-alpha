import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const AgencyDetailsScreen = ({navigation}) => {
  const [viajes, setViajes] = useState([
    {
      title: 'Viaje a St. Port',
      city: 'Cáceres',
      rating: '5.0 (1300+)',
      image: require('../../assets/img/viaje.png'),
      body:
        'Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.',
      id: 1,
    },
    {
      title: 'Viaje a Cádiz',
      city: 'Sevilla',
      rating: '4.9 (1100+)',
      image: require('../../assets/img/port.png'),
      body:
        'Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.',
      id: 2,
    },
    {
      title: 'Viaje a St. Port',
      city: 'Tenerife',
      rating: '4.7 (1500+)',
      image: require('../../assets/img/sva.png'),
      body:
        'Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.',
      id: 3,
    },
  ]);

  const [topAgencias, setTopAgencias] = useState([
    {
      title: 'Viaje a Túlum',
      city: 'México',
      rating: '5.0 (1300+)',
      image: require('../../assets/img/tulum.png'),
      body:
        'Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.',
      id: 1,
    },
    {
      title: 'Viaje a Cancún',
      city: 'México',
      rating: '4.9 (1100+)',
      image: require('../../assets/img/cancum.png'),
      body:
        'Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.',
      id: 2,
    },
    {
      title: 'Viaje a Túlum',
      city: 'Tenerife',
      rating: '4.7 (1500+)',
      image: require('../../assets/img/tulum.png'),
      body:
        'Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.',
      id: 3,
    },
  ]);

  const [message, setMessage] = useState([
    {
      title: 'Viajes Deza',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/vd.png'),
      body:
        'Lorem ipsum dolor sit amet, consec sesasa cutur sectetur adipisciascen...',
      id: 0,
    },
    {
      title: 'Last Minute',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/lm.png'),
      body:
        'Lorem ipsum dolor sit amet, consec sesasa cutur sectetur adipisciascen...',
      id: 1,
    },
    {
      title: 'Dream CC',
      type: 'Agencia',
      status: 'unread',
      time: '1hr',
      image: require('../../assets/img/dcc.png'),
      body:
        'Lorem ipsum dolor sit amet, consec sesasa cutur sectetur adipisciascen...',
      id: 2,
    },
    {
      title: 'Jorge Aristegui',
      type: 'Particular',
      status: 'read',
      time: '4d',
      image: require('../../assets/img/joses.png'),
      body:
        'Lorem ipsum dolor sit amet, consec sesasa cutur sectetur adipisciascen...',
      id: 3,
    },
    {
      title: 'Melissa Zuñiga',
      type: 'Particular',
      status: 'read',
      time: '5d',
      image: require('../../assets/img/melisa.png'),
      body:
        'Lorem ipsum dolor sit amet, consec sesasa cutur sectetur adipisciascen...',
      id: 4,
    },
  ]);
  // render item for parati section

  const topAgenciasListItem = (item) => {
    return (
      <View style={{flexDirection: 'row', margin: 5, width: 350}}>
        <ImageBackground
          imageStyle={{borderRadius: 30}}
          style={{width: 170, height: 220, marginTop: 10}}
          source={item.image}>
          <View
            style={{
              marginTop: 20,
              width: 140,
              position: 'absolute',
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            {item.id === 1 ? (
              <Ionicons name="heart" size={25} color="#FF007F" />
            ) : (
              <Ionicons name="heart-outline" size={25} color="#fff" />
            )}
            <Text style={{color: '#fff'}}>7 Dias</Text>
          </View>
          <View
            style={{
              margin: 10,
              alignItems: 'center',
              position: 'absolute',
              bottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{height: 30, width: 30, marginTop: 10, borderRadius: 50}}
              source={require('../../assets/img/lm.png')}
            />
            <Text style={{color: '#fff', marginTop: 10, marginStart: 10}}>
              Last Minute
            </Text>
          </View>
        </ImageBackground>
        <View style={{marginStart: 10, marginTop: 5, width: '50%'}}>
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
            {item.city}{' '}
          </Text>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Ionicons name="airplane-outline" size={25} color="#000" />
            <Ionicons name="car-outline" size={25} color="#000" />
            <Ionicons name="restaurant-outline" size={25} color="#000" />
            <Ionicons name="sunny-outline" size={25} color="#000" />
          </View>

          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Text>desde</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>2000€</Text>
            <TouchableOpacity
              onPress={() => alert('Do Something')}
              style={[
                {
                  width: 100,
                  backgroundColor: '#FF007F',
                  alignItems: 'center',
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 40,
                },
              ]}>
              <Text style={[styles.categoryListText, {color: '#fff'}]}>
                VER MÁS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  //   message list item
  const messageListItem = (item) => {
    return (
      <View style={{flexDirection: 'row', margin: 10}}>
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
            {item.body}{' '}
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Ionicons name="star-outline" size={14} color="#FF007F" />
          <Text style={{fontWeight: 'bold', marginStart: 5}}>5</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <ScrollView>
          <ImageBackground
            style={{
              width: '100%',
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={require('../../assets/img/bgad.png')}
          />
          <View style={{position: 'absolute', marginStart: 10, top: 10}}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back-outline"
              size={30}
              color="#FF007F"
            />
          </View>
          <View
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: '#fff',
            }}>
            <View style={{position: 'relative', top: -100}}>
              {/* Profile Details */}
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 200,
                    width: 200,
                    marginTop: 10,
                    borderRadius: 100,
                  }}
                  source={require('../../assets/img/lm.png')}
                />

                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Ionicons name="star" size={14} color="#FF007F" />
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000',
                      marginStart: 10,
                      marginEnd: 15,
                    }}>
                    5.0 (1300+)
                  </Text>
                </View>

                <Text
                  style={{
                    marginTop: 10,
                    color: '#000',
                    fontSize: 28,
                    fontWeight: 'bold',
                  }}>
                  Last Minute
                </Text>

                <Text
                  style={{
                    margin: 5,
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  España
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                    textAlign: 'justify',
                    margin: 10,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit
                  amet purus sit amet purus sit amet doloramet dolor.
                </Text>
              </View>
              {/* Group section */}
              <View>
                <View
                  style={{
                    margin: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                    Nacionales
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert('Do Something')}
                    style={[styles.categoryList, {backgroundColor: 'pink'}]}>
                    <Text style={[styles.categoryListText, {color: '#D81159'}]}>
                      Ver todos
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  horizontal={true}
                  data={viajes}
                  renderItem={({item}) => {
                    return topAgenciasListItem(item);
                  }}
                />
              </View>

              {/* Internacionales section */}
              <View style={{marginTop: 20}}>
                <View
                  style={{
                    margin: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                    Internacionales
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert('Do Something')}
                    style={[styles.categoryList, {backgroundColor: 'pink'}]}>
                    <Text style={[styles.categoryListText, {color: '#D81159'}]}>
                      Ver todos
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  horizontal={true}
                  data={topAgencias}
                  renderItem={({item}) => {
                    return topAgenciasListItem(item);
                  }}
                />
              </View>

              {/* Comment section */}
              <View style={{marginTop: 20}}>
                <View
                  style={{
                    margin: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                    Comentarios
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert('Do Something')}
                    style={[styles.categoryList, {backgroundColor: 'pink'}]}>
                    <Text style={[styles.categoryListText, {color: '#D81159'}]}>
                      Ver todos
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={message}
                  renderItem={({item}) => {
                    return messageListItem(item);
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          height: 60,
          backgroundColor: '#D81159',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="chatbubble-outline" size={26} color="#ffffff" />
        <Text
          style={{margin: 5, color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          ENVIAR MENSAJE
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AgencyDetailsScreen;

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
  },

  title: {
    marginStart: 10,
    paddingStart: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 160,
  },

  text: {
    fontSize: 16,
    lineHeight: 25,
    padding: 10,
    color: '#fff',
    margin: 10,
    textAlign: 'justify',
  },
  buttonCircle: {
    marginBottom: 30,
    backgroundColor: '#FF007F',
    width: 100,
    borderRadius: 40,
    padding: 10,
    alignSelf: 'center',
  },
  activedotStyle: {
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: '#FF007F',
  },
  dotStyle: {
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },

  categoryList: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  categoryListText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 5,
  },

  infoText: {margin: 5, fontSize: 18},
});
