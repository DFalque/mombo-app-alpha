import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
//COMPONENTES
import NewsListItem from "../../components/NewsListItem";
import Section from "../../components/Section";
import SearchBox from "../../components/SearchBox";
import DiscoverListItem from "../../components/DiscoverListItem";
import OfferListItem from "../../components/OfferListItem";
import CardListItem from "../../components/CardListItem";
//FIREABASE
import database from "@react-native-firebase/database";

//                                                    //
// DATA

const slides = [
  {
    key: 1,
    title: "ESPAÑA",
    text: "Playa de Calahonda",
    image: require("../../assets/img/spain.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Portugals",
    text: "Simply random text.",
    image: require("../../assets/img/portu.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Barcelona",
    text: "Lorem Ipsum text.",
    image: require("../../assets/img//portu.png"),
    backgroundColor: "#22bcb5",
  },
];

//                                                    //

const MapScreen = ({navigation}) => {
  const [topAgencias, setTopAgencias] = useState([
    {
      title: "Viaje a Túlum",
      city: "México",
      rating: "5.0 (1300+)",
      image: require("../../assets/img/tulum.png"),
      body:
        "Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.",
      id: 1,
    },
    {
      title: "Viaje a Cancún",
      city: "México",
      rating: "4.9 (1100+)",
      image: require("../../assets/img/cancum.png"),
      body:
        "Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.",
      id: 2,
    },
    {
      title: "Viaje a Túlum",
      city: "Tenerife",
      rating: "4.7 (1500+)",
      image: require("../../assets/img/tulum.png"),
      body:
        "Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.",
      id: 3,
    },
  ]);

  const [viajes, setViajes] = useState([
    {
      title: "Viaje a St. Port",
      city: "Cáceres",
      rating: "5.0 (1300+)",
      image: require("../../assets/img/viaje.png"),
      body:
        "Encuentra chollos para vacaciones, hoteles, vuelos, escapadas y low cost.",
      id: 1,
    },
    {
      title: "Viaje a Cádiz",
      city: "Sevilla",
      rating: "4.9 (1100+)",
      image: require("../../assets/img/port.png"),
      body:
        "Las mejores ofertas de viajes: vuelos low-cost, hoteles y paquetes baratos.",
      id: 2,
    },
    {
      title: "Viaje a St. Port",
      city: "Tenerife",
      rating: "4.7 (1500+)",
      image: require("../../assets/img/sva.png"),
      body:
        "Lorem ipsum dolor sitscin amet, consectetur etursing hetur adipiscing elit ut.",
      id: 3,
    },
  ]);

  const [destination, setDestination] = useState([
    {
      title: "PARÍS",
      image: require("../../assets/img/paris.png"),
      address: "1125 viajes este mes",
      id: 0,
    },
    {
      title: "JAPÓN",
      image: require("../../assets/img/japon.png"),
      address: "957 viajes este mes",
      id: 1,
    },
    {
      title: "MÉXICO",
      image: require("../../assets/img/mexico.png"),
      address: "877 viajes este mes",
      id: 2,
    },
  ]);

  const [estado, setEstado] = useState([
    {
      title: "RELAX",
      image: require("../../assets/img/relax.png"),
      address: "En la montaña",
      id: 0,
    },
    {
      title: "FIESTA",
      image: require("../../assets/img/fiesta.png"),
      address: "En la playa",
      id: 1,
    },
    {
      title: "CONVIVE",
      image: require("../../assets/img/fam.png"),
      address: "En familia",
      id: 2,
    },
  ]);

  const [food, setFood] = useState([
    {
      title: "Imprescindibles de Grecia",
      image: require("../../assets/img/home/grecia.jpg"),
      body:
        "Conoce nuestra selecciones de Imprescindibles de Grecia, los mejores lugares que visitar para planificar tu próxima viaje",
      id: 0,
      tag: "Lugares",
      icon: "navigate-circle-outline",
    },
    {
      title: "Gastronomía Española para principiantes",
      image: require("../../assets/img/food4.png"),
      body:
        "Reconocido como una de las gastronomías más completas del mundo, son un sabor único que no olvidarás",
      id: 1,
      tag: "Comida",
      icon: "cafe-outline",
    },
    {
      title: "Rutas en moto en el Mediterraneo",
      image: require("../../assets/img/home/motoMediterraneo.jpg"),
      body:
        "¿Buscas una nueva forma de recorrer el Mediterraneo? Recorre el Mediterraneo con tu compañía favorita.",
      id: 2,
      tag: "Adventura",
      icon: "cafe-outline",
    },
  ]);

  const [forYou, setForYou] = useState([]);

  // render item for slider
  // render item for parati section

  // destination

  // food list item
  //                                                    //
  //FIREBASE

  useEffect(() => {
    let li = [];
    let counter = 0;
    database()
      .ref("/offer/")
      .orderByChild("market")
      .equalTo("Vigo")
      .once("value")
      .then((snapshot) => {
        console.log(snapshot);
        snapshot.forEach((value) => {
          const item = value.val();
          li.push({
            key: counter,
            title: item.title,
            destination: item.destination,
          });
          counter++;
          setForYou(...forYou, li);
        });
      });
    return () => {};
  }, []);

  //                                                    //

  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <SearchBox />
          <View style={{marginBottom: 30}}>
            <AppIntroSlider
              data={slides}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activedotStyle}
              showNextButton={false}
              showDoneButton={false}
              renderItem={({item}) => <DiscoverListItem item={item} />}
            />
          </View>
          {/* Parati section */}
          <View style={{margin: 10}}>
            <Section title="Para ti" text="Ver todos" boton={true} />
            <FlatList
              horizontal={true}
              data={forYou}
              renderItem={({item}) => {
                return <OfferListItem item={item} />;
              }}
            />
          </View>
          {/* Destinos populares */}
          <View style={{marginTop: 20}}>
            <Section title="Destinos populares" text="" boton={false} />
            <FlatList
              horizontal={true}
              data={destination}
              renderItem={({item}) => {
                return <CardListItem item={item} />;
              }}
            />
          </View>
          {/* Viajes cerca */}
          <View style={{margin: 10}}>
            <Section title="De agencias cerca" text="Ver todos" boton={true} />
            <FlatList
              horizontal={true}
              data={viajes}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => {
                return <OfferListItem item={item} />;
              }}
            />
          </View>

          {/* Destinos populares */}

          <View style={{marginTop: 20}}>
            <Section title="Estado de ánimo" text="" boton={false} />

            <FlatList
              horizontal={true}
              data={estado}
              renderItem={({item}) => {
                return <CardListItem item={item} />;
              }}
            />
          </View>

          {/* Meal section */}
          <View>
            <Section title="Últimas Noticias" text="Ver todos" boton={false} />
            <FlatList
              horizontal={true}
              data={food}
              renderItem={({item}) => {
                return <NewsListItem item={item} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  searchBox: {
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 25,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 10,
    // shado: '(0px 4px 25px rgba(0, 0, 0, 0.1))',
  },
  slide: {
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    marginTop: 50,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "justify",
  },
  buttonCircle: {
    backgroundColor: "#FF007F",
    width: 100,
    borderRadius: 40,
    padding: 15,
    alignSelf: "center",
  },
  activedotStyle: {
    marginTop: 130,
    backgroundColor: "#000",
  },
  dotStyle: {
    marginTop: 130,
    backgroundColor: "#ccc",
  },
  categoryList: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#232323",
  },
  categoryListText: {
    color: "#ffffff",
    fontSize: 14,
  },
});
