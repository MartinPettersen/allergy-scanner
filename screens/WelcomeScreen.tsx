import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import NavigationButton from "../components/(navigation)/NavigationButton";

const WelcomeScreen = () => {
  const handleOpenWebpage = async () => {
    const url = "https://lovdata.no/dokument/SF/forskrift/2014-11-28-1497";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Feil oppstod med : ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Denne appen skanner bare strekkoder etter allergener som er oppgitt i{" "}
        <TouchableOpacity
          onPress={handleOpenWebpage}
          style={styles.linkWrapper}
        >
          <Text style={styles.linkText}>Matinformasjonsforskriften</Text>
        </TouchableOpacity>
        . Bruk av denne appen er på eget ansvar.
      </Text>
      <NavigationButton buttonText="Godta" screenName="Main"/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  text: {
    color: "#15344c",
    fontSize: 24,
  },
  linkWrapper: {
    alignSelf: "flex-start",
  },
  linkText: {
    color: "#02a9f7",
    fontSize: 24,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginTop: 70,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  shadowText: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default WelcomeScreen;
