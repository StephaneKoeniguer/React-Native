import { StyleSheet } from "react-native";


const s = StyleSheet.create({
        container:{
            alignSelf: 'stretch',
            justifyContent: 'center',
        },
        input: {
            backgroundColor: 'white',
            borderRadius:20,
            height: 50,
            paddingLeft: 25

        },
        unit: {
            position: 'absolute',
            alignSelf: 'flex-end',
            fontSize: 30,
            paddingRight: 25
        }
})

export { s };