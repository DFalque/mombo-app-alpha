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
//COMPONENTES
import CardItinerary from '../../components/CardItinerary';

//UI
import ButtonBottom from '../../ui/ButtonBottom';

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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          //flex: 0.1,
          flexDirection: 'row',
          margin: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
          paddingBottom: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginEnd: 10,
            justifyContent: 'center',
            backgroundColor: 'white',
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
      <View style={{flex: 0.9}}>
        <ScrollView>
          <View style={{backgroundColor: '#fff'}}>
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
                          ? {backgroundColor: '#D81159'}
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
            <CardItinerary flight={true} />
            <CardItinerary explore={true} />
            <CardItinerary transport={true} />
            <CardItinerary warning={true} />
            <CardItinerary hotel={true} />
          </View>
        </ScrollView>
      </View>
      <ButtonBottom />
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  categoryList: {
    margin: 5,
    paddingLeft: 9.5,
    paddingRight: 9.5,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
    backgroundColor: '#D81159',
    borderRadius: 40,
    padding: 15,
    alignSelf: 'center',
  },
});
