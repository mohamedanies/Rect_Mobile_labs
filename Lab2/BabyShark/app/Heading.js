import React, { Component } from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import Heading from './Heading'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
         keyboardShouldPersistTaps='always'
         style={styles.content}>
          <Heading />
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  }
})

export default Heading