import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import validationEmail from "../../utils/validation";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
// COMPONENTES
import ActionButtonMombo from "../../ui/ActionButtonLinkMombo";
import ActionButtonLinkMombo from "../../ui/ActionButtonLinkMombo";

const SignUp = (props) => {
  const {navigation} = props;
  const readFalse = async () => {
    try {
      await AsyncStorage.setItem("read", "true");
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  const backtoStart = () => {
    navigation.navigate("Cuenta");
  };

  const gotoFirstTime = () => {
    navigation.navigate("FirstTimeStack");
  };

  const [formData, setFormData] = useState(defaultFormValue());

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e});
    console.log(formData);
  };

  const onSubmit = () => {
    console.log(formData.email);
    console.log(validationEmail(formData.email));
    readFalse();
    auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((response) => {
        console.log(response);
        const id = response.user.uid;
        console.log(id);
        database()
          .ref("/users/" + response.user.uid)
          .set({
            age: 32,
            nombre: "Paco",
          })
          .then(() => {
            console.log("Data updated.");
            console.log("User account created & signed in!");
            gotoFirstTime()
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  function defaultFormValue() {
    return {
      email: "",
      password: "",
    };
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/signUpTop.png")}>
          <Text>Comienza una nueva Aventura</Text>
        </ImageBackground>
      </View>
      <View style={styles.containerSignUp}>
        <View style={styles.containerSignUpBottom}>
          <ActionButtonLinkMombo text={"Volver"} doThis={backtoStart} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Nombre de Usuario"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={(e) => onChange(e, "email")}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={(e) => onChange(e, "email")}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Contraseña"
            placeholderTextColor="grey"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(e) => onChange(e, "password")}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => onSubmit()}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {flex: 1},
  containerSignUp: {flex: 1, flexDirection: "column-reverse"},
  containerSignUpBottom: {
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingBottom: 20,
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
  submitButton: {
    backgroundColor: "#D81159",
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  submitButtonText: {
    color: "white",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
