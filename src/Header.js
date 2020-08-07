import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Colors } from 'react-native-design-components';

const Header = ({
    children,
    containerStyle,
    mh,
    mv,
    ph,
    pv,
    size,
    alignItems,
    background,
    shadow,
    darkBar
}) => {
    const styleHeader = [
        background && { backgroundColor: background },
        size && { width: size, height: size, borderRadius: size },
        mh && { marginHorizontal: mh },
        mv && { marginVertical: mv },
        ph && { paddingHorizontal: ph },
        pv && { paddingVertical: pv },
        alignItems && { alignItems: alignItems },
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
        <>
            <StatusBar backgroundColor={background || Colors.primary} networkActivityIndicatorVisible={false} barStyle={darkBar ? 'dark-content' : 'light-content'} />
            <SafeAreaView style={[styles.container, { backgroundColor: Colors.primary, }, styleHeader]}>
                {children}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? 80 : 80 - StatusBar.currentHeight,
        justifyContent: 'center',
        // alignItems: 'center',
    }
})


export default Header
