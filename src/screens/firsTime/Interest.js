import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// COMPONENTS
import SelectionButton from '../../ui/ActionButton/SelectioButton';
import LinkGreySimple from '../../ui/Links/LinkGreySimple';
//FIREBASE
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Interest = (props) => {
  const {navigation} = props;
  const [category, setCategory] = useState([
    {title: 'Playa', id: 0, icon: 'document-outline'},
    {title: 'Montaña', id: 1, icon: 'information-circle-outline'},
    {title: 'Abarrotado', id: 2, icon: 'sunny-outline'},
    {title: 'Íntimo', id: 3, icon: 'refresh-outline'},
    {title: 'Grandes ciudades', id: 4, icon: 'cafe-outline'},
    {title: 'Naturaleza', id: 5, icon: 'sunny-outline'},
    {title: 'Escondido', id: 6, icon: 'trophy-outline'},
  ]);

  const [activities, setActivities] = useState([
    {title: 'Fiesta', id: 0, icon: 'document-outline'},
    {title: 'Museos', id: 1, icon: 'information-circle-outline'},
    {title: 'Comida Local', id: 2, icon: 'sunny-outline'},
    {title: 'Excursiones', id: 3, icon: 'refresh-outline'},
    {title: 'Relax', id: 4, icon: 'cafe-outline'},
    {title: 'Aventura', id: 5, icon: 'sunny-outline'},
    {title: 'Cultura Local', id: 6, icon: 'trophy-outline'},
    {title: 'Comida Conocida', id: 7, icon: 'trophy-outline'},
  ]);

  const [needs, setNeeds] = useState([
    {title: 'Negocios', id: 0, icon: 'document-outline'},
    {title: 'Sillas de Ruedas', id: 1, icon: 'information-circle-outline'},
    {title: 'Mascotas', id: 2, icon: 'sunny-outline'},
    {title: 'LGBTI', id: 3, icon: 'refresh-outline'},
    {title: 'Vegano', id: 4, icon: 'cafe-outline'},
    {title: 'Religioso', id: 5, icon: 'sunny-outline'},
    {title: 'Medioambiente', id: 6, icon: 'trophy-outline'},
  ]);

  const [formData, setFormData] = useState(defaultFormValue());

  //hay algun problema con las palabras separadas
  function defaultFormValue() {
    return {
      Playa: false,
      Montaña: false,
      Abarrotado: false,
      Intimo: false,
      Ciudad: false,
      Naturaleza: false,
      Fiesta: false,
      Museos: false,
      ComidaLocal: false,
      Excursiones: false,
      Relax: false,
      Aventura: false,
      CulturaLocal: false,
      ComidaConocida: false,
      Negocios: false,
      SillasRuedas: false,
      LGBTI: false,
      Vegano: false,
      Religión: false,
      Medioambiente: false,
    };
  }

  const uploadInterest = (type, active) => {
    if (active === category.id) {
      setFormData({...formData, [type]: true});
      console.log(formData);
    } else {
      setFormData({...formData, [type]: false});
      console.log(formData);
    }
  };

  const goNext = () => {
    navigation.navigate('Tiempo');
    const user = auth().currentUser;
    console.log(user.uid);
    database()
      .ref('/users/' + user.uid)
      .set({
        formData,
      })
      .then(() => {
        console.log('Data updated.');
        console.log('User account created & signed in!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerDestination}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Destino </Text>
          <Text style={styles.subTitle}>¿Cómo sería tu destino ideal? </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={category}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadInterest} />;
          }}
        />
      </View>
      <View style={styles.containerDestination}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Actividades </Text>
          <Text style={styles.subTitle}>
            ¿Qué te gustaría hacer en tus viajes?{' '}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={activities}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadInterest} />;
          }}
        />
      </View>
      <View style={styles.containerDestination}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Necesidades </Text>
          <Text style={styles.subTitle}>
            ¿Qué te gustaría hacer en tus viajes?{' '}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={needs}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadInterest} />;
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginStart: 5}}>
          <LinkGreySimple text={'Salir'} doThis={goNext} />
        </View>
        <View style={{marginEnd: 5}}>
          <LinkGreySimple text={'Siguiente'} doThis={goNext} />
        </View>
      </View>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FAFAFA'},
  containerDestination: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 30,
    justifyContent: 'center',
    //alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  containerSelection: {},
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor: 'blue',
    marginBottom: 10,
  },
  containerFlatList: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //  backgroundColor: 'red',
    marginStart: 20,
    //marginEnd: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
    color: '#7B7B7B',
    margin: 5,
  },
});
