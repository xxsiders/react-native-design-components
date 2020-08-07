import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from 'react-native-design-components/src/Colors'

const Button = ({
    children,
    background,
    activeOpacity,
    onPress,
    mh,
    mv,
    ph,
    pv,
    alignSelf,
    radius,
    style
}) => {
    const buttonStyles = [
        styles.container,
        background && { backgroundColor: background },
        radius != null && { borderRadius: radius },
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        alignSelf && { alignSelf: alignSelf },
        style
    ]
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8 || activeOpacity} style={buttonStyles}>
            {children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 4
    }
})

export default Button
