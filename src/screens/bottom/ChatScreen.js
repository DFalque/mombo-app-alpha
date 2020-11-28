import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
            color="#D81159"
          />
        </View>

        <View>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../../assets/img/melisa.png')}
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
              Melissa Zuñiga{' '}
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: '#000', marginStart: 5}}>
            Activo hace 2 horas
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            right: 30,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => alert('Do Something')}
            style={{
              alignContent: 'center',
              padding: 5,
              borderRadius: 100,
              backgroundColor: 'pink',
              margin: 5,
            }}>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={24}
              color="#D81159"
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/*HEADER dESIGN  */}
        <View>
          {/* messagen body design */}
          <View>
            {/* left chat bubble */}
            <View style={{flexDirection: 'row', margin: 10, paddingBottom: 10}}>
              <Image
                style={{width: 40, margin: 5, height: 40, borderRadius: 100}}
                source={require('../../assets/img/melisa.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  margin: 5,
                  borderRadius: 30,
                  height: 50,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 16, marginStart: 10, color: '#000'}}>
                  Hola, ¿en que podría ayudarte?{' '}
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    marginTop: 10,
                    marginEnd: 10,
                  }}>
                  11:45
                </Text>
              </View>
            </View>
            {/* right chat buble */}
            <View
              style={{
                width: '70%',
                backgroundColor: '#EDEDED',
                margin: 5,
                borderRadius: 30,
                alignSelf: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingTop: 10,
                  marginStart: 20,
                  color: '#000',
                }}>
                Estoy muy interesado en viajar a Portugal
              </Text>

              <Text
                style={{
                  textAlign: 'right',
                  fontSize: 14,
                  color: '#000',
                  marginBottom: 10,
                  marginEnd: 20,
                }}>
                11:45
              </Text>
            </View>
            {/* the long chat box */}
            <View style={{flexDirection: 'row', margin: 10, paddingBottom: 10}}>
              <Image
                style={{width: 40, margin: 5, height: 40, borderRadius: 100}}
                source={require('../../assets/img/melisa.png')}
              />
              <View
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  padding: 5,
                  margin: 5,
                  paddingTop: 10,
                  borderRadius: 30,
                  width: 250,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    margin: 10,
                    color: '#000',
                  }}>
                  VIAJE A PORTUGAL
                </Text>
                <Text style={{fontSize: 16, marginStart: 10, color: '#000'}}>
                  17 Nov - 27 Nov{' '}
                </Text>

                <Text
                  style={{
                    textAlign: 'justify',
                    fontSize: 16,
                    color: '#000',
                    margin: 10,
                  }}>
                  Hola Pablo, he mirado tus anteriores viajes y creo que te
                  gustará lo que te he preparado. Si necesitas hacer algún
                  cambio sólo tienes que avisarme ;)
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    borderTopWidth: 1,
                    paddingTop: 10,
                    marginStart: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons
                      name="arrow-forward-outline"
                      size={25}
                      color="#D81159"
                    />
                    <Ionicons
                      name="arrow-back-outline"
                      size={25}
                      color="#D81159"
                    />
                  </View>
                  <Text style={{fontSize: 16, margin: 5, color: '#000'}}>
                    Vuelo redondo{' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 10,
                    justifyContent: 'space-around',
                  }}>
                  <Ionicons name="star-outline" size={25} color="#FF007F" />
                  <Text style={{fontSize: 16, margin: 5, color: '#000'}}>
                    Hotel 5 estrellas{' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 10,
                    justifyContent: 'space-around',
                  }}>
                  <Ionicons name="compass-outline" size={25} color="#FF007F" />
                  <Text style={{fontSize: 16, margin: 5, color: '#000'}}>
                    4 Tours{' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 10,
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    justifyContent: 'space-around',
                  }}>
                  <Ionicons name="calendar-outline" size={25} color="#FF007F" />
                  <Text style={{fontSize: 16, margin: 5, color: '#000'}}>
                    10 Días.
                  </Text>
                </View>

                <View style={{paddingBottom: 20, paddingTop: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      fontWeight: 'bold',
                      margin: 5,
                      color: '#D81159',
                    }}>
                    Total: 1200 €
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Itinerario')}
                    style={{
                      backgroundColor: '#D81159',
                      borderRadius: 40,
                      padding: 15,
                      alignSelf: 'center',
                    }}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Ver Oferta
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 14,
                      color: '#000',
                      marginEnd: 20,
                    }}>
                    11:57
                  </Text>
                </View>
              </View>
            </View>
            {/* message seding design */}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 130,
          shadowColor: '#fff',
          shadowRadius: 10,
          shadowOpacity: 0.9,
          shadowOffset: {x: 5, y: -5},
          elevation: 10,
          overflow: 'hidden',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
          }}>
          <Ionicons name="create-outline" size={20} color="#D81159" />
          <Text
            style={{
              fontSize: 12,
              margin: 5,
              color: '#000',
              opacity: 0.5,
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: 15,
            }}>
            Crear Oferta
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchBox}>
            <Ionicons
              name="logo-flickr"
              onPress={() => alert('searech')}
              size={25}
              color={'#D81159'}
              style={{alignSelf: 'center', marginEnd: 10}}
            />
            <TextInput
              placeholder="Escribe algo..."
              placeholderTextColor="#000"
              color="#000"
              autoCapitalize="none"
              fontSize={14}
              fontWeight="normal"
              style={{flex: 1, padding: 0}}
            />
          </View>
          <View style={{alignSelf: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => alert('Do Something')}
              style={{
                alignContent: 'center',
                padding: 10,
                borderRadius: 100,
                backgroundColor: '#D81159',
                margin: 10,
              }}>
              <Ionicons
                name="send-outline"
                size={24}
                color="#FFF"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  searchBox: {
    marginBottom: Platform.OS === 'ios' ? 5 : 5,
    marginStart: 10,
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    width: '75%',
    borderRadius: 25,
    padding: 5,
  },
});
