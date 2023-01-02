import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    width: 175,
    height: 180,
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
    fontSize: 60,
  },
  iconDots: {
    color: '#ffff',
    fontSize: 25,
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
    fontSize: 12,
    color: '#b3cccc',
  },
});
