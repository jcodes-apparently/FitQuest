import React, {useState} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const HealthBar = ({
  navigation=1,
  percentage=100,
  height=10,
  backgroundColor='white',
  completedColor='#efbeb8',
}) => {
  const [getPercentage, setPercentage] = useState(100);
  const [getheight, setHeight] = useState(20);
  const [getBackgroundColor, setBackgroundColor] = useState('#ffcfcf');
  const [getCompletedColor, setCompletedColor] = useState('#efbeb8');
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '80%',
            height: getheight,
            marginVertical: 10,
            borderRadius: 10,
            backgroundColor: getBackgroundColor,
            borderColor: getCompletedColor,
            borderWidth: 1,
          }}>
          <Text style={styles.barText}>
              hp
          </Text>
      </View>
         <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 20,
            borderRadius: 10,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:10,
          }}/>
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            bottom:10,
          }}>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
    barText: {
        fontSize: 10,
        textAlign: 'right',
        color: '#4d4d4d',
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingRight: 10,
        paddingTop: 2,
    }
})

export default HealthBar;