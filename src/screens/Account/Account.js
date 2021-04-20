import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import ActionButtonWhite from '../../ui/ActionButtonWhite';
import ActionButtonLinkWhite from '../../ui/ActionButtonLinkWhite';

const Description = () => {
  return (
    <View>
      <Text style={styles.descriptionSmallText}>Descubre</Text>
      <Text style={styles.descriptionBigText}>Una nueva forma de viajar</Text>
    </View>
  );
};

const Account = (props) => {
  const {navigation} = props;
  function signUp() {
    navigation.navigate('Registrarse');
  }
  function firstTimer() {
    navigation.navigate('FirstTimeStack');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={{margin: 0, padding: 0}}
          source={require('../../assets/logoAccount.png')}></Image>
      </View>
      <View style={styles.descriptionContainer}>
        <Description />
      </View>
      <View style={styles.buttonsContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../assets/shape.png')}>
          <ActionButtonWhite text={'Registrarse'} doThis={signUp} />
          <ActionButtonLinkWhite text={'Login'} doThis={firstTimer} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#FAFAFA', margin: 0},
  headerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {flexGrow: 1},
  buttonsContainer: {flexGrow: 2},
  draw: {
    backgroundColor: 'red',
    //cctransform: [{matrix: [1, 0, 0, -1, 0, 0, 0, 0, 0]}],
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionSmallText: {
    //fontFamily: Roboto,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */
    color: '#D81159',
  },
  descriptionBigText: {
    //fontFamily: Roboto,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 26,
    lineHeight: 30,
    /* identical to box height */
    color: '#000000',
  },
});

// transform={{translate: '0, 0', scale: '-1, 1'}}
