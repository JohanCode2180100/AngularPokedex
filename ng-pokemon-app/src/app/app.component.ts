import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonsList:Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[2]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
