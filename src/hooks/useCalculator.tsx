import React, {Suspense, useEffect, useRef, useState} from 'react';
import {ToastAndroid} from 'react-native';

enum Operdores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
export default function useCalculadora() {
  const [number, setNumber] = useState('0');
  const [secundaryNumber, setSecundaryNumber] = useState('0');
  const lastOperation = useRef<Operdores>();

  const limpiar = () => {
    setNumber('0');
    if (secundaryNumber.length === 1 && secundaryNumber.startsWith('0')) {
      setSecundaryNumber('');
    }
    setSecundaryNumber('0');
  };
  /**
   * @param numberText : Tipo de texto que se envio desde el btn
   */
  const armarNum = (numberText: string) => {
    /**evitamos desde un principio que se ingresen dos puntos al mismo osea
     que tanto number y numberText no pueden tener los puntos al mismotiempo*/
    if (number.includes('.') && numberText === '.') return;
    /* si al unciar es un 0 y a la vez lo que se ingresa es otro 0 evitamos que se ingrese mas 0 ademas para que despues 
    se pueda ingresar mas 0's despues de un punto evaluamos el tamaño del number  */
    if (number.startsWith('0') && numberText === '0' && number.length === 1)
      return;
    //evitamos el ingreso de varios '()'

    //
    /*si el inicio es un 0 o un -0 es valido y por lo tanto entrara en el if, el !number.startsWith('0') es para
    evitar que se atasque en la en la evaluacion de else if (number.startsWith('0') && number.length === 1)*/
    if (
      number.startsWith('0') ||
      number.startsWith('-0') ||
      !number.startsWith('0')
    ) {
      //en caso de que no incluya un . en el display y si se ingresa un . sera valido
      if (numberText === '()') {
        setNumber(number + '(');
        if (!number.includes(')')) {
          setNumber(number + '(');
        }
      } else if (!number.includes('.') && numberText === '.') {
        setNumber(number + numberText);
      } else if (number.startsWith('0') && number.length === 1) {
        setNumber(numberText);
      } else {
        setNumber(number + numberText);
      }
    }
  };
  //
  //Eliminar un solo dgito
  //! Revisar mañama
  const eliminarNum = () => {
    setNumber(number.slice(0, -1));
    if (number.length === 1 && number.includes('-')) {
      setNumber('0');
    } else if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    }
  };
  //
  const cambiarNumero = () => {
    if (number.endsWith('.')) {
      setSecundaryNumber(number.slice(0, -1));
    } else {
      setSecundaryNumber(number);
    }
    setNumber('0');
  };
  //
  const positivoNegativo = () => {
    if (!number.includes('-')) {
      setNumber('-' + number);
    } else if (number.includes('-') && number.length > 1) {
      setNumber(number.slice(1));
    }
  };
  //
  //
  const verificarOp = () => {
    //evitamos en la pantalla secundara el numero 0 cuando presionamos cualquier tecla de opearacion
    if (secundaryNumber.startsWith('0') && secundaryNumber.length === 1) {
      setSecundaryNumber('');
    }
  };
  const btnSumar = () => {
    verificarOp();
    cambiarNumero();
    lastOperation.current = Operdores.sumar;
  };
  const btnRestar = () => {
    verificarOp();
    cambiarNumero();
    lastOperation.current = Operdores.restar;
  };
  verificarOp();
  const btnMultiplicar = () => {
    cambiarNumero();
    lastOperation.current = Operdores.multiplicar;
  };
  const btnDividir = () => {
    verificarOp();
    cambiarNumero();
    lastOperation.current = Operdores.dividir;
  };
  //
  const calcular = () => {
    let num1 = Number(number);
    let num2 = Number(secundaryNumber);
    
    
    /* Me dio una un erro raro al calcular la divicion y la resta,
     al presionar el = me cambia el signo, no pude encontrar el erro, 
     esta fue mi solucion para evitar el cambio de signo al precionar el "=*/
    if (number !== '0' && secundaryNumber === '') return;  
    
    switch (lastOperation.current) {
      case Operdores.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operdores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operdores.restar:
        setNumber(`${num2 - num1}`);
        break;
      case Operdores.dividir:
        setNumber(`${num2 - num1}`);
        break;
    }
    setSecundaryNumber('');

      
    
  };

  return {
    armarNum,
    btnSumar,
    calcular,
    eliminarNum,
    limpiar,
    number,
    secundaryNumber,
    btnMultiplicar,
    btnRestar,
    btnDividir,
    positivoNegativo,
  };
}

//verificar el function en tre el const
