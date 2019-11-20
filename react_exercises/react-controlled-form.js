class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
      event.preventDefault();
      this.setState({
        submit: this.state.input
      })
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
      <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
  
      />
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
          <h1>{this.state.submit}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  

// React: Create a Controlled Form 29
// The last challenge showed that React can control the internal state for certain elements like input and textarea, which makes them controlled components. This applies to other form elements as well, including the regular HTML form element.

// The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.

// We've added a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. You should then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.

// Note:  You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.

// Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.

// Passed
// MyForm should return a div element which contains a form and an h1 tag. The form should include an input and a button.
// Passed
// The state of MyForm should initialize with input and submit properties, both set to empty strings.
// Typing in the input element should update the input property of the component's state.
// Submitting the form should run handleSubmit which should set the submit property in state equal to the current input.
// The h1 header should render the value of the submit field from the component's state.
// 262524232221201918171615141312111098765
// line */ }
//             <h1 value={this.state.submit} onChange={this.handleSubmit}></h1>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// // running tests
// Typing in the input element should update the input property of the component's state.
// Submitting the form should run handleSubmit which should set the submit property in state equal to the current input.
// The h1 header should render the value of the submit field from the component's state.
// // tests completed
