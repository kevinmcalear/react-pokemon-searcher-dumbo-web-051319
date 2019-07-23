import React from 'react'
import PokemonCollection from './PokemonCollection'
import MyTeamCollection from './MyTeamCollection'
import PokemonForm from './PokemonForm'


class PokemonIndex extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    myTeam: []
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleAddPokemonToTeam = (pokemon) => {
    this.setState({myTeam: [...this.state.myTeam, pokemon]})
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then((pokeData) => {
        this.setState({ pokemon: pokeData })
      })
  }

  // getFilteredPokemon = () => {
  //   return this.state.pokemon.filter(pokemaan => pokemaan.name.includes(this.state.searchTerm))
  // }

  handleNewPokemonSubmit = (newPokemon) => {

    const pokemon = {
      name: newPokemon.name,
      stats: [
        {
          value: newPokemon.hp,
          name: "hp"
        }
      ],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }


    console.log(newPokemon)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then(ourNewPokemon => {
      this.setState({pokemon: [...this.state.pokemon, ourNewPokemon]})
    })

  }

  render() {
    const filteredPokemon = this.state.pokemon
      .filter(pokemaan => pokemaan.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input value={this.state.searchTerm} onChange={this.handleChange} type="search" />
        <br />
        <br />
        <br />
        <MyTeamCollection pokemon={this.state.myTeam}/>
        <br />
        <hr />
        <br />
        <PokemonCollection
          onAddPokemonToTeam={this.handleAddPokemonToTeam}
          pokemon={filteredPokemon}/>
        <br />
        <PokemonForm onNewPokemonSubmit={this.handleNewPokemonSubmit}/>
      </div>
    )
  }
}

export default PokemonIndex
