import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useCode, cond,eq,call } from 'react-native-reanimated';
import CircleProgress from '../Circle/CircleProgress';
import StyleGuide from '../Misc/StyleGuid'
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { bInterpolate } from 'react-native-redash';

const SIZE = 150;
const STROKWIDTH = 10;
const ICON_SIZE = 96;


interface ButttonsProps {
    progress: Animated.Node<number>
}


export default ({ progress }: ButttonsProps) => {
    const [active, setActive]= useState(false);
    useCode(
        () =>
          cond(
            eq(progress, 1),
            call([], () => setActive(true))
          ),
        [progress]
      );
    const height = bInterpolate(progress,0,ICON_SIZE)
    return (
        <View>
            <CircleProgress radius={SIZE / 2} bg="white" fg={StyleGuide.palette.primary} {...{ progress }} />
            <View style={styles.container}>
                <Icon style={styles.icon} name={active ? "check-circle" : "fingerprint" } size={ICON_SIZE} color={active ? StyleGuide.palette.primary : StyleGuide.palette.background} />
                <Animated.View style={[styles.activeIcon, {height, opacity: active? 0 : 1}]}>
                    <Icon name="fingerprint" size={ICON_SIZE} color={StyleGuide.palette.primary} />
                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: STROKWIDTH,
        left: STROKWIDTH,
        right: STROKWIDTH,
        bottom: STROKWIDTH,
        backgroundColor: "white",
        zIndex: 100,
        borderRadius: (SIZE - STROKWIDTH * 2) / 2
    },
    icon: {
        top: (SIZE - STROKWIDTH * 2 - ICON_SIZE) / 2,
        left: (SIZE - STROKWIDTH * 2 - ICON_SIZE) / 2,
    },
    activeIcon: {
        position: 'absolute',
        top: (SIZE - STROKWIDTH * 2 - ICON_SIZE) / 2,
        left: (SIZE - STROKWIDTH * 2 - ICON_SIZE) / 2,
    }
})