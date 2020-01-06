import React from 'react';
import './Game.css';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      scoreX: 0,
      scoreO: 0,
      choose1: 'X',
      choose2: 'O'
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  chooseX = () => {
    this.setState({
      choose1: 'X',
      choose2: 'O'
    })
  }
  chooseO = () => {
    this.setState({
      choose1: 'O',
      choose2: 'X'
    })
  }
  isWinner = () => {

    let s = (this.state.count % 2 === 0) ? this.state.choose1 : this.state.choose2;
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
        alert(s + ' win');
        if (s === 'X') {
          this.setState({ scoreX: this.state.scoreX + 1 })
        } else {
          this.setState({ scoreO: this.state.scoreO + 1 })
        }
        //обнуление
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) })
          this.setState({ count: 0 })
        }, 2200)
      }
    }
  }
  newGame = () => {
    this.setState({ squares: Array(9).fill(null) })
    this.setState({ count: 0 })
  }

  clickHandler = (e) => {
    // data номер квадрата по которому кликнули
    let data = e.target.getAttribute('data');
    let curentSquares = this.state.squares;
    if (curentSquares[data] === null) {
      curentSquares[data] = (this.state.count % 2 === 0) ? this.state.choose1 : this.state.choose2;
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: curentSquares });
    }
    else {
      alert('Занято!');
    }
    console.log(this.state.count)

    this.isWinner();

    if (this.state.count >= 8) {
      alert('НИчья');
      setTimeout(() => {
        this.setState({ squares: Array(9).fill(null) })
        this.setState({ count: 0 })
      }, 2500)
    }
  }
  render() {

    return (
      <div className="container game">
        <div className="tic-tac-toe">
          <div className="ttt-grid" onClick={this.clickHandler} data="0">
            {this.state.squares[0]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="1">
            {this.state.squares[1]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="2">
            {this.state.squares[2]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="3">
            {this.state.squares[3]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="4">
            {this.state.squares[4]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="5">
            {this.state.squares[5]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="6">
            {this.state.squares[6]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="7">
            {this.state.squares[7]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="8">
            {this.state.squares[8]}
          </div>
          <button onClick={this.newGame}>New Game</button>
          <button onClick={this.chooseX}>Играть за X</button>
          <button onClick={this.chooseO}>Играть за O</button>
          <p>Побед крестиков: {this.state.scoreX}</p>
          <p>Побед ноликов: {this.state.scoreO}</p>
        </div>
      </div>
    );
  }


}

export default Game;
