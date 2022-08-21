import {StyleSheet} from 'react-native';

const getResultsDisplayStyle = (length) => StyleSheet.create({
    container: {
        position: 'absolute',
        paddingVertical: '5%',
        height: '40%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    operationText: {
        fontSize: 30,
        fontWeight: '400',
        color: 'gray',
    },
    displayText: {
        fontSize: length > 5 ? 50 : 70,
        fontWeight: "200",
        color: 'white',
    }
});

export default getResultsDisplayStyle;