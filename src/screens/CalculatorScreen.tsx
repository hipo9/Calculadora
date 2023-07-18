import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DisplayCalc} from '../components/DisplayCalc';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../styles/appTheme';
import useCalculator from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    armarNum,
    btnSumar,
    number,
    limpiar,
    btnMultiplicar,
    btnRestar,
    eliminarNum,
    secundaryNumber,
    positivoNegativo,
    calcular,
    btnDividir,
  } = useCalculator();

  return (
    <View style={styles.bgColor}>
      <View style={styles.container}>
        <View>
          <DisplayCalc number={number} secundaryNumber={secundaryNumber} />
          <View style={{flexDirection: 'row-reverse', marginBottom: 10}}>
            {/* Eliminar numero "C" */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => console.log('limpiando xd')}>
              <View style={{width: 30}}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <ButtonCalc
              texto="C"
              bgColor="#171717"
              txtColor="#EF6F6C"
              action={limpiar}
            />
            <ButtonCalc texto="Del" bgColor="#171717" action={eliminarNum} />
            <ButtonCalc texto="%" bgColor="#171717" action={armarNum} />
            <ButtonCalc
              texto="/"
              bgColor="#171717"
              txtColor="#73D643"
              action={btnDividir}
            />
          </View>

          {/* 7 */}
          <View style={styles.rowContainer}>
            <ButtonCalc texto="7" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="8" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="9" bgColor="#171717" action={armarNum} />
            <ButtonCalc
              texto="x"
              bgColor="#171717"
              txtColor="#73D643"
              action={btnMultiplicar}
            />
          </View>
          <View style={styles.rowContainer}>
            <ButtonCalc texto="4" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="5" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="6" bgColor="#171717" action={armarNum} />
            <ButtonCalc
              texto="-"
              bgColor="#171717"
              txtColor="#73D643"
              action={btnRestar}
            />
          </View>
          <View style={styles.rowContainer}>
            <ButtonCalc texto="1" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="2" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="3" bgColor="#171717" action={armarNum} />
            <ButtonCalc
              texto="+"
              bgColor="#171717"
              txtColor="#73D643"
              action={btnSumar}
            />
          </View>
          <View style={styles.rowContainer}>
            <ButtonCalc texto="+/-" bgColor="#171717" action={positivoNegativo} />
            <ButtonCalc texto="0" bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="." bgColor="#171717" action={armarNum} />
            <ButtonCalc texto="=" bgColor="#328506" action={calcular} />
          </View>
        </View>
      </View>
    </View>
  );
};
