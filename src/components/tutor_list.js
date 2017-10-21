import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'

import React, { Component } from 'react'

const instructions = 'Stay tuned for the next commit'

export default class TutorList extends Component {
  constructor(props) {
    super(props)
    const { tutor } = this.props
    this.state = {
      tutor: {
        name: '',
        age: '',
        description: '',
        topics: '',
        mail: '',
        phone: '',
      },
    }
  }

  componentWillMount() {
    const { initTutor } = this.props
    initTutor(123)
  }

  render() {
    const { tutor } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to NNERF!</Text>
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, name: text } })
          }}
          value={tutor.name}
        />
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, description: text } })
          }}
          value={tutor.description}
        />
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, age: text } })
          }}
          value={tutor.age}
        />
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, topics: text } })
          }}
          value={tutor.topics}
        />
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, mail: text } })
          }}
          value={tutor.mail}
        />
        <TextInput
          style={{
            height: 40,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => {
            this.setState({ tutor: { ...this.state.tutor, phone: text } })
          }}
          value={tutor.phone}
        />
        <Button
          onPress={() => {
            console.log('lol')
          }}
          title="Learn More"
          color="#841584"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('TutorList', () => TutorList)
