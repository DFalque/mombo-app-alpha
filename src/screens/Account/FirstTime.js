import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, FlatList} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
//import Countries from '../../utils/countries.json';

//Components
import LinkGreySimple from "../../ui/Links/LinkGreySimple";
import Counter from "../../components/Counter";
import SelectionButton from "../../ui/ActionButton/SelectioButton";

//FIREBASE
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

//                                                  //
//

const FirstTime = (props) => {
  //DATA
  const [budget, setBudget] = useState([
    {type: "Low", title: "Bajo", id: 0},
    {type: "Medium", title: "Intermedio", id: 1},
    {type: "High", title: "Alto", id: 2},
    {type: "Luxury", title: "Lujo", id: 3},
  ]);
  //                                                  //
  //STATE
  const [travellers, setTravellers] = useState(formTravellers());
  //const [info, setInfo] = useState(formUser());
  const [budgets, setBudgets] = useState(formBudgets());
  const [location, setLocation] = useState(formLocation());

  //                                                  //
  //VARIABLES
  const {navigation} = props;

  //                                                  //
  //FORMS
  function formTravellers() {
    return {
      adults: 1,
      kids: 0,
    };
  }
  function formUser() {
    return {
      location,
      travellers,
      budgets,
    };
  }
  function formBudgets() {
    return {
      Low: false,
      Medium: false,
      High: false,
      Luxury: false,
    };
  }

  function formLocation() {
    return {
      country: "spain",
      state: "Pontevedra",
      city: "Vigo",
    };
  }
  //                                                  //
  //FUNCTIONS

  const next = () => {
    navigation.navigate("Intereses",);
    const user = auth().currentUser;
    console.log(user.uid);
    database()
      .ref("/users/" + user.uid + "/info/")
      .update({
        location,
        travellers,
        budgets,
      })
      .then(() => {
        console.log("Data updated.");
        console.log("User account created & signed in!");
      });
  };

  //                                                  //
  //CHANGE STATE

  const counterFun = (type, change) => {
    console.log("Entra la función");
    if (type == "adults" && change === 0) {
      setTravellers({...travellers, [type]: 1});
    } else {
      setTravellers({...travellers, [type]: change});
    }
    console.log(travellers.adults);
  };

  const uploadBudgets = (type, active) => {
    if (active === budget.id) {
      //console.log("llega a aquí?");
      setBudgets({...budgets, [type]: true});
      console.log(budgets);
    } else {
      setBudgets({...budgets, [type]: false});
      console.log(budgets);
    }
  };

  //                                                  //
  //????

  /*const ciudades = () => {
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8ad9d3a3c6mshbbe5c60e1721de0p1a9a32jsn21820a1e778f',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };*/

  //                                                  //
  //DATA

  const finishStart = async () => {
    console.log("El valor de read es: ");
    await AsyncStorage.setItem("read", "false");
    const pff = await AsyncStorage.getItem("read");
    console.log(pff);
  };

  //                                                  //
  //                                                  //
  //RETURN

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Salida </Text>
          <Text style={styles.subTitle}>¿Donde comienza tu viaje?</Text>
        </View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Ciudad"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(e) => onChange(e, "email")}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Aeropuerto"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(e) => onChange(e, "email")}
        />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Viajeros </Text>
          <Text style={styles.subTitle}>Elige a tus acompañantes</Text>
        </View>
        <View style={styles.containerTraveller}>
          <Text>Adultos</Text>
          <Counter
            number={travellers.adults}
            doThis={counterFun}
            type={"adults"}
          />
        </View>
        <View style={styles.containerTraveller}>
          <Text>Niños</Text>
          <Counter number={travellers.kids} doThis={counterFun} type={"kids"} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Presupuesto </Text>
          <Text style={styles.subTitle}>
            ¿Qué te gustaría hacer en tus viajes?
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <FlatList
            contentContainerStyle={styles.containerFlatList}
            numColumns={2}
            data={budget}
            renderItem={({item}) => {
              return <SelectionButton item={item} doThis={uploadBudgets} />;
            }}
          />
        </View>
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
          <LinkGreySimple text={"Salir"} doThis={finishStart} />
        </View>
        <View style={{marginEnd: 5}}>
          <LinkGreySimple text={"Siguiente"} doThis={next} />
        </View>
      </View>
    </View>
  );
};

export default FirstTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
    backgroundColor: "#FAFAFA",
  },
  input: {
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
  },
  containerTraveller: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 50,
    marginEnd: 50,
    marginBottom: 10,
  },
  containerCounter: {flexDirection: "row"},
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 11,
    lineHeight: 13,
    color: "#7B7B7B",
    margin: 5,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
  },
});
