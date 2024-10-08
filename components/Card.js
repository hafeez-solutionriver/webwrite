import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ 
  icon, 
  title, 
  subtitle, 
  rightText, 
  height, 
  width, 
  layout = 'sideBySide',  
  titleFontSize = 36,     
  subtitleFontSize = 14   
}) => {
  return (
    <View style={styles.cardContainer}>
    
      <View style={styles.leftSection}>
        <Image source={icon} style={{ marginRight: 10, height: height, width: width }} />
        <View style={[styles.textContainer, layout === 'row' ? styles.columnLayout : styles.rowLayout]}>
          <Text style={[styles.title, { fontSize: titleFontSize }]}>{title}</Text>
          <Text style={[styles.subtitle, { fontSize: subtitleFontSize,top: layout === 'row'?0:10,marginLeft:layout === 'row'?0:2,color:layout==='row'?'#99A69D':'#0D2114'}]}>{subtitle}</Text>
        </View>
      </View>

     
      <View style={styles.rightSection}>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  rowLayout: {
    flexDirection: 'row',  
    alignItems: 'center',
  },
  columnLayout: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    marginTop: 4,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightText: {
    fontSize: 14,
    color: '#99A69D',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Card;
