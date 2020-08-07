import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({
    children,
    containerStyle,
    mh,
    mv,
    ph,
    pv,
    size,
    alignSelf,
    background,
    radius,
    shadow,
}) => {

    const styleCard = [
        styles.containerStyle,
        background && { backgroundColor: background },
        size && { width: size, height: size, borderRadius: size },
        radius != null && { borderRadius: radius },
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        alignSelf && { alignSelf: alignSelf },
        shadow && {
            shadowColor: "#00000080",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        containerStyle,
    ];

    return (
        <View style={styleCard}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
    }
})

export default Card
