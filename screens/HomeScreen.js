import React from "react";
import { View, Text,ScrollView, Image, StyleSheet} from 'react-native';
import Card from '../components/Card'
import MiniCard from "../components/MiniCard";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function HomeScreen() {

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Image
            source={require('../assets/dp.png')} 
            style={styles.profileImage}
          />
          <View style={styles.textSection}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.subtitle}>View Body Transformation</Text>
          </View>
        </View>

        <View style={styles.rightSection}>
          <Image
            source={require('../assets/star.png')} 
            style={styles.icon}
          />
          <View style={styles.circle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
        </View>
      </View>

      <View style={styles.block1}>        
        <View style={styles.leftBlock}>
          <Image
            source={require('../assets/left.png')} 
            style={styles.arrow}
          />
          <Image
            source={require('../assets/calendar.png')} 
            style={styles.calendarSection}
          />
          <Text style={styles.arrowText}>Apr 28, 2023.</Text>
          <Image
            source={require('../assets/right.png')} 
            style={styles.arrow}
          />
        </View>
        <View style={styles.rightBlock}>
        <View style={styles.greenCircle} ><Text style={styles.greenCircleText}>Daily</Text></View>
<Text style={styles.emptyCircleText}>Weekly</Text>
         </View>
      </View>
      <View style={{alignItems:'center',marginTop:10}}>
      <Text style={styles.nutritionText}>Nutrition</Text>
      </View>
      <Card
          icon={require('../assets/mealactive.png')}  
          title="2.5"
          subtitle="Kcal"
          rightText="of 3 Kcal"
          height={49}
          width={49}
         />
       <Card
          icon={require('../assets/glass.png')}   
          title="5"
          subtitle="Glass"
          rightText="of 7 Glass"
          height={49}
          width={37}
        />
        <View style={{alignItems:'center',marginTop:10}}>
      <Text style={styles.nutritionText}>Activity</Text>
     
      </View>
      <Card
          icon={require('../assets/foot.png')}   
          title="709"
          subtitle="Steps"
          rightText="of ≥2500"
          height={49}
          width={30}
          
        />
      <View style={{alignItems:'center',marginTop:10}}>
      <Text style={styles.nutritionText}>Progress</Text>
      </View>
      <View style={{flexDirection: 'row',  
    alignItems: 'flex-start'}}>
      <MiniCard 
      icon={require('../assets/notes.png')}
      title="Notes"
      subtitle="Notes to your progress"
      height={44}
      width={44}/>
       <MiniCard 
      icon={require('../assets/ketone.png')}
      title="ketone levels"
      subtitle="5 (0.5) ±"
      height={33}
      width={77}/>
      </View>
      <Card
      title="Weight"
      subtitle="Re-measure"
      rightText="75 of 70 Kg"
      icon={require('../assets/weight.png')}
      layout="row"
      titleFontSize={16}
      subtitleFontSize={12}
      width={49}
      height={49}/>
      <View style={{               
    justifyContent: 'center', 
    alignItems: 'center', }}>
      <Image style={styles.centerform} source={require('../assets/centerform.png')}></Image>
      <Text style={styles.quizText}>Play Keto Quiz</Text>
      <Text style={styles.bottomtext}>Got to know the basics → </Text>
      </View>
       </ScrollView>
    
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(5),
      backgroundColor: '#F6F9F7'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: moderateScale(20),
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: scale(61),
      height: verticalScale(56),
      borderRadius: moderateScale(25),
      marginRight: moderateScale(10),
    },
    textSection: {
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },
    subtitle: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: moderateScale(12),
      color: '#99A69D',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: scale(34),
      height: verticalScale(33),
      marginRight: moderateScale(10),
    },
    circle: {
      width: scale(51),
      height: verticalScale(51),
      borderRadius: moderateScale(25),
      backgroundColor: '#E4EDE7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    questionMark: {
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      color: '#99A69D',
    },
  
    
    block1: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    leftBlock: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    arrow: {
      padding: moderateScale(10),
      height: verticalScale(17),
      width: scale(17),
    },
    arrowText: {
      fontSize: moderateScale(12),
      fontFamily: 'Ubuntu-Bold',
      color: '#50C878',
    },
    calendarSection: {
      height: verticalScale(21),
      width: scale(21),
      marginHorizontal: moderateScale(10),
    },
  
    // Right section: Two circular views
    rightBlock: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: moderateScale(40),
      borderColor: 'black',
      borderStyle: 'solid',
      padding: moderateScale(2),
      backgroundColor: '#F6F9F7',
      elevation: moderateScale(5),
      shadowRadius:moderateScale(5),
    },
    greenCircle: {
      width: scale(63),
      height: verticalScale(28),
      borderRadius: moderateScale(30),
      alignContent: "center",
      justifyContent: 'center',
      backgroundColor: '#50C878', // Green background
      marginRight: moderateScale(10),
    },
    greenCircleText: {
      paddingHorizontal: moderateScale(10),
      fontFamily: 'Ubuntu-Bold',
      fontSize: moderateScale(16),
      color: 'white',
    },
    emptyCircleText: {
      paddingHorizontal: moderateScale(10),
      fontFamily: 'Ubuntu-Bold',
      fontSize: moderateScale(16),
      color: '#99A69D',
    },
    
    nutritionText: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: moderateScale(24),
      color: 'black',
    },
    centerform: {
      width: scale(223),
      height: verticalScale(187),
      marginTop:moderateScale(12)
    },
    quizText: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: moderateScale(22),
      color: '#0D2114',
      bottom: moderateScale(25),
    },
    bottomtext: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: moderateScale(14),
      color: '#50C878',
      padding: moderateScale(10),
      bottom: moderateScale(25),
      marginLeft: moderateScale(15),
    }
 
});
