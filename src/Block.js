import React from 'react';
import { StyleSheet, View } from 'react-native';

const Block = ({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  shadow,
  space,
  fluid,
  height,
  shadowColor,
  card,
  width,
  safe,
  children,
  style,
  mh,
  mv,
  ph,
  pv,
  ...rest
}) => {

  const styleBlock = [
    styless.block,
    row && styless.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styless.center,
    middle && styless.middle,
    top && styless.top,
    bottom && styless.bottom,
    right && styless.right,
    left && styless.left,
    space && { justifyContent: `space-${space}` },
    shadow && styless.shadow,
    fluid && styless.fluid,
    card && styless.card,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    style,
    mh && { marginHorizontal: mh },
    mv && { marginVertical: mv },
    ph && { paddingHorizontal: ph },
    pv && { paddingVertical: pv },
  ];

  return (
    <View style={styleBlock}>
      {children}
    </View>
  )

}

const styless = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  fluid: {
    width: 'auto',
  },
});

export default Block
