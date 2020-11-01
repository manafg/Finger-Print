import React from 'react';
import CircleProgress from './CircleProgress'
import { Value, set, useCode } from "react-native-reanimated";
import { StyleSheet, Text, View } from 'react-native';
import { timing } from "react-native-redash";
import { COLOR_BG, COLOR_FG, RADIUS, STROKE_WIDTH } from "../Misc/Constants";

export default function Index() {
  const progress = new Value(0);
  useCode(() => set(progress, timing({ duration: 10000 })), [progress]);
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <CircleProgress bg={COLOR_BG} fg={COLOR_FG} {...{ progress }} />
      </View>
      <View style={styles.overlay}>
        <View style={{
          width: RADIUS *2.4 - STROKE_WIDTH,
          height:  RADIUS *2.4 - STROKE_WIDTH,
          borderRadius: RADIUS - STROKE_WIDTH /4, 
          backgroundColor:"white"}}></View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'grey'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
