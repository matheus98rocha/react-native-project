import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffff',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  wrapperMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#a6a4a4',
    borderRadius: 5,
    padding: 9,
  },
  activeIcon: {
    fontSize: 25,
    color: '#a6a4a4',
    borderRadius: 5,
    padding: 9,
    backgroundColor: '#002db3',
    color: 'white',
  },
  textMenu: {
    marginTop: 2,
    fontWeight: 'bold',
  },
});
