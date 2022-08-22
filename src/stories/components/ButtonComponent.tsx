import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ButtonVariants} from "../../utils/ButtonVariants";
import getButtonStyles from "./ButtonComponent.style";

interface IButtonProps {
    text: string;
    variant?: ButtonVariants;
    isFlex?: boolean;
    onPress: () => void;
}

const ButtonComponent = ({text, variant = ButtonVariants.primary, onPress }: IButtonProps) => {
    const bgColor = variant === ButtonVariants.primary ? Colors.dark : '#a7a5a5';

    const styles = getButtonStyles(variant, bgColor);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
};


export default ButtonComponent;
