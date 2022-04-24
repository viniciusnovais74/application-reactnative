import React, { Component } from 'react'

import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: require('./src/img/biscoito.png'),
      textoFrase: 'A'
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'A sorte é o que faz você se sentir feliz.',
      'A felicidade é o que faz você se sentir feliz.',
      'O Amor é o que transforma você em um ser feliz.',
      'A paz é o que trara a felicidade.',
    ];
  }

  quebraBiscoito(){
    let numeroAleartorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroAleartorio],
      img: require('./src/img/biscoitoAberto.png')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 16
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})
