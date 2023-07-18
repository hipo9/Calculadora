import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  number: string;
  secundaryNumber: string;
}
//
//parte visual donde aparece los numeros, las operaciones
export const DisplayCalc = ({number, secundaryNumber}: Props) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.secondaryDisplay}>{secundaryNumber}</Text>
      <Text style={styles.mainDisplay} numberOfLines={1}adjustsFontSizeToFit={true}>
        {number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  mainDisplay: {
    color: 'white',
    fontSize: 28,
    marginBottom: 5,
  },
  secondaryDisplay: {
    color: 'gray',
    fontSize: 20,
    marginBottom: 5,
  },
});
