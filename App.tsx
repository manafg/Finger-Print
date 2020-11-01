import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./FingerPrint/Index"
export default function App() {
  return (
    <View style={styles.container}>
        <Index />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
