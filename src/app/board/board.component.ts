import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    // init the board with 9 empty square components.
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    // if xIsNext is true the player will return X 
    // otherwise will return O
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index : number) {
    // if there is NOT a square at this index
    if (!this.squares[index]) {
      // removes the null square and change it to the current player (x or o)
      //this.squares.splice(index, 1, this.player);
      this.squares[index] = this.player;
      this.xIsNext = !this.xIsNext;
    }

    console.log(document.activeElement)
    console.log(index)
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    // this is a variable that will contain all possible wins
    // if the user's choices match any of these combinations
    // return true;
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    // loop through the list of correct choices 
    // if there is a situation that satisfies all the criteria
    // return true
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (this.squares[a]
          && this.squares[a] === this.squares[b] 
          && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      } // if
    } //for
    return null;
  } // calculate winner
} // class
