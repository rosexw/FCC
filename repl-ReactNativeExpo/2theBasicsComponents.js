import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class MyContent extends Component {
  state = { content: 'shiggidy' }

  onPressButton = () => {
    this.setState({
      content: this.state.content === 'shiggidy' ? 'diggidy' : 'shiggidy'
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'powderblue' }}>
        <Text style = {{ fontWeight: 'bold', fontSize: 50 }}>{this.state.content}</Text>
        <Button title="press me" onPress={this.onPressButton} />
      </View>
    );
  }
}
    
