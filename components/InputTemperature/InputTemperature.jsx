import { s } from './InputTemperature.style'

import {Text, TextInput, View} from "react-native";

export function InputTemperature({defaultValue, onChangeText}) {
    return (
        <View style={s.container}>
            <TextInput
                style={s.input}
                keyboardType="numeric"
                maxLength={4}
                defaultValue={defaultValue}
                onChangeText={onChangeText}>
            </TextInput>
           <Text style={s.unit}>°C</Text>
        </View>
    );
}