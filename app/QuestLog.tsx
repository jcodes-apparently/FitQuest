import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";

const navigation = useNavigation;

// render (); {
//     const { navigate } = this.props.navigation;

//     }

export default function Quests() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.Header}>
        <Text style={styles.Hello}>Hello,</Text>
        <Text style={styles.Name}>User</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.daily}
          onPress={() => navigate("Daily Quests")}
        >
          <Text style={styles.go}>Go to</Text>
          <Text style={styles.title}>daily quests</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.story}>
          <Text style={styles.go}>Go to</Text>
          <Text style={styles.title}>story quests</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  daily: {
    flex: 1,
    backgroundColor: "#f6f3ee",
    padding: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 50,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 0.5,
    justifyContent: "center",
  },
  title: {
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  go: {
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5,
  },
  story: {
    flex: 1,
    backgroundColor: "#ebe3db",
    padding: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 2.5,
    marginBottom: 30,
  },
  Header: {
    padding: 25,
    backgroundColor: "#ffffff",
  },
  Hello: {
    fontSize: 20,
    fontWeight: "thin",
  },
  Name: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
