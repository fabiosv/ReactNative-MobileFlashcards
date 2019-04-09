import React from 'react';
import {Dimensions} from 'react-native'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default function ProgressBar (props) {
  const barWidth = Dimensions.get('screen').width - 30;
  console.log(props.progress);
  return(
    <ProgressBarAnimated
      width={barWidth}
      value={props.progress}
      backgroundColorOnComplete="#6CC644"
    />
  )
}
