import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item?.image }} style={styles.image} />
      <Text style={styles.name}>{item?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: 150,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  }
});