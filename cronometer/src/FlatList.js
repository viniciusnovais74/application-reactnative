import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

class FlatListJs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { nome: 'Matheus', idade: 80, email: "mateus@m.com" },
        { nome: 'Joao', idade: 80, email: "Joao@m.com" },
        { nome: 'AAAA', idade: 80, email: "AAA@m.com" },
        { nome: 'Matheus', idade: 80, email: "mateus@m.com" },
        { nome: 'Matheus', idade: 80, email: "mateus@m.com" },
        { nome: 'Matheus', idade: 80, email: "mateus@m.com" },
      ]
    }
  }
  render() {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.feed}
              renderItem={({ item }) => <Text >{item.nome}</Text>}
            />
          </View>
        )
      }
    }