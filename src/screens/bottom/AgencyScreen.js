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
//COMPONENTES
import SearchBox from '../../components/SearchBox';
import Section from '../../components/Section';
import PopularAgencyListItems from '../../components/PopularAgencyListItems';
import AgencyListItem from '../../components/AgencyListItem';
import TopListItem from '../../components/TopListItem';
import CardListItem from '../../components/CardListItem';

const AgencyScreen = ({navigation}) => {
  const [agency, setAgency] = useState([
    {
      title: 'Last minute',
      image: require('../../assets/img/lm.png'),
      body:
        'Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.',
      id: 0,
    },
    {
      title: 'Dream CC',
      image: require('../../assets/img/dcc.png'),
      body:
        'Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.',
      id: 1,
    },
    {
      title: 'Gypsie',
      image: require('../../assets/img/lm.png'),
      body:
        'Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit.',
      id: 2,
    },
  ]);

  const [agencias, setAgencias] = useState([
    {
      title: 'B The Travel Brand',
      city: 'Vilagarcía de Arousa',
      rating: '4.9 (600+)',
      km: '2.33 km',
      image: require('../../assets/img/b.png'),
      body:
        'Viajes de novios, cruceros, grupos, estudiantes, nieve, vuelos baratos, estancias...',
      id: 0,
    },
    {
      title: 'Viajes Deza',
      city: 'Ponteareas',
      rating: '4.8 (300+)',
      km: '4.17 km',
      image: require('../../assets/img/vd.png'),
      body:
        'Viajes Deza, agencia de viajes en Pontevedra, te ofrece ofertas en viajes para grupos...',
      id: 1,
    },
  ]);

  const [topAgencias, setTopAgencias] = useState([
    {
      title: 'Dream Cáceres',
      city: 'Cáceres',
      rating: '5.0 (1300+)',
      image: require('../../assets/img/dcc.png'),
      body:
        'Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.',
      id: 1,
    },
    {
      title: 'Avensur Viajes',
      city: 'Sevilla',
      rating: '4.9 (1100+)',
      image: require('../../assets/img/av.png'),
      body:
        'Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.',
      id: 2,
    },
    {
      title: 'Soy Aventura',
      city: 'Tenerife',
      rating: '4.7 (1500+)',
      image: require('../../assets/img/sva.png'),
      body:
        'Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.',
      id: 3,
    },
  ]);

  const [persons, setPersons] = useState([
    {
      title: 'José Ulrich',
      city: 'Barcelona',
      rating: '5.0 (1300+)',
      image: require('../../assets/img/jose.png'),
      body:
        'Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.',
      id: 1,
    },
    {
      title: 'Pedro Sola',
      city: 'Murcia',
      rating: '4.9 (1100+)',
      image: require('../../assets/img/pedro.png'),
      body:
        'Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.',
      id: 2,
    },
    {
      title: 'Martha Díaz',
      city: 'Tenerife',
      rating: '4.7 (1500+)',
      image: require('../../assets/img/martha.png'),
      body:
        'Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.',
      id: 3,
    },
  ]);

  const [categoras, setCategoras] = useState([
    {title: 'CRUCERO', image: require('../../assets/img/cruse.png'), id: 0},
    {title: 'LUNA DE MIEL', image: require('../../assets/img/boda.png'), id: 1},
    {title: 'FAMILIA', image: require('../../assets/img/fam.png'), id: 2},
    {
      title: 'PAREJA',
      image: require('../../assets/img/agencies/couple.jpg'),
      id: 3,
    },
    {
      title: 'AMIGOS',
      image: require('../../assets/img/agencies/friends.jpg'),
      id: 4,
    },
    {
      title: 'GRANDES GRUPOS',
      image: require('../../assets/img/agencies/group.jpg'),
      id: 5,
    },
  ]);
  //                                                                                            //

  // agency listItem

  //                                                                                    //

  // Agencias list Item

  //                                                                                    //

  // Top Agencias

  //                                                                                //
  // Categoras

  const categorasListItem = (item) => {
    return (
      <View style={{maxWidth: 300, flexDirection: 'row', margin: 5}}>
        <ImageBackground
          imageStyle={{borderRadius: 30}}
          style={{width: 230, height: 250, justifyContent: 'center'}}
          source={item.image}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 28,
              fontWeight: 'bold',
              color: '#fff',
              elevation: 5,
            }}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          {/* Search box */}
          <SearchBox />
          {/* Popular agency */}
          <View style={{margin: 10}}>
            <FlatList
              horizontal={true}
              data={agency}
              renderItem={({item}) => {
                return (
                  <PopularAgencyListItems navigation={navigation} item={item} />
                );
              }}
            />
          </View>

          {/* agencia cerca de ti */}

          <View style={{margin: 10}}>
            <Section
              title="Agencias cerca de ti"
              text="Ver todos"
              boton={true}
            />

            <FlatList
              data={agencias}
              renderItem={({item}) => {
                return <AgencyListItem item={item} />;
              }}
            />
          </View>

          {/* Top Agecia */}

          <View style={{margin: 10}}>
            <Section title="Top Agencias" text="Ver todos" boton={true} />

            <FlatList
              data={topAgencias}
              renderItem={({item}) => {
                return <TopListItem item={item} />;
              }}
            />
          </View>

          {/* Top Particulares */}

          <View style={{marginTop: 10}}>
            <Section title="Top Particulares" text="Ver todos" boton={true} />

            <FlatList
              data={persons}
              renderItem={({item}) => {
                return <TopListItem item={item} />;
              }}
            />
          </View>

          {/* Categoras */}

          <View style={{marginTop: 20}}>
            <Section title="Agencias especializadas" text="" boton={false} />
            <FlatList
              horizontal={true}
              data={categoras}
              renderItem={({item}) => {
                return <CardListItem item={item} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//                                                                              //

export default AgencyScreen;

const styles = StyleSheet.create({
  searchBox: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,

    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  categoryList: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#232323',
  },
  categoryListText: {
    color: '#ffffff',
    fontSize: 14,
  },

  heading: {color: '#ffffff', fontSize: 22, fontWeight: 'bold'},
});
