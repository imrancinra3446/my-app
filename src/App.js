import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

// function App() {
//   return (
//     <div className="App">
//       <Book bookName="Tangled" writer="Em Wolf"/>
//       <Book bookName="So Much to Learn" writer="Jessie L. Star"/>
//       <Book bookName="Rush Me" writer="Allison Parr"/>
//     </div>
//   );
// }

class App extends Component {
  state = {
    books: [
      { bookName: "Tangled", writer: "Em Wolf" },
      { bookName: "So Much to Learn", writer: "Jessie L. Star" },
      { bookName: "Rush Me", writer: "Allison Parr" }
    ],
    count: 0
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
    });

  }

  changeBookState(newBook, newWriter) {

    this.setState({
      books: [
        { bookName: newBook, writer: newWriter },
        { bookName: "Book 2", writer: "Riyad" },
        { bookName: "Book 3", writer: "Sagor" }
      ]
    })
  }
  changeBookInput = (e) => {

    this.setState({
      books: [
        { bookName: e.target.value, writer: "Rakib" },
        { bookName: "Book 2", writer: "Riyad" },
        { bookName: "Book 3", writer: "Sagor" }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.increaseCount}>+</button>
        <h4>{this.state.count}</h4>
        <button onClick={this.decreaseCount}>-</button> <br />
        <button onClick={this.changeBookState.bind(this, "Basanta Eshece", "Humayun Ahmed")}>Change State</button>
        {/* The Easier Way: <button onClick={() => this.changeBookState("Basanta Eshece", "Humayun Ahmed")}>Change State</button>*/}
        <br />
        

        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} change={this.changeBookInput}/>
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer}/>
      </div>
    )
  }

}


export default App;
