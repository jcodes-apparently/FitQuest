import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";


export default function onboarding ({navigation, route}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
        <ImageBackground 
      style= {{width: 200, height: 100, marginTop: 10, alignSelf: 'center'}}
      source={require('@/assets/images/FitQuestHeader-removebg-preview.png')} />
        </View>
        <View style={styles.chBg} />
        <View style={styles.textBox}>
        <TextInput 
        style={styles.textInput} 
        placeholder="ENTER NAME"
        placeholderTextColor={'#4d4d4d'}
        keyboardType='default'
        />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f3ee',
    flex: 5,
  },
  chBg: {
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    backgroundColor: '#ebddcd',
    flex: 1,
    width: 300,
    alignSelf: 'center',
  },
  textInput: {
    width: 250,
    alignSelf: 'center',
    backgroundColor: '#c6c6c6',
    marginTop: 100,
  },
  textBox: {
    flex: 0.5,
    backgroundColor: '#fdf9f1',
    height: 200,
    width: 300,
    alignSelf: 'center',
  }
})