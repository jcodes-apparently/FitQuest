import React, {useState} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const StatsBar = ({
    navigation=1,
    percentage=100,
    height=10,
    backgroundColor='white',
    completedColor='#efbeb8',
}) => {
  const [getPercentage, setPercentage] = useState(100);
  const [getheight, setHeight] = useState(20);
  const [getBackgroundColor, setBackgroundColor] = useState('#b1d8b7');
  const [getCompletedColor, setCompletedColor] = useState('#9ec6a4');
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '80%',
            height: getheight,
            marginVertical: 0,
            borderRadius: 10,
            backgroundColor: getBackgroundColor,
            borderColor: getCompletedColor,
            borderWidth: 1,
          }}>
            <Text style={styles.barText}>
                exp
            </Text>
          </View>
         <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 0,
            borderRadius: 10,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20,
          }}
        />
        <View style={{
            width: getPercentage ? getPercentage : 0,
        height: getheight,
        bottom: 10}}>
        </View>
      </View>
    </View>
  );
};
export default StatsBar;

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