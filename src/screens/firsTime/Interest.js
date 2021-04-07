import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
// COMPONENTS
import SelectionButton from "../../ui/ActionButton/SelectioButton";
import LinkGreySimple from "../../ui/Links/LinkGreySimple";
//FIREBASE
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

const Interest = (props) => {
  const {navigation} = props;

  //                                                  //
  //DATA
  const [destinations, setDestinations] = useState([
    {type: "Playa", title: "Playa", id: 0},
    {type: "Montana", title: "Montaña", id: 1},
    {type: "Abarrotado", title: "Abarrotado", id: 2},
    {type: "Intimo", title: "Íntimo", id: 3},
    {type: "GrandesCiudaades", title: "Grandes ciudades", id: 4},
    {type: "Naturaleza", title: "Naturaleza", id: 5},
    {type: "Escondido", title: "Escondido", id: 6},
  ]);

  const [activities, setActivities] = useState([
    {type: "Fiesta", title: "Fiesta", id: 0},
    {type: "Museos", title: "Museos", id: 1},
    {type: "ComidaLocal", title: "Comida Local", id: 2},
    {type: "Excursiones", title: "Excursiones", id: 3},
    {type: "Relax", title: "Relax", id: 4},
    {type: "Aventura", title: "Aventura", id: 5},
    {type: "CulturaLocal", title: "Cultura Local", id: 6},
    {type: "ComidaConocida", title: "Comida Conocida", id: 7},
  ]);

  const [needs, setNeeds] = useState([
    {type: "Negocios", title: "Negocios", id: 0},
    {type: "SillasDeRuedas", title: "Sillas de Ruedas", id: 1},
    {type: "Mascotas", title: "Mascotas", id: 2},
    {type: "LGBTI", title: "LGBTI", id: 3},
    {type: "Vegano", title: "Vegano", id: 4},
    {type: "Religion", title: "Religioso", id: 5},
    {type: "Medioambiente", title: "Medioambiente", id: 6},
  ]);

  ////////////////////////////////////////////////////7
  //STATES
  const [destination, setDestination] = useState(defaultDestinationValue());
  const [activity, setActivity] = useState(defaultActivityValue());
  const [need, setNeed] = useState(defaultFormNeeds());

  //                                                    //
  //FORMS

  function defaultDestinationValue() {
    return {
      Playa: false,
      Montana: false,
      Abarrotado: false,
      Intimo: false,
      Ciudad: false,
      Naturaleza: false,
    };
  }

  function defaultActivityValue() {
    return {
      Fiesta: false,
      Museos: false,
      ComidaLocal: false,
      Excursiones: false,
      Relax: false,
      Aventura: false,
      CulturaLocal: false,
      ComidaConocida: false,
    };
  }

  function defaultFormNeeds() {
    return {
      Negocios: false,
      SillasDeRuedas: false,
      LGBTI: false,
      Vegano: false,
      Religion: false,
      Medioambiente: false,
    };
  }

  //                                                //
  //CHANGE STATE

  const uploadActivity = (type, active) => {
    if (active === activities.id) {
      setActivity({...activity, [type]: true});
      console.log(activity);
    } else {
      setActivity({...activity, [type]: false});
      console.log(activity);
    }
  };

  const uploadDestination = (type, active) => {
    if (active === destinations.id) {
      setDestination({...destination, [type]: true});
      console.log(destination);
    } else {
      setDestination({...destination, [type]: false});
      console.log(destination);
    }
  };

  const uploadNeed = (type, active) => {
    if (active === needs.id) {
      setNeed({...need, [type]: true});
      console.log(need);
    } else {
      setNeed({...need, [type]: false});
      console.log(need);
    }
  };

  //                                                //
  // UPLOAD TO FIREBASE AND NEXT PAGE

  const goNext = () => {
    navigation.navigate("Tiempo");
    const user = auth().currentUser;
    console.log(user.uid);
    database()
      .ref("/users/" + user.uid)
      .update({
        destination,
        activity,
        need,
      })
      .then(() => {
        console.log("Data updated.");
        console.log("User account created & signed in!");
      });
  };

  //                                                //
  //                                                //
  //                                                //
  //RETURN

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
          data={destinations}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadDestination} />;
          }}
        />
      </View>
      <View style={styles.containerDestination}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Actividades </Text>
          <Text style={styles.subTitle}>
            ¿Qué te gustaría hacer en tus viajes?{" "}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={activities}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadActivity} />;
          }}
        />
      </View>
      <View style={styles.containerDestination}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Necesidades </Text>
          <Text style={styles.subTitle}>
            ¿Qué te gustaría hacer en tus viajes?{" "}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.containerFlatList}
          numColumns={3}
          data={needs}
          renderItem={({item}) => {
            return <SelectionButton item={item} doThis={uploadNeed} />;
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
          <LinkGreySimple text={"Salir"} doThis={goNext} />
        </View>
        <View style={{marginEnd: 5}}>
          <LinkGreySimple text={"Siguiente"} doThis={goNext} />
        </View>
      </View>
    </View>
  );
};

export default Interest;

//                                                  //
//CSS

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#FAFAFA"},
  containerDestination: {
    flex: 1,
    marginTop: 20,
    marginStart: 20,
    marginEnd: 30,
    justifyContent: "center",
    //alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  containerSelection: {},
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
});
