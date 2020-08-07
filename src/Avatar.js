import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = ({
    source,
    imageStyle,
    containerStyle,
    mh,
    mv,
    ph,
    pv,
    alignSelf,
    size,
    onPress,
    background,
    radius,
    line,
    lineColor,
    resizeMode
}) => {

    const styleAvatar = [
        styles.containerStyle,
        background && { backgroundColor: background },
        line && { borderWidth: line },
        lineColor && { borderColor: lineColor },
        size && { width: size, height: size, borderRadius: size },
        radius != null && { borderRadius: radius },
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        alignSelf && { alignSelf: alignSelf },
        containerStyle,
    ];

    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styleAvatar}>
            <Image resizeMode={resizeMode} source={{ uri: source }} style={[{ flex: 1 }, imageStyle]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: { width: 50, height: 50, borderRadius: 50, backgroundColor: 'silver', overflow: 'hidden', }
})


export default Avatar
