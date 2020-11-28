import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

//COMPONENTES
import NewsListItem from '../../components/NewsListItem';
import ExperiencesListItem from '../../components/ExperiencesListItem';
import WarningCards from '../../components/WarningCards';
import ActionFooter from '../../components/ActionFooter';
import Section from '../../components/Section';

//                                                                      //

const HomeScreen = ({navigation}) => {
  const [categoryId, setCategoryId] = useState(0);

  const slides = [
    {
      key: 1,
      title: 'OPORTO',
      text:
        'Es difícil imaginar una ciudad más romántica que la segunda ciudad más grande de Portugal. Lleno de estrechas calles peatonales, Oporto cuenta con iglesias barrocas, grandes teatros y plazas animadas. Un puente acorta las distancias entre el Ribei ...',
      image: require('../../assets/img/img.png'),
      //  backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'OPORTO',
      text:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. er cool stuff',
      image: require('../../assets/img/slide1.png'),
      // backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'OPORTO',
      text:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,. ',
      image: require('../../assets/img/slide2.png'),
      //backgroundColor: '#22bcb5',
    },
  ];

  const [listItem, setListItem] = useState([
    {
      title: 'Impacto Ambiental',
      body:
        'The environmental impact when traveling to Portugal is low, good public transport and with activities that do not harm the environment. There are recycling bins all over the country and there is a lot of social awareness about it',
      id: 0,
      icon: 'sunny-outline',
    },
    {
      title: 'Racismo',
      body:
        'Portugal es una ciudad multicultural, donde personas de diferentes países y culturas conviven sin problemas',
      id: 1,
      icon: 'people-outline',
    },
  ]);

  const [news, setNews] = useState([
    {
      title: 'Los mejores platos de Portugal',
      image: require('../../assets/img/guide/food1.png'),
      body:
        'La gastronomía portuguesa te hará descubrir nuevos sabores, una mezcla de los mejores del mar y los mejores alemietos de la tierra portuguesa',
      tag: 'Comida',
      icon: 'cafe-outline',
      id: 0,
    },
    {
      title: 'Rincones escondidos',
      image: require('../../assets/img/guide/rincon.jpg'),
      body:
        'Portugal está llena de lugares increibles que no aparecen en ninguna guía turistica, visita Portugal de una forma diferente',
      tag: 'Lugares',
      icon: 'navigate-circle-outline',
      id: 1,
    },
    {
      title: 'Portugal en Familia',
      image: require('../../assets/img/guide/family.jpg'),
      body:
        'Un recorrido lleno de experiencias para toda la familia, castillos, parques, aquarius y mucho más',
      tag: 'Familia',
      icon: 'person-circle-outline',
      id: 2,
    },
  ]);

  const [category, setCategory] = useState([
    {title: 'Resumen', id: 0, icon: 'document-outline'},
    {title: 'Información', id: 1, icon: 'information-circle-outline'},
    {title: 'Tips', id: 2, icon: 'sunny-outline'},
    {title: 'Historia', id: 3, icon: 'refresh-outline'},
    {title: 'Comida', id: 4, icon: 'cafe-outline'},
    {title: 'Compras', id: 5, icon: 'sunny-outline'},
    {title: 'Fiesta', id: 6, icon: 'trophy-outline'},
    {title: 'Actividades', id: 7, icon: 'people-outline'},
    {title: 'Transporte', id: 8, icon: 'car-outline'},
    {title: '¿Cómo llegar?', id: 9, icon: 'trail-sign-outline'},
  ]);

  // method to change the background color of selected Item
  const changeBg = (item) => {
    setCategoryId(item.id);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ImageBackground
          imageStyle={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
          source={require('../../assets/img/guideImg.png')}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: 10, marginTop: 10, top: 10}}>
            <Icon name="arrow-back-outline" size={26} color="#ffffff" />
          </TouchableOpacity>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Descubre
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              PORTUGAL
            </Text>
            <Image
              style={{height: 30, width: 50, marginTop: 20}}
              source={require('../../assets/img/flag.png')}
            />
          </View>
        </ImageBackground>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            fontStyle: 'normal',
            lineHeight: 29,
            color: '#000',
            margin: 10,
          }}>
          Por qué nos gusta tanto?
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            lineHeight: 20,
            textAlign: 'left',
            color: '#000',
            margin: 10,
          }}>
          Estoy enamorado del paisaje, el ritmo de la vida rural, el comida y
          vino espectaculares y subestimados. Me encanta explorar lo oculto
          playas de la Costa Vicentina, dando pintorescos paseos por la Serra da
          Estrela (donde todavía me encuentro con pastores en mis excursiones),
          y vagando por los rincones menos concurridos del Alentejo, un lugar
          mágico para descubre el alma tradicional de Portugal.
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            lineHeight: 20,
            textAlign: 'left',
            color: '#000',
            margin: 10,
          }}>
          Pero son los propios portugueses los que hacen que este país sea tan
          especial. A pesar de su apariencia hosca, pura fachada, se encuentran
          entre los la gente más amable y cálida del mundo.{' '}
        </Text>

        {/* Profile section */}
        <View style={{margin: 10, marginBottom: 20, flexDirection: 'row'}}>
          <Image
            style={{height: 100, width: 100, marginTop: 10, borderRadius: 50}}
            source={require('../../assets/img/george.png')}
          />

          <View style={{margin: 15}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              Jorge Puerto
            </Text>
            <Text style={{fontSize: 15, color: '#000'}}>author</Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="star-outline" size={16} color="#FF007F" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                  marginStart: 10,
                  marginEnd: 15,
                }}>
                5.0
              </Text>
              <Text style={{fontSize: 15, color: '#000'}}>
                Calificación Portugal
              </Text>
            </View>
          </View>
        </View>
        {/* first horizonatal list section */}
        <View style={{margin: 10, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
              margin: 10,
            }}>
            Deberías saber
          </Text>
          <FlatList
            horizontal={true}
            data={listItem}
            renderItem={({item}) => {
              return <WarningCards item={item} />;
            }}
          />
        </View>
        {/* slide sectino */}
        <View
          style={{
            marginEnd: 10,
            marginStart: 10,
            marginTop: 20,
            marginBottom: 40,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
              margin: 20,
            }}>
            Las mejores experiencias
          </Text>
          <AppIntroSlider
            data={slides}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activedotStyle}
            showNextButton={false}
            showDoneButton={false}
            renderItem={({item}) => {
              return <ExperiencesListItem item={item} />;
            }}
          />
        </View>

        {/* Category List section */}
        <View style={{margin: 10}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 10,
            }}>
            Vista rápida
          </Text>
          <FlatList
            numColumns={3}
            data={category}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  delayPressIn={0}
                  onPress={() => [changeBg(item)]}
                  style={[
                    styles.categoryList,
                    item.id === categoryId
                      ? {
                          backgroundColor: '#D81159',
                          borderWidth: 1,
                          borderColor: '#D81159',
                        }
                      : null,
                  ]}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name={item.icon}
                      style={[
                        {alignSelf: 'center', color: '#D81159'},
                        item.id === categoryId ? {color: '#fff'} : null,
                      ]}
                      size={18}
                    />
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
          {/* additional Info */}

          <Text style={[styles.infoText, {marginTop: 20}]}>
            - La moneda de cambio es el Euro. (€)
          </Text>
          <Text style={styles.infoText}>
            - La mayoría de portugueses hablan inglés.
          </Text>
          <Text style={styles.infoText}>
            - Primaveras muy calientes, climas fríos al norte.
          </Text>
          <Text style={styles.infoText}>
            - Mejores fechas para viajar entre Junio y Septiembre.
          </Text>
          <Text style={styles.infoText}>- ATM’s por todo el país.</Text>
          <Text style={styles.infoText}>
            - WIFI en restaurantes y establecimientos.
          </Text>
          <Text style={styles.infoText}>- Los drones estan permitidos.</Text>
          <Text style={styles.infoText}>
            - Horario de establecimientos normal de 9am a 10pm.
          </Text>
        </View>

        {/* Meal section */}
        {/* Antes esta sección estaba dentro de un View*/}
        <Section title="Descubre" text="Ver todos" boton={true} />
        <FlatList
          horizontal={true}
          data={news}
          renderItem={({item}) => {
            return <NewsListItem item={item} />;
          }}
        />
      </ScrollView>
      <ActionFooter text="Guardar Destino" />
    </SafeAreaView>
  );
};

//                                                                      //

export default HomeScreen;

const styles = StyleSheet.create({
  activedotStyle: {
    marginTop: 130,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  dotStyle: {
    marginTop: 130,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },

  categoryList: {
    marginEnd: 10,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  categoryListText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 5,
  },

  infoText: {marginStart: 5, marginEnd: 5, marginBottom: 10, fontSize: 18},
});
