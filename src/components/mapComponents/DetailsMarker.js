import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import storage from '@react-native-firebase/storage';

const AnnotationContent = (props) => {
  // get storage url
  // En la base de datos el icono tiene de nombre un directorio, con el final el nombre del archivo
  // Con la expresion regular lo que hace es quedarse con el nombre final
  // Se escribe la expresion regular
  const regexp = /(\.\.\/\w{3}\/)(\w+.{2,})/i;
  // y Aquí obtiene el resultado de utilizar la expresión regular.
  let sourceFolder = props.imageUrl.match(regexp);
  let storageUrl = sourceFolder[2];

  // // load the image
  const [imageUrl, setImageUrl] = useState(null);
  const [storeUrl, setStoreUrl] = useState(storageUrl);

  console.log('Folders: ' + sourceFolder[2]);
  console.log('State', imageUrl);

  useEffect(() => {
    let isSubscribed = true;
    const images = storage().ref(storageUrl).getDownloadURL();

    images
      .then((url) => {
        if (isSubscribed) {
          setImageUrl(url);
          console.log(url);
        }
      })
      .catch((e) => {
        console.log('Storage failed: ' + storageUrl);
        setImageUrl(null);
      });

    return function cleanup() {
      isSubscribed = false;
    };
  }, [props.title]);

  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 20,
        width: 'auto',
      }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: 'white',
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        {imageUrl && (
          <Image
            key={props.title}
            style={styles.imgMarker}
            source={{
              uri: imageUrl,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AnnotationContent;

const styles = StyleSheet.create({
  imgMarker: {
    width: 50,
    height: 50,
  },
});
