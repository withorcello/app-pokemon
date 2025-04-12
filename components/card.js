import { StyleSheet, Text, View } from 'react-native';

export default function App({ item }) {
  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
      Teste
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f567u4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
