import React from 'react';
import { View, StyleSheet } from 'react-native';
import Buttons from './Buttons';
import {State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { Value, eq , cond} from 'react-native-reanimated';
import {
    bInterpolate,
    onGestureEvent,
    withTransition,
    
  } from "react-native-redash";


export default () => {
    const state = new Value(State.UNDETERMINED);
    const gestureHandler = onGestureEvent({state});
    const isActive = eq(state,State.BEGAN);
    const duration = cond(isActive, 2000, 250);
    const progress = withTransition(eq(state, State.BEGAN), {duration});
    const scale = bInterpolate(progress,1,1.2)
    return (
        <View style={styles.container}>
            <TapGestureHandler {...gestureHandler}>
                <Animated.View style={{transform: [{scale}]}}>
                    <Buttons {...{progress}}/>
                </Animated.View>
            </TapGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "grey"
    }
})