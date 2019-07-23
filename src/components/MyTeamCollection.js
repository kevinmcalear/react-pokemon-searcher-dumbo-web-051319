import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class MyTeamCollection extends React.Component {

  displayPokemonCards = () => {
    return this.props.pokemon.map(pokemaan => {
      return <PokemonCard key={pokemaan.id} onAddPokemonToTeam={null} {...pokemaan} />
    })
  }

  render() {

    return (
      <Card.Group itemsPerRow={6}>
        <h1>💪 Yo, this is my team 💪</h1>
        { this.displayPokemonCards() }
      </Card.Group>
    )
  }
}

export default MyTeamCollection
