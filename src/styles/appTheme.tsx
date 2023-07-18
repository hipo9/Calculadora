import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
//Calculadora
export const styles = StyleSheet.create({
  bgColor: {
    //color de fondo principal
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 15,
  },
  container: {
    //
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btnCalc: {
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
