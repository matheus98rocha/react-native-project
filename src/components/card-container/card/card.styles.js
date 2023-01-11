import {StyleSheet} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  wrapper: {
    width: responsiveWidth(42),
    height: responsiveHeight(23),
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
    fontSize: responsiveFontSize(6),
  },
  iconDots: {
    color: '#ffff',
    fontSize: responsiveFontSize(3),
  },
  mainContent: {
    marginBottom: 7,
    marginTop: 7,
  },
  itemName: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  qtdItens: {
    color: '#b3cccc',
  },
  footerCard: {
    marginTop: 15,
    fontSize: responsiveFontSize(1.2),
    color: '#ffff',
  },
});
