import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RADIUS } from '../Misc/Constants'
import { color } from 'react-native-reanimated';

interface HalfCircleProps {
    color: string,
    radius: number
}

export default ({ color, radius }: HalfCircleProps) => {
    return (
        <View style={{
            width:radius * 2,
            height: radius,
            overflow:'hidden'

        }}>
            <View style={{
                backgroundColor: color,
                height: radius * 2,
                width: radius * 2, 
                borderRadius: radius
            }} />
        </View>
    )
}

