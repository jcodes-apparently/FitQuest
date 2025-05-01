import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function home() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ImageBackground 
      style= {{width: 200, height: 100, marginLeft: 30, marginTop: 10}}
      source={require('@/assets/images/FitQuestHeader.png')} />
    </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Welcome,</Text>
        <Text style={styles.name}> User</Text>
      </View>
      <View style={styles.blog}>
        <Text style={styles.blogText}>
          BLOGS FOR YOU
        </Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 0,
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex: 0.1,
    backgroundColor: '#ebe3db',
    justifyContent: 'flex-start',
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 15,
    color: '#4d4d4d',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4d4d4d',
  },
  blog: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: 25,
    backgroundColor: '#FFFFFF',
  },
  blogText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d4d4d',
  },
});


