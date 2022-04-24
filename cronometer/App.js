import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppList from './src/App.js';
import FlatListJS from './src/FlatList'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }
  vai() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null;

    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
    }
  }

  limpar() {
    if(this.timer != null){

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnText} onPress={this.vai}>Vai</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
          <View>
            <Text>Ultimo tempo:{this.state.ultimo}</Text>
          </View>
        </View>
        <AppList/>
        <FlatListJS/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'

  },
  timer: {
    marginTop: -160,
    color: "#FFF",
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef,'
  }
});
export default App;