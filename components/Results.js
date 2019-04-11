import React, { Component } from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import {green, red} from '../helpers/colors'

export default class Results extends Component {
  state = {
    opacity: new Animated.Value(0),
    data: {
      correct: {
        key: 1,
        value: 0,
        svg: { fill: green },
        arc: { outerRadius: '110%', cornerRadius: 10,  }
      },
      incorrect: {
        key: 2,
        value: 0,
        svg: { fill: red },
      },
    }
  }

  animated = () => {
    const { opacity } = this.state
    Animated.timing(opacity, {toValue: 1, duration: 2000})
      .start()
  }

  componentDidMount() {
    const { data } = this.state

    this.props.results.forEach((res) => {
      if(res === true) {
        data.correct.value += 1
      } else {
        data.incorrect.value += 1
      }
    })
    this.setState({data})
    console.log(data)

    this.animated()
  }
  render(){
    const { data, opacity } = this.state;
    const { results } = this.props;
    return(
      <Animated.View style={[styles.container, {opacity}]}>
        <PieChart
          style={{ height: 300 }}
          outerRadius={'70%'}
          innerRadius={10}
          data={[data.correct, data.incorrect]}/>
        <Text style={styles.titleScore}>
          Your score is: {(data.correct.value / results.length * 100).toFixed(0) }%
        </Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  },
  titleScore: {
    fontSize: 30,
    color: 'gray',
    textAlign: 'center'
  }
})