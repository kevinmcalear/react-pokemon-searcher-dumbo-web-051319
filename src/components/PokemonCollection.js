import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayPokemonCards = () => {
    return this.props.pokemon.map(pokemaan => {
      return <PokemonCard key={pokemaan.id} onAddPokemonToTeam={this.props.onAddPokemonToTeam} {...pokemaan} />
    })
  }

  render() {

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        { this.displayPokemonCards() }
      </Card.Group>
    )
  }
}

export default PokemonCollection
