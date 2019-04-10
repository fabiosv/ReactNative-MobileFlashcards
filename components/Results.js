import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import {green, red} from '../helpers/colors'

export default function Results (props) {
  const results = {
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
  props.results.forEach((res) => {
    if(res === true) {
      results.correct.value += 1
    } else {
      results.incorrect.value += 1
    }
  })
  console.log(results)
  return(
    <View style={styles.container}>
      <PieChart
        style={{ height: 300 }}
        outerRadius={'70%'}
        innerRadius={10}
        data={[results.correct, results.incorrect]}/>
      <Text style={styles.titleScore}>
        Your score is: {results.correct.value / props.results.length * 100 }%
      </Text>
    </View>
  )
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