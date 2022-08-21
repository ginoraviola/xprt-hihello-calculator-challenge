import {StyleSheet} from 'react-native';
import {ButtonVariants} from "../../utils/ButtonVariants";

const getButtonStyles = (isFlex: boolean, variant: ButtonVariants, bgColor: string) =>  StyleSheet.create({
    container: {
            flex: isFlex ? 1 : 0,
            alignItems: "center",
            padding: '6%',
            margin: '2%',
            backgroundColor: variant === ButtonVariants.tertiary ? '#e89536' : bgColor,
            width: 72,
            height: 72,
            borderRadius: 72/2,
            justifyContent: "center",
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: variant === ButtonVariants.secondary ? "black" : "white",
    }
});

export default getButtonStyles;