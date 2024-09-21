import React from "react";
import { View, Text, StyleSheet, Image,TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import SliderComponent from "../components/SliderComponent";

export default function MealScreen() {
  
  const dataArray = [
    [40, 40, 20],  // for 'Su'
    [35, 55, 10],  // for 'Mo'
    [30, 20, 50],  // for 'Tu'
    [30, 30, 40],  // for 'We'
    [60, 10, 30],  // for 'Th'
    [30, 50, 20],  // for 'Fr'
    [30, 40, 30]   // for 'Sa'
  ];

 
  const textArray = [
    ['F', 'C', 'P'],
    ['F', 'C', 'P'],
    ['F', 'C', 'P'],
    ['F', 'C', 'P'],
    ['F', 'C', 'P'],
    ['F', 'C', 'P'],
    ['F', 'C', 'P']
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    
      <View style={styles.header}>
        <Image
          source={require('../assets/cross.png')}
          style={{ height: 15, width: 15 }}
        />

       
        <View style={styles.centerSection}>
          <Text style={styles.title}>Calorie planner.</Text>
        </View>

       
        <View style={styles.rightSection}>
          <Image
            source={require('../assets/save.png')}
          />
        </View>
      </View>

    
      <View style={{ padding: moderateScale(5), bottom: moderateScale(10) }}>
        <LinearGradient
          colors={['#ffe9fc', '#eff4fc']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientRow}
        >
          
          <Image
            source={require('../assets/left.png')}
            style={styles.arrowIcon}
          />

        
          <View style={styles.dateSection}>
            <Image
              source={require('../assets/calendar.png')}
              style={styles.calendarIcon}
            />
            <Text style={styles.dateText}>Today, June 13.</Text>
          </View>

         
          <Image
            source={require('../assets/right.png')}
            style={styles.arrowIcon}
          />
        </LinearGradient>
      </View>

    
      <View style={styles.grid}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
          <View key={index} style={styles.gridColumn}>
            <Text style={styles.dayText}>{day}</Text>

           
            <View style={styles.barsContainer}>
              <View
                style={[
                  styles.verticalBar,
                  { height: `${dataArray[index][0] * 2.5}%`, backgroundColor: '#A020F0' }
                ]}
              >
                <Text style={styles.barText}>{dataArray[index][0]}</Text>
                <Text style={styles.barText}>{textArray[index][0]}</Text>
              </View>
              <View
                style={[
                  styles.verticalBar,
                  { height: `${dataArray[index][1] * 2.5}%`, backgroundColor: '#2A0B37' }
                ]}
              >
                <Text style={styles.barText}>{dataArray[index][1]}</Text>
                <Text style={styles.barText}>{textArray[index][1]}</Text>
              </View>
              <LinearGradient
                colors={['#4F94F0', '#A020F0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.verticalBar, { height: `${dataArray[index][2] * 2.5}%` }]}
              >
                <Text style={styles.barText}>{dataArray[index][2]}</Text>
                <Text style={styles.barText}>{textArray[index][2]}</Text>
              </LinearGradient>
            </View>

           
            <View
              style={[
                styles.lockBox,
                index === 6 && styles.lockBoxActive // Apply different style for last lock icon
              ]}
            >
              <Image
                source={
                  index === 6
                    ? require('../assets/activelock.png') // Use active lock icon for 'Sa'
                    : require('../assets/lock.png')            // Use regular lock icon for other days
                }
                style={styles.lockIcon}
              />
            </View>
          </View>
        ))}
      </View>

<View style={styles.body}>

  <View style={styles.card}>
  
    <View style={styles.row}>
      <Text style={styles.label}>Calories</Text>
      <TextInput style={styles.input}  />
    </View>

   
<View style={styles.row}>

  <SliderComponent 
    value={50} 
    min={0} 
    max={100} 
    onValueChange={()=>{}} 
  />
</View>

    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>100</Text>
        <Text style={styles.subscript}>cal</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>2.5</Text>
        <Text style={styles.subscript}>kcal</Text>
      </View>
    </View>
  </View>
</View>
</View>

  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: moderateScale(10),
    backgroundColor: '#F6F9F7',
    height: verticalScale(50),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: 15
  },
  centerSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: scale(20),
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    left: 30
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    padding: verticalScale(10),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(8),
    height: scale(50),
  },
  arrowIcon: {
    height: 20,
    width: 20,
    tintColor: '#2A0B37'
  },
  dateSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    height: 20,
    width: 20,
    marginRight: moderateScale(10),
    tintColor: '#BDBDBD'
  },
  dateText: {
    fontSize: 18,
    color: '#2A0B37',
    fontFamily: 'Ubuntu-Bold',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(120),
    padding: 10
  },
  gridColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(5),
  },
  dayText: {
    fontSize: scale(14),
    fontFamily: 'Ubuntu-Bold',
    marginBottom: verticalScale(5),
  },
  barsContainer: {
    justifyContent: 'flex-end', // Align bars to the bottom
    height: scale(100), // Total height of the bars container
    width: scale(30), // Adjust the width of the container to fit the bars
  },
  verticalBar: {
    width: '90%', // Full width for each bar
    borderRadius: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 2,
  },
  barText: {
    fontSize: moderateScale(8),
    color: '#FFFFFF',
    fontFamily: 'Ubuntu-Bold',
  },
  lockBox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white' // Default light grey background
  },
  lockBoxActive: {
    backgroundColor: '#e8e7ea' // Dark grey background for 'Sa'
  },
  lockIcon: {
    width: 15,
    height: 15,
    tintColor: '#2A0B37',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    width: '95%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: scale(20),
    fontFamily: 'Ubuntu-Bold',
    color: '#2A0B37',
  },
  input: {
    height: verticalScale(30),
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(6),
    flex: 1,
    marginLeft: moderateScale(10)
  },
  text:{
    fontSize:moderateScale(20),
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
  },
  subscript:{
    fontSize:moderateScale(14),
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    top:8,
    marginLeft:4
  },
  textContainer:{
    flexDirection:'row',

  }
});
