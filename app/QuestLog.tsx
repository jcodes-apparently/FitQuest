import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import dailyQuests from "./dailyQuests";
import storyQuests from "./storyQuests";

const router = useRouter();

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
          onPress={() => router.push("/dailyQuests")}
        >
          <Text style={styles.go}>
            Go to
          </Text>
          <Text style={styles.title}>
            daily quests
          </Text>
          <Text style={styles.subtitle}>
            check your quests for today and see what you have left to do!
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.story} 
          onPress={() => router.push("/storyQuests")}
        >
          <Text style={styles.go}>
            Go to
          </Text>
          <Text style={styles.title}>
            story quests
          </Text>
          <Text style={styles.subtitle}>
            check your progress in your current story quest and see what other quests you can complete next!
          </Text>
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
    color: '#4d4d4d',
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
  subtitle: {
    color: '#4d4d4d',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 25,
  }
});
