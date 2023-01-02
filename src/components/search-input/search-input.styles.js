import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    marginBottom: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',

    backgroundColor: '#ffff',
    width: '98%',
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
