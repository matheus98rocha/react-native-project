import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontWeight: 'bold',

    backgroundColor: '#ffff',
    width: responsiveFontSize(43),
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  icon: {
    color: '#002db3',
    fontSize: 55,
    position: 'absolute',
    right: 13,
  },
});
