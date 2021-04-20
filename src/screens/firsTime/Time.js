import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
// COMPONENTS
import SelectionButton from "../../ui/ActionButton/SelectioButton";
import LinkGreySimple from "../../ui/Links/LinkGreySimple";
// FIREBASE
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Interest = ({navigation}) => {

  // DATA
  const [day, setDay] = useState([
    {type: "3days", title: "3", id: 0},
    {type: "7days", title: "7", id: 1},
    {type: "15days", title: "15", id: 3},
    {type: "24days", title: "24", id: 4},
    {type: "30days", title: "30", id: 5},
  ]);
  const [distance, setDistance] = useState([
    {type: "Near", title: "Cerca", id: 0},
    {type: "Country", title: "En mi país", id: 1},
    {type: "NearCountry", title: "Cerca de mi país", id: 2},
    {type: "Far", title: "Lejos", id: 3},
  ]);

  // STATE
  const [days, setDays] = useState(formDays());
  const [distances, setDistances] = useState(formDistance());

  //FORMS

  function formDays() {
    return {
      "3days": false,
      "7days": false,
      "15days": false,
      "24days": false,
      "30days": false,
    };
  }

  function formDistance() {
    return {
      Near: false,
      Country: false,
      NearCountry: false,
      Far: false,
    };
  }

  //CHANGE STATE

  const updateDays = (type, active) => {
    if (active === day.id) {
      setDays({...days, [type]: true});
      console.log(days);
    } else {
      setDays({...days, [type]: false});
      console.log(days);
    }
  };

  const updateDistances = (type, active) => {
    if (active === distance.id) {
      setDistances({...distances, [type]: true});
      console.log(days);
    } else {
      setDistances({...distances, [type]: false});
      console.log(distances);
    }
  };

  // FUNCTIONS
  const goNext = () => {
    const user = auth().currentUser;
    database()
      .ref("/users/" + user.uid + "/time/")
      .update({
        days,
        distances,
      })
      .then(() => {
        console.log("Data updated.");
        console.log("User account created & signed in!");
        // navigation.navigate("Cuenta");
        // finalise registration process
        AsyncStorage.setItem('alreadyLaunched', 'true').then(() =>{
          console.log("stored");
          navigation.replace('Tab')
        });
      });

      // set registration complete
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSection}>
        <View style={styles.containerText}>
          <Text>Tiempo </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={day}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={updateDays} />;
          }}
        />
      </View>
      <View style={styles.containerSection}>
        <View style={styles.containerText}>
          <Text>Distancia </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={distance}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={updateDistances} />;
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          marginStart: 10,
        }}>
        <View style={{marginStart: 5}}>
          <LinkGreySimple text={"Salir"} />
        </View>
        <View style={{marginEnd: 5}}>
          <LinkGreySimple text={"Siguiente"} doThis={goNext} />
        </View>
      </View>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#FAFAFA"},
  containerSection: {
    flex: 1,
    marginTop: 20,
    marginStart: 20,
    marginEnd: 30,
    justifyContent: "center",
    //alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: 'blue',
    marginBottom: 10,
  },
  containerFlatList: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    //  backgroundColor: 'red',
    marginStart: 20,
    //marginEnd: 20,
  },
});
