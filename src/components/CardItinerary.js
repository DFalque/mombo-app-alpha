import React from 'react';
import {View, Text} from 'react-native';
//COMPONENTES
import FlyCard from './cardItineraryComponents/FlyCard';
import ExploreCard from './cardItineraryComponents/ExploreCard';
import TransportCard from './cardItineraryComponents/TransportCard';
import WarningCard from './cardItineraryComponents/WarningCard';
import HotelCard from './cardItineraryComponents/HotelCard';

const CardItinerary = ({flight, explore, transport, warning, hotel}) => {
  return (
    <View>
      {flight === true ? <FlyCard /> : null}
      {explore === true ? <ExploreCard /> : null}
      {transport === true ? <TransportCard /> : null}
      {warning === true ? <WarningCard /> : null}
      {hotel === true ? <HotelCard /> : null}
    </View>
  );
};

export default CardItinerary;
