import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  TextInput,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
//COMPONENTES
import CreateMarkers from "../components/mapComponents/CreateMarkers";

//MAPBOX
import MapboxGL from "@react-native-mapbox-gl/maps";
//DATOS
import {dataSources} from "../../database";
// FIREBASE
import database from "@react-native-firebase/database";
import firestore from "@react-native-firebase/firestore";

export default class MapPage extends React.Component {
  //                                                                      //
  //ESTADOS
  constructor(props) {
    super(props);
    this.mounted = false;
    // En el state mete todos los elementos y datos necesario para el funcionamiento
    // del mapa y de los marcadores
    this.state = {
      backgroundColor: "blue",
      coordinates: [
        [-73.99155, 40.73581],
        [-73.99155, 40.73681],
      ],
      center: [7.945162026843832, 19.295832786307415],
      zoom: 1,
      data: [],
      allPoints: [],
      fadeAnim: new Animated.Value(0),
      activeMarkers: "",
      value: "",
      searchBookmark: {},
      filterData: [],
      misMarcadores: [],
    };

    this.searchInput = null;
  }
  //                                                                      //
  //Funciones
  getRef = () => database().ref();

  // Quizá no utilizar arrow function
  getDato = async (ref) => {
    let items = [];
    await ref.get().then((snap) => {
      snap.forEach((item) => {
        let data = item.data();
        items.push(...items, data);
        //items.map((a) => console.log(a.geometry));
      });
    });

    this.setState((state) => ({
      misMarcadores: [...state.misMarcadores, ...items],
    }));
    //console.log(this.state.misMarcadores);
    //console.log(' ---------------------- ');
  };
  //                                                                      //

  // EFECTOS DE LOS MARCADORES

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  //                                                                      //

  componentDidMount() {
    this.mounted = true;
    // fetch the data
    // Ahora es cuando utiliza la información de los marcadores
    // Que aparecía en la parte superior del código

    dataSources.forEach((dataSource) => {
      // Encuentra la dirección del marcador
      let itemsRef = this.getRef().child(dataSource.url);

      //Firestore
      let markRef = firestore().collection(dataSource.url);
      this.getDato(markRef);

      //Guarda todo los datos de los marcadores en items
      itemsRef.on("value", (snap) => {
        let items = snap.val().features;
        //Por cada Item sustituye algunos de los datos de Firebase por los datos
        // que están en este código ¿¿¿???
        items.forEach((feature) => {
          feature.properties.marker_type = dataSource.marker_type;
          feature.properties.category = dataSource.url;
          //return  feature
          return null;
        });

        // if(this.mounted) {
        // Y guarda los marcadores con los nuevos datos
        // console.log('el pepeeee');
        //console.log(items);
        this.setState((state) => ({
          //Va añadiendo los puntos a allPoint
          //Hace una copia del estado y luego le añade los items nuevos
          allPoints: [...state.allPoints, ...items],
        }));
        // }
      });
    });
    console.log("-------------------------------------------------------");
  }

  //                                                                      //

  componentWillUnmount() {
    // this.mounted = false;
  }

  //                                                                      //
  //LAYERS - COLOCACIÓN DE LOS MARCADORES

  toggleLayer = (el) => {
    console.log(el);
    console.log(this.state.allPoints);
    if (el != this.state.activeMarkers) {
      // console.log(newData);

      //var newData = this.state.allPoints;
      // antes estaba asi
      //  newData = newData.filter
      let newData = this.state.allPoints.filter(
        (feature) => feature.properties.marker_type == el,
      );

      this.fadeOut();
      this.setState({
        data: newData,
        activeMarkers: el,
      });

      this.fadeIn();
    }

    // Update the bookmark
    if (this.state.searchBookmark.properties) {
      if (el != this.state.searchBookmark.properties.marker_type) {
        this.setState({
          searchBookmark: {},
        });
      }
    }
  };
  //                                                                      //
  // FUNCION ZOOM Y CAMBIO DE LAYER

  zoomend = (e) => {
    // update the data
    let zoom = e.properties.zoomLevel;
    switch (true) {
      case zoom <= 2.1:
        this.toggleLayer("marker_continents");
        break;
      case zoom > 2.1 && zoom <= 4.5:
        this.toggleLayer("marker_zone_continents");
        break;
      case zoom > 4.5 && zoom <= 5.7:
        this.toggleLayer("marker_countries");
        break;
      case zoom > 5.7 && zoom <= 7:
        this.toggleLayer("marker_zone_country");
        break;
      case zoom > 7 && zoom <= 8:
        this.toggleLayer("marker_region_country");
        break;
      case zoom > 8 && zoom <= 9.1:
        this.toggleLayer("marker_zone_region");
        break;
      case zoom > 9.1 && zoom <= 13:
        this.toggleLayer("marker_cities");
        break;
      case zoom > 13:
        this.toggleLayer("marker_places");
        break;
      default:
        break;
    }
  };
  //                                                                      //

