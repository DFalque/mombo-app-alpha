import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = ({navigation}) => {
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState([
    {title: '21', id: 0},
    {title: '22', id: 1},
    {title: '23', id: 2},
    {title: '24', id: 3},
    {title: '25', id: 4},
    {title: '26', id: 5},
    {title: '27', id: 6},
    {title: '28', id: 7},
    {title: '29', id: 8},
    {title: '30', id: 9},
  ]);

  const changeBg = (item) => {
    setCategoryId(item.id);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <ScrollView>
          {/*HEADER dESIGN  */}
          <View style={{backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  marginEnd: 10,
                  justifyContent: 'center',
                }}>
                <Ionicons
                  onPress={() => navigation.goBack()}
                  name="arrow-back-outline"
                  size={30}
                  color="#FF007F"
                />
              </View>

              <View>
                <Image
                  style={{width: 50, height: 50, borderRadius: 100}}
                  source={require('../../assets/img/espana.png')}
                />
              </View>

              <View style={{marginStart: 5, width: '70%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginStart: 5,
                    }}>
                    Zumaya, España
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 14, color: '#000', marginStart: 5}}>
                  Viaje 20 Nov - 30 Nov
                </Text>
              </View>
            </View>

            {/* number list section */}
            <View style={{margin: 10}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                Itinerario
              </Text>

              <FlatList
                horizontal={true}
                data={category}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => [changeBg(item)]}
                      style={[
                        styles.categoryList,
                        item.id === categoryId
                          ? {backgroundColor: '#FF007F'}
                          : null,
                      ]}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            styles.categoryListText,
                            item.id === categoryId ? {color: '#FFf'} : null,
                          ]}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            {/* box list section */}
            <View style={{margin: 10}}>
              <View
                style={{
                  marginStart: 25,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="airplane-outline" size={24} color="#FF007F" />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 15}}>
                  Vuelo - Ida
                </Text>
              </View>

              <View
                style={{
                  margin: 5,
                  paddingHorizontal: 20,
                  paddingBottom: 50,
                  borderRadius: 30,
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  shadowOffset: {x: 5, y: -5},
                  elevation: 5,
                  overflow: 'hidden',
                  padding: 20,
                }}>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    Aeropuerto de Madrid-Barajas
                  </Text>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    300€
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#000', marginEnd: 40}}>
                    • Vuelo Internacional
                  </Text>
                  <Text style={{fontSize: 18, color: '#000'}}>• 2 Adultos</Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#000', marginEnd: 40}}>
                    • 2 Niños
                  </Text>
                  <Text style={{fontSize: 18, color: '#000'}}>• 1 Escala</Text>
                </View>

                <View style={styles.buttonCircle}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    VER MÁS
                  </Text>
                </View>

                <Text style={{color: '#000'}}>12:00</Text>
              </View>
            </View>

            {/* vue lo second box */}

            <View style={{margin: 10}}>
              <View
                style={{
                  marginStart: 25,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="airplane-outline" size={24} color="#FF007F" />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 15}}>
                  Vuelo - Llegada
                </Text>
              </View>

              <View
                style={{
                  margin: 5,
                  borderRadius: 30,
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  shadowOffset: {x: 5, y: -5},
                  elevation: 5,
                  overflow: 'hidden',
                  padding: 20,
                }}>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    Aeropuerto de Vigo
                  </Text>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    300€
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#000', marginEnd: 40}}>
                    • Descubre Oporto
                  </Text>
                </View>

                <View style={styles.buttonCircle}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    VER MÁS
                  </Text>
                </View>

                <Text style={{color: '#000'}}>12:00</Text>
              </View>
            </View>

            {/* descubre section */}

            <View style={{margin: 10}}>
              <View
                style={{
                  marginStart: 25,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="compass-outline" size={24} color="#FF007F" />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 15}}>
                  Descubre Oporto 🇪🇸
                </Text>
              </View>
              <ImageBackground
                imageStyle={{borderRadius: 20}}
                style={{
                  shadowColor: '#fff',
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  shadowOffset: {x: 5, y: -5},
                  elevation: 5,
                  overflow: 'hidden',
                  alignSelf: 'center',
                  width: '98%',
                  height: 250,
                  justifyContent: 'center',
                }}
                source={require('../../assets/img/descub.png')}>
                <View style={[styles.buttonCircle, {backgroundColor: '#fff'}]}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    EXPLORAR
                  </Text>
                </View>
              </ImageBackground>
            </View>

            {/* Transpote section */}

            <View style={{margin: 10}}>
              <View
                style={{
                  marginStart: 25,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="car-outline" size={24} color="#FF007F" />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 15}}>
                  Transporte al Hotel
                </Text>
              </View>

              <View
                style={{
                  margin: 5,
                  borderRadius: 30,
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  shadowOffset: {x: 5, y: -5},
                  elevation: 5,
                  overflow: 'hidden',
                  height: 250,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '60%', padding: 5}}>
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        Aeropuerto de Vigo
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#000',
                          marginEnd: 5,
                        }}>
                        25€
                      </Text>
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#000',
                          marginEnd: 40,
                          marginBottom: 10,
                        }}>
                        • Destino
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#000',
                          marginEnd: 40,
                        }}>
                        Hotel Villa Luz
                      </Text>
                    </View>

                    <View style={[styles.buttonCircle, {marginTop: 70}]}>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        VER MÁS
                      </Text>
                    </View>

                    <Text style={{color: '#000'}}>16:00</Text>
                  </View>

                  <View style={{width: '30%'}}>
                    <Image
                      style={{
                        width: 130,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                      }}
                      source={require('../../assets/img/transport.png')}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* progmada section */}
            <View style={{margin: 10}}>
              <View
                style={{
                  marginStart: 25,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="car-outline" size={24} color="#FF007F" />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 15}}>
                  Actividad Programada
                </Text>
              </View>

              <View
                style={{
                  margin: 5,
                  borderRadius: 30,
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  shadowOffset: {x: 5, y: -5},
                  elevation: 5,
                  overflow: 'hidden',
                  height: 250,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '60%', padding: 5}}>
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        Tour Nocturno
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#000',
                          marginEnd: 5,
                        }}>
                        sin costa
                      </Text>
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#000',
                          marginEnd: 40,
                          marginBottom: 10,
                        }}>
                        • Lugar
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#000',
                          marginEnd: 40,
                        }}>
                        Playa Zumaya
                      </Text>
                    </View>

                    <View style={[styles.buttonCircle, {marginTop: 70}]}>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        VER MÁS
                      </Text>
                    </View>

                    <Text style={{color: '#000'}}>16:00</Text>
                  </View>

                  <View style={{width: '30%'}}>
                    <Image
                      style={{
                        width: 130,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                      }}
                      source={require('../../assets/img/tour.png')}
                    />
                  </View>
                </View>
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
          backgroundColor: '#FF007F',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="add-circle-outline" size={26} color="#ffffff" />
        <Text
          style={{margin: 5, color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Agregar Evento
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  categoryList: {
    margin: 5,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  categoryListText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  buttonCircle: {
    marginTop: 20,
    backgroundColor: '#FF007F',
    borderRadius: 40,
    padding: 15,
    alignSelf: 'center',
  },
});
