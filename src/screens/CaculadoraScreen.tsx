import { Text, View } from "react-native";
import React from "react";
import { styles } from "../theme/appTheme";
import { ButtonCal } from "../components/ButtonCal";
import { COMMA, MINUS, ZERO, EX, EIGHT, EQUAL, FIVE, FOUR, NINE, ONE, PLUS, SEVEN, SIX, THREE, TWO } from '../constants/constants';
import { useCalculadora } from '../hooks/useCalculadora';


export const CaculadoraScreen = () => {
  const { beforeNumber,
    number,
    clean,
    positiveNegative,
    deleteNumber,
    btnDivide,
    buildNumber,
    calculate,
    btnMultiply,
    btnSubtract,
    btnAdd } = useCalculadora();

  return (
    <View style={styles.calculateContainer}>
      {(beforeNumber !== ZERO) &&
        <Text style={styles.littleResult}>{beforeNumber}</Text>}
      <Text style={styles.result}
        numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
      <View style={styles.row}>
        <ButtonCal text="C" color="#9b9b9b" action={clean} />
        <ButtonCal text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCal text="del" color="#9b9b9b" action={deleteNumber} />
        <ButtonCal text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCal text={SEVEN} action={() => buildNumber(SEVEN)} />
        <ButtonCal text={EIGHT} action={() => buildNumber(EIGHT)} />
        <ButtonCal text={NINE} action={() => buildNumber(NINE)} />
        <ButtonCal text={EX} color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCal text={FOUR} action={() => buildNumber(FOUR)} />
        <ButtonCal text={FIVE} action={() => buildNumber(FIVE)} />
        <ButtonCal text={SIX} action={() => buildNumber(SIX)} />
        <ButtonCal text={MINUS} color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCal text={ONE} action={() => buildNumber(ONE)} />
        <ButtonCal text={TWO} action={() => buildNumber(TWO)} />
        <ButtonCal text={THREE} action={() => buildNumber(THREE)} />
        <ButtonCal text={PLUS} color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCal text={ZERO} width action={() => buildNumber(ZERO)} />
        <ButtonCal text={COMMA} action={() => buildNumber(COMMA)} />
        <ButtonCal text={EQUAL} color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