  //FUNCIONES DEL BUSCADOR

  onMapPress = (e) => {
    this.searchInput.blur();
    Keyboard.dismiss();
  };

  navigateToBookmarkDescription = (bookmark) => {
    this.props.navigation.navigate("Profile", {
      name: bookmark.properties.title,
      item: bookmark,
    });

    // reset bookmark
    this.setState({
      searchBookmark: {},
    });
  };

  zoomToBookMark = (item) => {
    console.log("Zoomed to bookmark: " + item.properties.title);
    Keyboard.dismiss();
    this.searchInput.blur();

    // create an Animated marker
    let zoom = dataSources.find((dt) => {
      if (dt.url == item.properties.category) {
        return dt;
      }
    });

    console.log("Zoom to:" + item.properties);

    this.setState({
      searchBookmark: item,
      center: item.geometry.coordinates,
      zoom: zoom.zoom,
      filterData: [],
    });
  };

  // list of results
  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.zoomToBookMark(item)}>
          <Text>
            {item.properties.title}, {item.properties.category}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  onChangeText = (text) => {
    console.log(text);
    if (!text) {
      this.setState({
        filterData: [],
        value: "",
      });

      return;
    }

    // filter all
    const allBookmarks = this.state.allPoints;

    let filterData = allBookmarks
      .map((bookmark) => {
        if (
          bookmark.properties.title &&
          bookmark.properties.title.toLowerCase().includes(text.toLowerCase())
        ) {
          return bookmark;
        }
      })
      .filter((ft) => ft);

    // slice data
    filterData = filterData.length > 5 ? filterData.slice(0, 6) : filterData;

    console.log(filterData);
    // update the state
    this.setState({
      value: text,
      filterData: filterData,
    });
  };

  onFocus = (e) => {
    console.log(e);
    this.onChangeText(this.state.value);
  };

  //                                                                      //

  //MAPA

  render() {
    const filterData = this.state.filterData;
    const searchBookmark = this.state.searchBookmark;
    //const dt = this.getDato();

    console.log("SeARCH: " + JSON.stringify(searchBookmark));
    return (
      <>
        <SafeAreaView style={styles.searchControl}>
          <View>
            <TextInput
              ref={(input) => (this.searchInput = input)}
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText(text)}
              onFocus={(e) => this.onFocus(e)}
              value={this.state.value}
              placeholder={"Search Bookmark ...."}
            />

            {
              filterData && (
                // <SafeAreaView style={styles.bookmarkList}>
                <FlatList
                  keyboardShouldPersistTaps={"handled"}
                  style={styles.bookmarkList}
                  data={filterData}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.properties.title}
                />
              )
              // </SafeAreaView>
            }
          </View>
        </SafeAreaView>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={-115}>
          <MapboxGL.MapView
            key={"map"}
            ref={(c) => (this._map = c)}
            onDidFinishLoadingMap={this.onDidFinishLoadingMap}
            onRegionDidChange={this.zoomend}
            rotateEnabled={false}
            onPress={this.onMapPress}
            pitchEnabled={false}
            style={styles.map}>
            <MapboxGL.Camera
              zoomLevel={this.state.zoom}
              centerCoordinate={this.state.center}
              minZoomLevel={1.5}
            />

            {this.state.data.length == 0 ? (
              <MapboxGL.MarkerView
                coordinate={this.state.coordinates[0]}></MapboxGL.MarkerView>
            ) : (
              <CreateMarkers
                fadeAnim={this.state.fadeAnim}
                data={this.state.data}
                navigation={this.props.navigation}
              />
            )}

            {searchBookmark.properties && (
              <MapboxGL.MarkerView
                coordinate={searchBookmark.geometry.coordinates}
                anchor={{x: 0, y: 0}}>
                <View
                  style={{borderColor: "black", borderWidth: 0, width: "auto"}}>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() =>
                      this.navigateToBookmarkDescription(searchBookmark)
                    }></TouchableOpacity>
                </View>
              </MapboxGL.MarkerView>
            )}
          </MapboxGL.MapView>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  btnStyle: {
    borderWidth: 7,
    borderColor: "#f49e09",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: "#333",
    fontSize: 16,
    paddingVertical: 1,
  },
  navbar: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderColor: "transparent",
    borderWidth: 1,
    justifyContent: "center",
    height: 44,
    flexDirection: "row",
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: "#fff",
    height: 22,
  },
  center: {
    textAlign: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  action: {
    backgroundColor: "#ff0000",
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  imgDesc: {
    width: "100%",
    height: 400,
  },
  map: {
    flex: 1,
    // height:250,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    position: "absolute",
  },
  imgMarker: {
    width: 50,
    height: 50,
  },
  searchControl: {
    position: "absolute",
    top: 10,
    right: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: 5,
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  bookmarkList: {
    marginTop: 10,
    backgroundColor: "transparent",
  },
  item: {
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    fontSize: 15,
  },
});
