import React, {Component} from 'react';

class Game extends Component {
  state = {clicks: 0}
  render() {
    return (
      console.log(this.state)
    )
  }
}

export default Game;