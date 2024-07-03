import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import NavigationButton from "../(navigation)/NavigationButton";
import allergensData from "../../data/allergens.json";
import { Feather } from "@expo/vector-icons";
import { Allergen } from "../../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ALLERGENS_STORAGE_KEY = "allergensData";

const AllergiesContainer = () => {
    const [allergens, setAllergens] = useState(allergensData.allergens);


    useEffect(() => {
        const loadAllergens = async () => {
          try {
            const storedAllergens = await AsyncStorage.getItem(ALLERGENS_STORAGE_KEY);
            if (storedAllergens) {
              setAllergens(JSON.parse(storedAllergens));
            }
          } catch (error) {
            console.error("Failed to load allergens from storage", error);
          }
        };
    
        loadAllergens();
      }, []);
    
      const toggleAllergy = async (index: number) => {
        const newAllergens = [...allergens];
        newAllergens[index].allergic = !newAllergens[index].allergic;
        setAllergens(newAllergens);
    
        try {
          await AsyncStorage.setItem(ALLERGENS_STORAGE_KEY, JSON.stringify(newAllergens));
        } catch (error) {
          console.error("Failed to save allergens to storage", error);
        }
      };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allergens.map((allergen, index) => (
        <TouchableOpacity style={styles.box} key={index} onPress={() => toggleAllergy(index) }>

        <Text>{`${allergen.display_name}`}</Text>
        <Feather
              name={allergen.allergic ? "check-square" : "square"}
              size={25}
              color={allergen.allergic ? "#039FE7" : "grey"}
            />
        </TouchableOpacity>
      ))}
      <NavigationButton buttonText="Ferdig" screenName="Main"/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    padding: 4,
    margin: 6,
    flexDirection: "row",    
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default AllergiesContainer;
