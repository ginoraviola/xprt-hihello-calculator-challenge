import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import CalculatorKeyboard from "../components/KeyboardComponent";
import ResultsDisplay from "../components/ResultsDisplay";
import {handleKeyPressed} from "../../utils/Calculator";
import styles from './CalculatorScreen.style';

const CalculatorScreen = () => {
    const [value, setValue] = useState('0');
    const [operationText, setOperationText] = useState('0');

    const onKeyboardKeyPress = (key: string): void => {
        const result = handleKeyPressed(key, value, operationText);
        setValue(result.value);
        setOperationText(result.operationText);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ResultsDisplay value={value} operationText={operationText}/>
                <CalculatorKeyboard onKeyPress={(key) => onKeyboardKeyPress(key)}/>
            </View>
        </SafeAreaView>
    );
}

export default CalculatorScreen;