import HealthBar from "@/components/HealthBar";
import StatsBar from "@/components/StatsBar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AvatarStats() {
    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.nameContainer}>
            <Text style={styles.nameText}>
                User Name
            </Text>
            <Text style={styles.headerText}>
                HEALTH STATUS
            </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.avatarContainer}>
            <SafeAreaView style={styles.avatarBG}>
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.statsContainer}>
        <SafeAreaView style={styles.barContainer}>
            <HealthBar />
        </SafeAreaView>
        <SafeAreaView style={styles.barContainer}>
            <StatsBar />
        </SafeAreaView>
        <SafeAreaView>
            
        </SafeAreaView>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    nameContainer: {
        flex: 0.5,
        backgroundColor: '#ffffff',
        paddingTop: 10,
        alignContent: 'center',
    },
    headerText: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4d4d4d',
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    avatarBG: {
        flex: 1,
        backgroundColor: '#faf3e4',
        borderTopRightRadius: 150,
        borderTopLeftRadius: 150,
        marginLeft: 60,
        marginRight: 60,
    },
    avatarContainer: {
        flex: 0.6,
        backgroundColor: '#ffffff',
    },
    barContainer: {
        marginLeft: 60,
        marginRight: 55,
        backgroundColor: '#ffffff',
    },
    statsContainer: {
        flex: 0.5,
        backgroundColor: '#ffffff',
    }
})