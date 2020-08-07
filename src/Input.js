import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Block, Colors } from './index'

const Input = ({
    containerStyle,
    inputStyle,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    onChangeText,
    multiline,
    numberOfLines,
    leftElements,
    rightElements,
    background,
    mh,
    mv,
    ph,
    pv,
    alignSelf,
    radius,
    line,
    lineColor,
    size,
    color,
    height,
    value,
    keyboardType
}) => {
    const containerStyles = [
        styles.container,
        background && { backgroundColor: background },
        line && { borderWidth: line },
        lineColor && { borderColor: lineColor },
        radius != null && { borderRadius: radius },
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        alignSelf && { alignSelf: alignSelf },
        height && { height },
        containerStyle,
    ]
    const inputStyles = [
        styles.input,
        inputStyle,
        size && { fontSize: size },
        color && { color: color }
    ]
    return (
        <Block row style={containerStyles}>
            {leftElements}
            <TextInput keyboardType={keyboardType} value={value} underlineColorAndroid={Colors.transparent} style={inputStyles} onChangeText={onChangeText} multiline={multiline} numberOfLines={numberOfLines} secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
            {rightElements}
        </Block>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: 42,
        paddingHorizontal: 4,
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.border
    },
    input: {
        fontSize: 14,
        flex: 1,
        backgroundColor: Colors.transparent
    },
})

export default Input