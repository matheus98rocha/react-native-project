import {StyleSheet} from 'react-native';

import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(45),
    marginTop: 10,
  },
});
