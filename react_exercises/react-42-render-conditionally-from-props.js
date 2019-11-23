class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <h1>
          {
            this.props.fiftyFifty
          }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter+1 // change code here
      });
    }
    render() {
      const expression = Math.random() > .5; // change code here
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          { /* change code below this line */ }
      {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }
          { /* change code above this line */ }
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };
  

// /learn
// React: Render Conditionally from Props #42/47
// So far, you've seen how to use if/else, &&, null and the ternary operator (condition ? expressionIfTrue : expressionIfFalse) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: props. Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

// In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.

// The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results. They are used to create a simple game where the user presses a button to see if they win or lose.

// First, you'll need a simple expression that randomly returns a different value every time it is run. You can use Math.random(). This method returns a value between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50 odds, use Math.random() >= .5 in your expression. Statistically speaking, this expression will return true 50% of the time, and false the other 50%. On line 30, replace the comment with this expression to complete the variable declaration.

// Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this. Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty. In the Results component, write a ternary expression to render the text "You Win!" or "You Lose!" based on the fiftyFifty prop that's being passed in from GameOfChance. Finally, make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played. This also serves to let the user know the component has actually updated in case they win or lose twice in a row.

// Passed
// The GameOfChance component should exist and render to the page.
// Passed
// GameOfChance should return a single button element.
// GameOfChance should return a single instance of the Results component, which has a prop called fiftyFifty.
// Passed
// GameOfChance state should be initialized with a property of counter set to a value of 1.
// Passed
// When the GameOfChance component is first rendered to the DOM, a p element should be returned with the inner text of Turn: 1.
// Passed
// Each time the button is clicked, the counter state should be incremented by a value of 1, and a single p element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state.
// When the GameOfChance component is first mounted to the DOM and each time the button is clicked thereafter, a single h1 element should be returned that randomly renders either You Win! or You Lose!.