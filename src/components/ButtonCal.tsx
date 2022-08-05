import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface ButtonProps {
    text: string,
    color?: string,
    width?: boolean,
    action?: () => void,

}

export const ButtonCal = ({ text, color = '#2D2D2D', width = false, action }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={action}>
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (width) ? 180 : 80
            }}>
                <Text
                    style={{
                        ...styles.textButton,
                        color: (color === '#9b9b9b') ? 'black' : 'white'
                    }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
