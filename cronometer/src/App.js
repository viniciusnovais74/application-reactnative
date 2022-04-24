import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView scrollEnabled>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box4}></View>
          <View style={styles.box4}></View>
          <View style={styles.box4}></View>
          <View style={styles.box5}></View>
          <View style={styles.box6}></View>
        </ScrollView>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'red',
    height: 200,
    width: 200
  }, box2: {
    backgroundColor: 'green',
    height: 200,
    width: 200
  }, box3: {
    backgroundColor: 'orange',
    height: 200,
    width: 200
  }, box4: {
    backgroundColor: 'yellow',
    height: 200,
    width: 200
  },box5: {
    backgroundColor: 'darkblue',
    height: 200,
    width: 200
  },box6: {
    backgroundColor: 'lightblue',
    height: 200,
    width: 200
  }
})
export default App