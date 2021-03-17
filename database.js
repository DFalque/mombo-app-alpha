//Esto es información sobre los marcadores que se van incorporando en el mapa
// la url se utiliza para buscar en el database de firebase
// El markeret_type lo utiliza en una función para susutituir los marcadores
// El zoom es el momento en el que aparece en el marcador (creo que no tiene utilidad ahí)

// --------------------------------------------------------------------------------------- //
// ANTIGUO

const dataSources = [
  {url: 'cities', marker_type: 'marker_cities', type: 'cities', zoom: 10},
  {url: 'places', marker_type: 'marker_places', type: 'Places', zoom: 13.5},
  {
    url: 'countries',
    marker_type: 'marker_countries',
    type: 'Countries',
    zoom: 5.1,
  },
  {
    url: 'continents',
    marker_type: 'marker_continents',
    type: 'Continent',
    zoom: 1.5,
  },
  {
    url: 'region_country',
    marker_type: 'marker_region_country',
    type: 'Region Country',
    zoom: 7.5,
  },
  {
    url: 'zone_continents',
    marker_type: 'marker_zone_continents',
    type: 'Zone Continents',
    zoom: 3.5,
  },
  {
    url: 'zone_country',
    marker_type: 'marker_zone_country',
    type: 'Zone Country',
    zoom: 6.5,
  },
  {
    url: 'zone_region',
    marker_type: 'marker_zone_region',
    type: 'Zone Region',
    zoom: 8.5,
  },
];

const mapBoxGLkey =
  'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA';

const firebaseConfig = {
  //apiKey: 'AIzaSyBRet_p16hufWWlUkeHsMu5FFugbcXDH4Y',
  //authDomain: 'mombo-1571065393002.firebaseapp.com',
  //databaseURL: 'https://mombo-1571065393002.firebaseio.com',
  //projectId: 'mombo-1571065393002',
  // storageBucket: 'mombo-1571065393002.appspot.com',
  //messagingSenderId: '468837751686',
  //appId: '1:468837751686:web:a289239a573e5d87816a07',
  //measurementId: 'G-QHW8H6K4PV',
};

export {dataSources, firebaseConfig, mapBoxGLkey};
