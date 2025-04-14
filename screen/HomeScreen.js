import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        const pokemonList = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemons(pokemonList);
        setFilteredPokemons(pokemonList);
      } catch (error) {
        console.error('Erro ao buscar pokémons: ', error);
      }
    }

    fetchPokemons();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémons</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite o nome do Pokémon"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredPokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card item={item} />}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});