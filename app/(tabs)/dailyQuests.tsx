import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DailyTask from "@/components/Task";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Quests from "../QuestLog";

const router = useRouter();

export default function dailyQuests() {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View>
        <View style={Styles.headerContainer}>
          <Text>FITQUEST</Text>
          <Text style={Styles.headerText}>Daily Quests</Text>
        </View>
        {/*insert profile picture stuff here*/}
      </View>
      <DailyTask text={"Task 1"} />
      <DailyTask text={"Task 2"} />
      <DailyTask text={"Task 3"} />
      <DailyTask text={"Task 4"} />
      <DailyTask text={"Task 5"} />
      <DailyTask text={"Task 6"} />
      <DailyTask text={"Task 7"} />
      <TouchableOpacity onPress={() => router.push("/QuestLog")}>
        back to quest log
      </TouchableOpacity>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#d4ceae",
    padding: 25,
    marginTop: 25,
    marginBottom: 25,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
