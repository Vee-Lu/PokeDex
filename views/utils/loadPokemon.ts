// src/utils/loadPokemon.ts
import type { PokemonProps, Type } from '../components/Pokedex/Pokemon';

export async function loadPokemon(pokemon: string | number): Promise<PokemonProps> {
  const [res1, res2] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`),
  ]);

  const pokemonData = await res1.json();
  const speciesData = await res2.json();

  //Filter out flavor texts that aren't english
  const flavorTexts = speciesData.flavor_text_entries.filter(
    (text: 
        { 
            language: { name: string } 
        }) => text.language.name === "en"
  );

  //Filter out species genus that aren't english
  const species = speciesData.genera.find(
    (specie:
            {
                language: { name: string } 
            }
    ) => specie.language.name === "en"
  );

  //Get the types for the Pokemon
  const types: Type[] = []
  for (let i = 0; i < pokemonData.types.length; i++) {
    const name = pokemonData.types[i].type.name;

    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
    const data = await response.json();
    const image = data.sprites['generation-viii']['brilliant-diamond-and-shining-pearl'].name_icon;
    let type: Type = {
        name: name,
        image: image
    }
    types.push(type);
  }

  return {
    number: speciesData.pokedex_numbers[0]?.entry_number ?? 0,
    sprite: pokemonData.sprites.front_default,
    audio: pokemonData.cries.latest,

    species: species.genus,
    types: types,
    height: pokemonData.height,
    weight: pokemonData.weight,

    description: flavorTexts[0]?.flavor_text ?? "No description available.",
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
