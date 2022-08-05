import React, { useRef, useState } from 'react';
import { COMMA, MINUS, ZERO } from '../constants/constants';


enum Operations {
    add, subtract, multiply, divide
  }

export const useCalculadora = () => {
    const [number, setNumber] = useState(ZERO);
    const [beforeNumber, setBeforeNumber] = useState(ZERO);
    const lastOperation = useRef<Operations>();


    const clean = () => {
        setNumber(ZERO);
        setBeforeNumber(ZERO);
    }

    const buildNumber = (textNumber: string) => {
        if (number.includes(COMMA) && textNumber === COMMA) return;
        if (number.startsWith(ZERO) || number.startsWith(`${MINUS}${ZERO}`)) {
            if (textNumber === COMMA) {
                setNumber(number + textNumber);
            }
            else if (number.includes(COMMA) && textNumber === ZERO) {
                setNumber(number + textNumber);
            }
            else if (!number.includes(COMMA) && textNumber !== ZERO) {
                setNumber(textNumber);
            }
            else if (!number.includes(COMMA) && textNumber === ZERO) {
                setNumber(textNumber);
            }

            else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }

    }

    const positiveNegative = () => {
        if (number.includes(MINUS)) {
            setNumber(number.replace(MINUS, ''));
        }
        else {
            setNumber(MINUS.concat(number));
        }
    }

    const deleteNumber = () => {
        if (number.length < 2 || (number.length === 2 && number.includes(MINUS))) {
            setNumber(ZERO);
        } else {
            setNumber(number.slice(0, -1))
        }
    }
    const changeBeforeNumber = () => {
        if (number.endsWith(COMMA)) {
            setBeforeNumber(number.slice(0,));
        }
        else {
            setBeforeNumber(number);
        }
        setNumber(ZERO);
    }

    const btnDivide = () => {
        changeBeforeNumber();
        lastOperation.current = Operations.divide;
    }

    const btnMultiply = () => {
        changeBeforeNumber();
        lastOperation.current = Operations.multiply;
    }

    const btnSubtract = () => {
        changeBeforeNumber();
        lastOperation.current = Operations.subtract;
    }

    const btnAdd = () => {
        changeBeforeNumber();
        lastOperation.current = Operations.add;
    }

    const calculate = () => {
        if (number !== ZERO && beforeNumber !== ZERO) {
            const firstNumber = Number(number);
            const secondNumber = Number(beforeNumber);
            switch (lastOperation.current) {
                case Operations.add:
                    setNumber(`${firstNumber + secondNumber}`);
                    break;
                case Operations.subtract:
                    setNumber(`${secondNumber - firstNumber}`);
                    break;
                case Operations.multiply:
                    setNumber(`${firstNumber * secondNumber}`);
                    break;
                case Operations.divide:
                    setNumber(`${secondNumber / firstNumber}`);
                    break;
                default:
                    break;
            }
            if (number !== ZERO) {
                setBeforeNumber(ZERO)
            }
        }
    }

    return{
        beforeNumber,
        number,
        clean,
        positiveNegative,
        deleteNumber,
        btnDivide,
        buildNumber,
        calculate,
        btnMultiply,
        btnSubtract,
        btnAdd
    }
};

