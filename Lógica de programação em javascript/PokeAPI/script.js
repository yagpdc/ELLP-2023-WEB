const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const loader = document.getElementById('loader');
const mainImage = document.getElementById('mainImage');
const baseExp = document.getElementById('baseExp');
const abilities = document.getElementById('abilities');
const type = document.getElementById('type');
const pokeName = document.getElementById('pokeName');

function showLoader() {
  loader.style.display = 'block';
  mainImage.style.display = 'none';
}

function hideLoader() {
  loader.style.display = 'none';
  mainImage.style.display = 'block';
}

function getRandomPokemonId() {
  return Math.floor(Math.random() * 898) + 1;
}

document.getElementById('getPokemonButton').addEventListener('click', async () => {

  const pokemonNameOrId = document.getElementById('pokemonNameOrId').value;
  if (!pokemonNameOrId) {
    return;
  }

  try {
    showLoader();
    const response = 
    await fetch(`${apiUrl}${pokemonNameOrId.toLowerCase()}`);
    if (!response.ok) {
      hideLoader();
      throw new Error('Pokemon not found');
    }
    const data = await response.json();
    const spriteUrl = data.sprites.front_default;
    const baseExperience = data.base_experience;
    const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
    const pokemonType = data.types.map(type => type.type.name);
    const name = data.name;
    pokeName.innerHTML = name;
    type.innerHTML = `Type: ${pokemonType.join(', ')}`;
    abilities.innerHTML = `Abilities: ${pokemonAbilities.join(', ')}`;
    baseExp.innerHTML = `Base Experience: ${baseExperience}`;
    
    const image = new Image();
    image.src = spriteUrl;
    
    image.addEventListener('load', () => {
      mainImage.src = spriteUrl;
      hideLoader();
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Pokemon not found or an error occurred.');
  }
  
});

document.getElementById('getRandomPokemonId').addEventListener('click', async () => {
    const randomPokemonId = getRandomPokemonId(); // Get a random Pokémon ID
    const pokemonNameOrIdInput = document.getElementById('pokemonNameOrId');
    pokemonNameOrIdInput.value = randomPokemonId; 
    const getPokemonButton = document.getElementById('getPokemonButton');
    getPokemonButton.click();
  });
  