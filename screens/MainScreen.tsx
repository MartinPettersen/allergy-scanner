import React from "react";
import { View, StyleSheet } from "react-native";
import NavigationButton from "../components/(navigation)/NavigationButton";

const MainScreen = () => {


  return (
    <View style={styles.container}>
        <NavigationButton buttonText="Velg Allergier" screenName="Allergies"/>
        <NavigationButton buttonText="Skan" screenName="Scan"/>
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
});

export default MainScreen;
