import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
    ean: string | null;
}

const ScanPopup = ({ ean }: Props) => {
  return (
    typeof ean === "string" ? (
      <View style={styles.container}>
        <Text>ScanPopup</Text>
      </View>
    ) : null
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "white",
    borderWidth: 2,
    
  }
});

export default ScanPopup;
