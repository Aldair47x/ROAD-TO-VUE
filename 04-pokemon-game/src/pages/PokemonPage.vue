<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemón?</h1>
  
    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon">
    </pokemon-picture>
  
    <pokemon-options :pokemons="pokemonArray" @selection="checkAnswer">
    </pokemon-options>
  </div>

  <div v-if="showAnswer">
    <h2 class="fade-in">{{ message }}</h2>
    <button @click="newGame">Jugar de nuevo</button>
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/pokemonOptions'
export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * this.pokemonArray.length);
      this.pokemon = this.pokemonArray[rndInt];
    },
    checkAnswer( pokemonId ) {
      this.showAnswer = true;
      if(pokemonId === this.pokemon.id){
        this.showPokemon = true;
        this.message = '¡Correcto!, ¡Eres un maestro pokemón!';
      } else {
        this.showPokemon = false;
        this.message = '¡Incorrecto!, ¡Sigue intentando!';
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  }

}
</script>