import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useCalculadora from '../hooks/useCalculator';

interface Props {
  texto: string;
  bgColor: string;
  txtColor?: string;
  action: (number: string) => void;
}
const {height, width} = Dimensions.get('window');

/**
 * @texto : Texto de cada boton
 * @bgColor : Es el color de fondo de los botones
 * @txtColor : Es el color del texto
 * @action : Es una funcion en donde se agrega los numeros
 */
export const ButtonCalc = (props: Props) => {
  const {action, texto, bgColor, txtColor = 'white'} = props;
  

  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View style={{...styles.btnCalc, backgroundColor: bgColor}}>
        <Text style={{...styles.textBtn, color: txtColor}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  btnCalc: {
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
