import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { RootStackParamList } from "../../utils/types";

type Props = {
  buttonText: string;
  screenName: string;
};

const { width } = Dimensions.get("window");

const NavigationButton = ({ buttonText, screenName }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.shadow}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate(screenName)}>
        <LinearGradient
          colors={["#039FE7", "#1DC1F6"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={[styles.buttonText, styles.shadowText]}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#15344c",
    fontSize: 24,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginTop: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  shadowText: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonContainer: {
    width: width * 0.74,
    alignSelf: "center",
    
  },
});

export default NavigationButton;
