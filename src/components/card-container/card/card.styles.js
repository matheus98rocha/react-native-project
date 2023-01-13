import {StyleSheet} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    width: responsiveWidth(42),
    height: responsiveHeight(20),
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: '#e6e600',
    fontSize: responsiveFontSize(5),
  },
  iconDots: {
    color: '#ffff',
    fontSize: responsiveFontSize(3),
  },
  mainContent: {
    marginBottom: 6,
    marginTop: 6,
  },
  itemName: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.9),
  },
  qtdItens: {
    color: '#b3cccc',
    fontSize: responsiveFontSize(1.7),
  },
  footerCard: {
    fontSize: responsiveFontSize(1.2),
    color: '#ffff',
  },
});
