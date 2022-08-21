import React from 'react';
import {View, Text, SafeAreaView, useColorScheme, StyleSheet} from "react-native";
import getResultsDisplayStyle from "./ResultsDisplay.style";

const ResultsDisplay = ({value, operationText}) => {

    const styles = getResultsDisplayStyle(value.length);

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.operationText}>{operationText !== '0' ? operationText : ''}</Text>
                <Text style={styles.displayText} ellipsizeMode="head" numberOfLines={1}>{value}</Text>
        </SafeAreaView>
    );
};


export default ResultsDisplay;