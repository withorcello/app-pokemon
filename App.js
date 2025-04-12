import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import Card from './components/Card'

const Stack = createNativeStackNavigator();

export default function App() {
  const [itens, setItens] = useState([]);

  async function buscar() {
    try {
      const pokemon_aux = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await pokemon_aux.json();
      setItens(data);
    } catch (error) {
      console.error('Erro ao buscar pokemon: ', error);
    }
  }

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
        {/* <Text>Pokedex</Text>
        {itens.map((item, index) => <Card key={index} item={item} />)}
        <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
