import {ImageBackground, Text, View} from "react-native";
import {useEffect, useState} from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNITS, UNITS } from "@/app/constant";
import { s } from "@/app/index.style";
// @ts-ignore
import hotBackground from "@/assets/images/hot.png";
// @ts-ignore
import coldBackground from "@/assets/images/cold.png";
import {InputTemperature} from "@/components/InputTemperature/InputTemperature";
import {TemperatureDisplay} from "@/components/TemperatureDisplay/TemperatureDisplay";
import { getOppositUnit, convertTemperatureTo,isIceTemperature } from "@/services/Temperature-service"
import {ButtonConvert} from "@/components/ButtonConvert/ButtonConvert";


// Index page component
export default function Index() {
    const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
    const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);
    const [currentBackground, setCurrentBackground] = useState();
    const oppositUnit = getOppositUnit(currentUnit);

    // Change background image
    useEffect(() => {
        const temperatureAsFloat = Number.parseFloat(inputValue);
        if(!isNaN(temperatureAsFloat)) {
            const isColdBackground = isIceTemperature(inputValue, currentUnit)
            setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
        }
    }, [inputValue]);

    // check format temperature
    function getConvertedTemperature() {
        const valueAsFloat = Number.parseFloat(inputValue);
        return isNaN(valueAsFloat)
            ? ""
            : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1);
    }

    return (
    <ImageBackground source ={currentBackground} style={s.container}>
        <View style={s.workspace}>
            <TemperatureDisplay
                value={getConvertedTemperature()}
                unit={oppositUnit}
            />
            <InputTemperature
                onChangeText={setInputValue}
                defaultValue={DEFAULT_TEMPERATURE}
                unit={currentUnit}
            />
            <View>
                <ButtonConvert onPress={()=> {
                    setCurrentUnit(oppositUnit);
                }} unit={currentUnit} />
            </View>
        </View>
    </ImageBackground>
  );
}
