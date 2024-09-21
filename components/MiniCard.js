import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MiniCard = ({ icon, title, subtitle,height,width }) => {
  return (
    <View style={styles.miniCardContainer}>
    
      <Image source={icon} style={{marginBottom:10,height:height,width:width}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miniCardContainer: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    height:150,
    width:150,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,         
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    width: '45%',            
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',    
  },
  title: {
    fontSize: 18,            
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    textAlign: 'center',
    marginTop:5
  },
  subtitle: {
    fontSize: 12,           
    fontFamily: 'Ubuntu-Regular',
    color: '#99A69D',
    textAlign: 'center',
    marginTop:5
  },
});

export default MiniCard;
