import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import NavigationButton from "../components/NavigationButton";

const MainScreen = () => {


  return (
    <View style={styles.container}>

        <NavigationButton buttonText="Velg Allergier"/>
        <NavigationButton buttonText="Skan"/>


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
