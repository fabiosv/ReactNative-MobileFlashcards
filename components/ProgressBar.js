import React from 'react';
import { Dimensions } from 'react-native'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { green } from "../helpers/colors"

export default function ProgressBar (props) {
  const barWidth = Dimensions.get('screen').width - 30;
  return(
    <ProgressBarAnimated
      width={barWidth}
      value={props.progress}
      backgroundColorOnComplete={green}
      onComplete={() => {
        props.onComplete()
      }}
    />
  )
}
