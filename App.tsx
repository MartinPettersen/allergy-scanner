import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera";
import ScanScreen from "./screens/ScanScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";
import AllergiesScreen from "./screens/AllergiesScreen";

export default function App() {
  
  return (
    <AllergiesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});