// src/utils/loadPokemon.ts
import type { PokemonProps } from '../components/Pokedex/Pokemon';

export async function loadPokemon(pokemon: string | number): Promise<PokemonProps> {
  const [res1, res2] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`),
  ]);

  const pokemonData = await res1.json();
  const speciesData = await res2.json();

  const flavorTexts = speciesData.flavor_text_entries.filter(
    (text: 
        { 
            language: { name: string } 
        }) => text.language.name === "en"
  );

  return {
    sprite: pokemonData.sprites.front_default,
    audio: pokemonData.cries.latest,
    description: flavorTexts[0]?.flavor_text ?? "No description available.",
    number: speciesData.pokedex_numbers[0]?.entry_number ?? 0,
    stat: {
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      special_attack: pokemonData.stats[3].base_stat,
      special_defense: pokemonData.stats[4].base_stat,
      speed: pokemonData.stats[5].base_stat,
    },
  };
}
