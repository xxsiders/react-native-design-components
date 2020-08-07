import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = ({
    style,
    mh,
    mv,
    ph,
    pv,
    color,
    size,
    bold,
    numberOfLines,
    children,
    onPress,
    alignSelf
}) => {

    const styleText = [
        style,
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        color && { color: color },
        size && { fontSize: size },
        bold && { fontWeight: 'bold' },
        alignSelf && { alignSelf: alignSelf }
    ];

    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={styleText}>
            {children}
        </Text>
    )

}

const styless = StyleSheet.create({
});

export default CustomText
