import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'black',
    fontSize: responsiveFontSize(4),
  },
  welcomeMessage: {
    marginTop: 8,
  },
  textWelcome: {
    fontSize: responsiveFontSize(5),
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.7),
  },
});
