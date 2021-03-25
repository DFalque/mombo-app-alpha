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
  Button,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
//COMPONENTES
import ActionButton from '../../components/ActionButton';
import Section from '../../components/Section';
const ProfileScreen = (props, {navigation}) => {
  console.log(props);

  const [group, setGroup] = useState([
    {title: 'Alaska', image: require('../../assets/img/alaska.png'), id: 0},
    {title: 'Lisbon', image: require('../../assets/img/jap.png'), id: 1},
    {title: 'Lagos', image: require('../../assets/img/japon.png'), id: 2},
  ]);
  const [listItem, setListItem] = useState([
    {
      title: 'Preferencias de viaje',
      body:
        'Selecciona como prefieres viajar, así podremos enviarte viajes personalizados.',
      id: 0,
      icon: 'build-outline',
    },
    {
      title: 'Pasaporte',
      body: 'Ahorra tiempo añadiento tu documentación.',
      id: 2,
      icon: 'checkbox-outline',
    },
    {
      title: 'Configuración',
      body: 'Edita tu cuenta y forma de pago de forma segura.',
      id: 3,
      icon: 'settings-outline',
    },
    {
      title: 'Ayuda',
      body: 'Puedes echar un vistazo a nuestra guía de ayuda.',
      id: 4,
      icon: 'flower-outline',
    },
  ]);

  const groupListItem = (item) => {
    return (
      <View
        style={{maxWidth: 280, maxHeight: 350, borderRadius: 30, margin: 5}}>
        <Image
          style={{
            width: 200,
            height: 270,
            alignSelf: 'center',
            borderRadius: 30,
          }}
          source={item.image}
        />
        <Text
          style={{
            position: 'absolute',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            margin: 10,
          }}>
          {item.title}{' '}
        </Text>
        <View style={{position: 'absolute', bottom: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              margin: 10,
            }}>
            Miembros
          </Text>
          <View style={{flexDirection: 'row', marginStart: 20}}>
            <Image
              style={{
                height: 30,
                position: 'relative',
                marginEnd: -15,
                width: 30,
                borderRadius: 100,
              }}
              source={require('../../assets/img/paulo.png')}
            />
            <Image
              style={{
                height: 30,
                position: 'relative',
                marginEnd: -15,
                width: 30,
                borderRadius: 100,
              }}
              source={require('../../assets/img/george.png')}
            />
            <Image
              style={{height: 30, width: 30, borderRadius: 100}}
              source={require('../../assets/img/melisa.png')}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          style={{
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../assets/img/profilebg.png')}
        />
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#fff',
          }}>
          <Icon
            name="create-outline"
            size={26}
            color="#D81159"
            style={{margin: 10, position: 'absolute', right: 10}}
          />

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
                source={require('../../assets/img/paulo.png')}
              />

              <Text
                style={{
                  marginTop: 10,
                  color: '#000',
                  fontSize: 28,
                  fontWeight: 'bold',
                }}>
                Paulo González
              </Text>

              <Text
                style={{
                  margin: 5,
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Vigo, España
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 20,
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Feather name="check-circle" color="#D81159" size={20} />
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginStart: 5}}>
                    E-mail Confirmado
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 20,
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Feather name="check-circle" color="#D81159" size={20} />
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginStart: 5}}>
                    Pasaporte
                  </Text>
                </View>
              </View>
            </View>
            {/* Group section */}
            <Section title="Mis Viajes" boton={true} text="Ver todos" />
            <View>
              <FlatList
                horizontal={true}
                data={group}
                renderItem={({item}) => {
                  return groupListItem(item);
                }}
              />
            </View>

            {/* Vertical items list section */}
            <View>
              <View
                style={{
                  margin: 10,
                  alignSelf: 'center',
                }}>
                <ActionButton text="Crear Viaje" />
              </View>

              <FlatList
                data={listItem}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#fff',
                        shadowRadius: 10,
                        shadowOpacity: 0.9,
                        shadowOffset: {x: 5, y: -5},
                        elevation: 10,
                        overflow: 'hidden',
                        margin: 10,
                        borderRadius: 30,
                      }}>
                      <View
                        style={{
                          marginStart: 10,
                          marginEnd: 10,
                          marginTop: 30,
                          marginBottom: 15,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                          {' '}
                          {item.title}{' '}
                        </Text>

                        <Icon name={item.icon} size={26} color="#D81159" />
                      </View>

                      <Text
                        style={{
                          marginStart: 10,
                          width: 290,
                          marginEnd: 10,
                          fontSize: 16,
                          marginBottom: 20,
                        }}>
                        {item.body}{' '}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <Button title="Cerrar sesión" onPress={() => auth().signOut()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    backgroundColor: '#D81159',
    width: 100,
    borderRadius: 40,
    padding: 10,
    alignSelf: 'center',
  },
  activedotStyle: {
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: '#D81159',
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
