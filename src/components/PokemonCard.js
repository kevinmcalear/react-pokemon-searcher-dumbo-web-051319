import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFlipped: false
  }

  handleClick = () => {
    this.setState({ cardFlipped: !this.state.cardFlipped })
  }

  handleFavoriteClick = () => {
    this.props.onAddPokemonToTeam(this.props)
  }
  render() {
    const hpObj = this.props.stats.find(stat => stat.name === 'hp')
    const sprite = this.state.cardFlipped ? this.props.sprites.back : this.props.sprites.front
    return (
      <Card>
      {
        this.props.onAddPokemonToTeam ?
        <div onClick={this.handleFavoriteClick}>🍖</div> :
        null

      }
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={ sprite } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ this.props.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hpObj.value } hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
