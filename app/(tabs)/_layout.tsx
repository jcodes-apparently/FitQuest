import { Tabs } from "expo-router";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({}) => (
            <Image
              source={require("@/assets/images/homelogo.png")}
              style={{ width: 35, height: 35, marginTop: 35 }}
            />
          ),
          tabBarStyle: Style.tabBarStyle,
        }}
      />
      <Tabs.Screen
        name="QuestLog"
        options={{
          headerShown: false,
          title: "Quests",
          tabBarShowLabel: false,
          tabBarIcon: ({}) => (
            <Image
              source={require("@/assets/images/questlogo.png")}
              style={{ width: 35, height: 35, marginTop: 35 }}
            />
          ),
          tabBarStyle: Style.tabBarStyle,
        }}
      />
      <Tabs.Screen
        name="AvatarStats"
        options={{
          headerShown: false,
          title: "Avatar",
          tabBarShowLabel: false,
          tabBarIcon: ({}) => (
            <Image
              source={require("@/assets/images/statslogo.png")}
              style={{ width: 35, height: 35, marginTop: 35 }}
            />
          ),
          tabBarStyle: Style.tabBarStyle,
        }}
      />
      <Tabs.Screen
        name="EditAvatar"
        options={{
          headerShown: false,
          title: "Edit",
          tabBarShowLabel: false,
          tabBarIcon: ({}) => (
            <Image
              source={require("@/assets/images/editlogo.png")}
              style={{ width: 35, height: 35, marginTop: 35 }}
            />
          ),
          tabBarStyle: Style.tabBarStyle,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({}) => (
            <Image
              source={require("@/assets/images/logoutlogo.png")}
              style={{ width: 35, height: 35, marginTop: 35 }}
            />
          ),
          tabBarStyle: Style.tabBarStyle,
        }}
      />
    </Tabs>
  );
}

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RootLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Style = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    width: 250,
    backgroundColor: "#efe6d5",
    borderRadius: 25,
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },
});
