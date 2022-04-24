import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  areaPessoa: {
    backgroundColor: '#222',
    height: 150,
    marginBottom: 25,
    padding: 15
  },
  textoPessoa: {
    color: "#FFF"
  }
})
class Pessoas extends Component {

  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>ID: {this.props.data.id}</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>

      </View>
    )
  }
}
export default Pessoas