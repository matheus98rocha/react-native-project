import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


export default styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#ffff',
    height: responsiveHeight(10),
    paddingVertical: 7,
  },
  icon: {
    color: '#a6a4a4',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.5),
    padding: 4,
  },
  activeIcon: {
    backgroundColor: '#002db3',
    color: 'white',
    padding: 4,
    borderRadius: 5,
    fontSize: responsiveFontSize(3.5),
  },
});
