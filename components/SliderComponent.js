import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function SliderComponent({ value, onValueChange, min, max }) {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#2A0B37"  
        
        thumbTintColor='#2A0B37'
        renderThumbComponent={() => (
          <View style={styles.customThumb}>
            <View style={styles.whiteRectangle}>
              <View style={styles.circleInside} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(40),
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
    height: verticalScale(8), 
  },
  customThumb: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteRectangle: {
    width: scale(40),  
    height: scale(25),  
    backgroundColor: 'white',  
    borderRadius: moderateScale(4), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInside: {
    width: scale(15),
    height: scale(15),
    backgroundColor: '#2A0B37',   
    borderRadius: moderateScale(7.5),
  },
});
