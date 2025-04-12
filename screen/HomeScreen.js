import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Tela inicial</Text>

            <Button
                title="Ir para detalhes"
                onPress={() => { navigation.navigate('Detalhes') }}
            >
            </Button>

            <Button
                title="Ir para sobre"
                onPress={() => { navigation.navigate('Sobre') }}
            >
            </Button>
        </View>
    )
}


