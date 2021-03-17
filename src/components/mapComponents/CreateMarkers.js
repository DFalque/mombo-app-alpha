import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DetailsMarker from './DetailsMarker';

const CreateMarkers = (props) => {
  const data = props.data;
  //                                                                      //

  const renderMarkers = (data, key) => {
    return (
      <MapboxGL.MarkerView
        key={key}
        coordinate={data.geometry.coordinates}
        anchor={{x: 0, y: 0}}>
        {data.properties.icon && (
          <DetailsMarker
            key={key}
            title={data.properties.title}
            onPress={() => props.navigation.navigate('Guia')}
            imageUrl={data.properties.icon}
            fadeAnim={props.fadeAnim}
          />
        )}
      </MapboxGL.MarkerView>
    );
  };
  //                                                                      //

  // reroute
  // esta función la vamos cambiar cuando la transpasemos de app
  // lo enviará a la guía
  const onSelectedPoint = (event) => {
    props.navigation.navigate('Profile', {
      name: event.properties.title,
      item: event,
    });
  };
  //                                                                      //

  // retorna todos los marcadores
  return data.map(renderMarkers);
};

export default CreateMarkers;
