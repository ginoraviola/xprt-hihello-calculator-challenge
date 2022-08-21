import React from 'react';
import {StyleSheet, View} from "react-native"
import ButtonComponent from "./ButtonComponent";
import {keyboardValues} from "../../utils/KeyboardUtils";
import styles from './KeyboardComponent.style';

interface ICalculatorKeyboardProps {
    onKeyPress: (value: string) => void;
}

const CalculatorKeyboard = ({onKeyPress}: ICalculatorKeyboardProps ) => {
    return (
        <View style={styles.container}>
            {keyboardValues.map((key, index) => {
                return (
                    <ButtonComponent
                        key={index}
                        text={key.value}
                        variant={key.variant}
                        isFlex={key.value === '0'}
                        onPress={() => onKeyPress(key.value)}
                    />
                )}
            )}
        </View>
    )
}

export default CalculatorKeyboard;