
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 }
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ seconds: this.state.seconds + 1}),
      1000,
    );
  }

  render() {
    return <Rainbow numStripes={this.state.seconds} />;
  }
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

class Rainbow extends Component {
  constructor(props) {
    super(props);
    this.state = { stripeColors: [] }
  }

  componentWillMount() {
    this.addStripeColor(this.props.numStripes);
  }

  componentWillReceiveProps(nextProps) {
    this.addStripeColor(nextProps.numStripes);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.numStripes < colors.length
  }

  addStripeColor(colorIndex) {
    const stripeColors = [ ...this.state.stripeColors ]; // make a copy
    stripeColors.push(colors[colorIndex % colors.length]);

    this.setState({ stripeColors });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.stripeColors.map(color => (
          <Stripe color={color} />
        ))}
      </View>
    )
  }
}

class Stripe extends Component {
  render() {
    return (
      <View
        style={[
          styles.stripe,
          {backgroundColor: this.props.color}
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  stripe: {
    width: 150,
    height: 40,
  },
});
    
