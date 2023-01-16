import {StyleSheet} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    top: 54,
    right: 32,
  },
  modalOverlay: {
    backgroundColor: 'rgba(245, 39, 145, 0)',
    height: responsiveHeight(100),
  },
  menuIten: {
    width: responsiveWidth(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItenLabel: {
    color: 'black',
    fontSize: responsiveFontSize(2.2),
  },
});
