import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useGetAllergens } from '../../hooks/useGetAllergens';

type Props = {
    ean: string | null;
}

const ScanPopup = ({ ean }: Props) => {
  const allergens = useGetAllergens(ean);

  useEffect(() => {
    console.log("useEffect triggered");
    if (ean) {
      console.log("inside if");
    }
  }, [ean]);

  return (
    typeof ean === "string" ? (
      <View style={styles.container}>
        <Text>ScanPopup</Text>
        {allergens && (
          <Text>{JSON.stringify(allergens)}</Text>
        )}
      </View>
    ) : null
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "white",
    borderWidth: 2,
    width: "60%",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
    padding: 12,
  }
});

export default ScanPopup;
