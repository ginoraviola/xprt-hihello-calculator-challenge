import {StyleSheet} from 'react-native';
import {ButtonVariants} from '../../utils/ButtonVariants';

const getButtonStyles = (variant: ButtonVariants, bgColor: string) => StyleSheet.create({
    container: {
            aspectRatio: 1,
            flexBasis: '20%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: '1.5%',
            backgroundColor: variant === ButtonVariants.tertiary ? '#e89536' : bgColor,
            borderRadius: 50,
    },
    buttonText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: variant === ButtonVariants.secondary ? 'black' : 'white',
    },
  });

export default getButtonStyles;
