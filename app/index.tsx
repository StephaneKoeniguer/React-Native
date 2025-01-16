import {ImageBackground, Text, View} from "react-native";
import {s} from "@/app/index.style";
// @ts-ignore
import hotBackground from "@/assets/images/hot.png";
import {InputTemperature} from "@/components/InputTemperature/InputTemperature";
import {TemperatureDisplay} from "@/components/TemperatureDisplay/TemperatureDisplay";
import {useState} from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNITS, UNITS } from "@/app/constant";

export default function Index() {
    const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE)
    const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS)

    return (
    <ImageBackground source ={hotBackground} style={s.container}>
        <View style={s.workspace}>
            <TemperatureDisplay value={inputValue} unit={currentUnit} />
            <InputTemperature onChangeText={setInputValue} defaultValue={DEFAULT_TEMPERATURE} />
            <View>
                <Text>oups</Text>
            </View>
        </View>
    </ImageBackground>
  );
}
