import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import NavigationButton from "../(navigation)/NavigationButton";
import ScanButton from "./ScanButton";

type ScanProps = {
    type: string;
    data: string;
}

const ScanPage = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(true);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: ScanProps) => {
    console.log(typeof data);
    setScanned(true);
    alert(`${type}:${data}`);
  };

  if (hasPermission === null) {
    return <Text>Ber om kamera tilgang</Text>;
  }
  if (hasPermission === false) {
    return <Text>Mangler Kamera tilgang</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["ean13"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.buttonContainer}>

      {scanned? <ScanButton buttonText="Skan" action={() => setScanned(false)}/> : <ScanButton buttonText="Skanner..." action={() => setScanned(true)}/>}
      <NavigationButton buttonText="Returner" screenName="Main"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default ScanPage;
