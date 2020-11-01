import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { multiply, interpolate, Extrapolate, lessThan } from 'react-native-reanimated';
import HalfCircle from './HalfCircle';
import { PI, RADIUS } from '../Misc/Constants';
import { transformOrigin } from "react-native-redash";


interface CircleProgressProps {
    progress: Animated.Node<number>;
    bg: string,
    fg: string,
    radius: number
}

export default ({ progress, bg, fg , radius}: CircleProgressProps) => {
    const theta = multiply(progress, 2 * PI);
    const rotate = interpolate(theta, {
        inputRange: [PI, 2* PI],
        outputRange: [0, PI],
        extrapolate: Extrapolate.CLAMP
    })
    const opacity = lessThan(theta, PI);

    return (
        <>
            <View style={{ zIndex: 1 }}>
                <HalfCircle color={fg} {...{radius}} />
                <Animated.View style={{
                    ...StyleSheet.absoluteFillObject,
                    transform: transformOrigin(
                        { x: 0, y: radius / 2 },
                        { rotate: theta }
                    ),
                    opacity
                }}>
                    <HalfCircle color={bg} {...{radius}} />
                </Animated.View>
            </View>
            <View style={{ transform: [{ rotate: '180deg' }] }}>
                <HalfCircle  {...{radius}} color={fg} />
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, transform:transformOrigin({x:0, y:radius/2},{rotate})}}>
                    <HalfCircle {...{radius}} color={bg} />
                </Animated.View>
            </View>
        </>
    )
}